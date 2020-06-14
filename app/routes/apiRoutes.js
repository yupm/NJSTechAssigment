const model = require('../../models/index');
const Teacher = model.Teacher;
const Student = model.Student;
const Registration = model.Registration;

module.exports = function(app) {

    //Func: List Teachers
    app.get('/api/teachers', async(req, res) => {
        console.log("Getting teachers")
        Teacher.findAll()
        .then(teachers => res.json(teachers))
        .catch(error => res.json(error));
    });

    //Func: List Students
    app.get('/api/students', async(req, res) => {
        console.log("Getting students")
        Student.findAll()
        .then(students => res.json(students))
        .catch(error => res.json(error));
    });

    
    //User story 1
    app.post('/api/register', async(req, res) => {

        var registrationOutcomes = []

        //check that teacher exist
        let teacherExist = await Teacher
        .findAndCountAll({
           where: {
              teacher_email: req.body.teacher
           },
        });

        //check that student exist
        let studentExists = await Student
        .findAndCountAll({
           where: {
              student_email: req.body.students
           },
        });
    
        var relationships = [];
        
        for( var i = 0; i < teacherExist.rows.length; i++){
            for(var j = 0; j < studentExists.rows.length; j++){
                var record = { 
                    'teacher_email': teacherExist.rows[i].dataValues.teacher_email, 
                    'student_email' : studentExists.rows[j].dataValues.student_email
                }
                relationships.push(record);
            }
        }

        for(var i = 0; i < relationships.length; i++){
            var options = {
                teacher_email: relationships[i].teacher_email,
                student_email: relationships[i].student_email
            };
            let updateReg = await Registration.findOrCreate({
                where: options
            });

            registrationOutcomes.push(updateReg);
        }

        //notify outcomes
        res.status(204).send({ 'Message' : "Students registered to teacher!" });

    });

    //User Story 2
    app.get('/api/commonstudents', async(req, res) => {

        //Parse out the parameters
        var teacherRegistrationsList = []
        var teacherparams = req.query.teacher.toString().split(',');
        teacherparams.map(data => console.log(data));

        //Check that teacher(s) exists
        let teachers = await Teacher
        .findAndCountAll({
           where: {
              teacher_email: teacherparams
           },
        });

        //Teachers match and are found in DB
        if(teachers.count == teacherparams.length){

            for (var i = 0; i <teachers.count; i++){
                console.log(teachers.rows[i].dataValues.teacher_email);
                let curTeacherRegistration = await Registration
                .findAll({
                    where: {
                       teacher_email: teachers.rows[i].dataValues.teacher_email
                    },
                });
                //create the array and append 
                var curRegistrationList = []
                curTeacherRegistration.map(r =>{
                    curRegistrationList.push(r.dataValues.student_email);
                });

                teacherRegistrationsList.push(curRegistrationList);
            }

            //https://stackoverflow.com/questions/11076067/finding-matches-between-multiple-javascript-arrays
            var common = teacherRegistrationsList.shift().filter(function(v) {
                return teacherRegistrationsList.every(function(a) {
                    return a.indexOf(v) !== -1;
                });
            });

            res.status(200).send({ 'students' : common });

        }else{
            res.status(500).send({ 'Error' : "Teachers do not match db records"});
        }
    });

    //User Story 3
    app.post('/api/suspend', async(req, res)=> {
        Student.update( 
            {suspended: true},
            {where: { student_email: req.body.student }}
        )
        .then(result =>{
            res.status(204).send("Student suspended.");
        })
        .catch(err =>
        {
            res.status(500).send(err);
        });
    });
 
    //User Story 4
    app.post('/api/retrievefornotifications', async(req, res) => {
        var teacher = req.body.teacher;
        var notification = req.body.notification;
        var checkNotifyList = []
        var recipientList = []

        //extract recipients from teacher
        let regWithTeacher = await Registration
        .findAndCountAll({
            where: {
               teacher_email: teacher
            },
        });
        
        regWithTeacher.rows.map(reg => {checkNotifyList.push(reg.dataValues.student_email);});

        //extract recipients from notification 
        var reEmail = extractEmails(notification);

        if(reEmail){
            reEmail.forEach(element => {
                checkNotifyList.push(element);
            }); 
        }
 
        var uniqStudents = [...new Set(checkNotifyList)];

        let finalList = await Student
        .findAll({
            where: {
               student_email: uniqStudents
            },
        });

        finalList.map(student =>{
            if(!student.dataValues.suspended){
                recipientList.push(student.dataValues.student_email);
            }
        });

        res.status(200).send({ "recipients" : recipientList});
    });
}

function extractEmails(text)
{
    var rawRegex = text.match(/@([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if(rawRegex){
        return rawRegex.map(e => e.slice(1));
    }else{
        return null;
    }
}