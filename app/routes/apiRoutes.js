
module.exports = function(app) {

    //Test 1: List Teachers
    app.get('/api/getteachers', async(req, res) => {
        
    });

    //Test 2: Add teachers
    app.post('/api/setteachers', async(req, res) => {
        res.send('US1!')
    });

    //Function 3: Add Student
    app.post('/api/setstudent', async(req, res) => {
        res.send('US1!')
    });


    
    //User story 1
    app.post('/api/register', async(req, res) => {
        res.send('US1!')
    });

    //User Story 2
    app.get('/api/commonstudents', async(req, res) => {
        res.send('US2!')
    });

    //User Story 3
    app.post('/api/suspend', function(req, res) {
        res.send('US3!')
    });
 
    //User Story 4
    app.post('/api/retrievefornotifications', function(req, res) {
        res.send('US4!')
    });


}
