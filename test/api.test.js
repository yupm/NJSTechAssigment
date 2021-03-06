var expect  = require('chai').expect;
var request = require('request');
var superagent = require('superagent');

describe("Main page check", function() {
    it('Main Page test', function(done) {
        request('http://localhost:8080' , function(error, response, body) {
            expect(body).to.equal('Hello World!');
            done();
        });
    });
});

describe("User Story 1 tests", function() {

    it("Register students to teacher", function(done) {
        const formData ={
            "teacher": "cronus@school.com",
            "students": [
                "lian@school.edu.sg",
                "beng@school.edu.sg"
            ]
        };

        superagent.post('http://localhost:8080/api/register')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(204);
            done();
        })
    });   
    
    it("Register unlisted teacher to student", function(done) {
        const formData ={
            "teacher": "fake@school.com",
            "students": [
                "lian@school.edu.sg",
                "beng@school.edu.sg"
            ]
        };

        superagent.post('http://localhost:8080/api/register')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(400);
            done();
        })
    });  

    it("Register unlisted student to teacher", function(done) {
        const formData ={
            "teacher": "cronus@school.com",
            "students": [
                "fake1@school.edu.sg",
                "fake2@school.edu.sg"
            ]
        };

        superagent.post('http://localhost:8080/api/register')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(400);
            done();
        })
    });  
});

describe("User Story 2 tests", function() {
    it("Get students common to 1 teacher", function(done) {
        request('http://localhost:8080/api/commonstudents?teacher=asura@school.com' , function(error, response, body) {
            var myJSON = JSON.stringify({
                "students": [
                    "beth@school.edu.sg",
                    "alice@school.edu.sg",
                    "dave@school.edu.sg"
                ]
            });
            expect(body).to.equal(myJSON);
            done();
        });
    });    

    it("Get students common to 2 teachers", function(done) {
        request('http://localhost:8080/api/commonstudents?teacher=vulcan@school.com&teacher=asura@school.com' , function(error, response, body) {
            var myJSON = JSON.stringify({
                "students": [
                    "alice@school.edu.sg",
                    "dave@school.edu.sg"
                ]
            });
            expect(body).to.equal(myJSON);
            done();
        });
    });    


    it("Get students common to 3 teachers", function(done) {
        request('http://localhost:8080/api/commonstudents?teacher=vulcan@school.com&teacher=asura@school.com&teacher=cronus@school.com' , function(error, response, body) {
            var myJSON = JSON.stringify({
                "students": [
                    "alice@school.edu.sg",
                    "dave@school.edu.sg"
                ]
            });
            expect(body).to.equal(myJSON);
            done();
        });
    });    

});

describe("User Story 3 tests", function() {
    it("Suspend a specific student", function(done) {
        const formData ={
            "student" : "john@school.edu.sg"
        };

        superagent.post('http://localhost:8080/api/suspend')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(204);
            done();
        })
    });       
    
    it("Student does not exist", function(done) {
        const formData ={
            "student" : "geek@school.edu.sg"
        };

        superagent.post('http://localhost:8080/api/suspend')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(400);
            done();
        })
    });          

});

describe("User Story 4 tests", function() {
    it("Get list of students who can receive a given notification only from teacher", function(done) {
        const formData ={
            "teacher":  "asura@school.com",
            "notification": "Hello students!"
        };

        superagent.post('http://localhost:8080/api/retrievefornotifications')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(200);

            var myJSON = JSON.stringify({
                "recipients": [
                    "alice@school.edu.sg",
                    "beth@school.edu.sg",
                    "dave@school.edu.sg"
                ]
            });
            expect(JSON.stringify(res.body)).to.equal(myJSON);
            
            done();
        })
    });       
    
    it("Get list of students who can receive a given notification from teacher and @notification body", function(done) {
        const formData ={
            "teacher":  "cronus@school.com",
            "notification": "Hello students! @beth@school.edu.sg"
        };

        superagent.post('http://localhost:8080/api/retrievefornotifications')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(200);

            var myJSON = JSON.stringify({
                "recipients": [
                    "alice@school.edu.sg",
                    "beth@school.edu.sg",
                    "dave@school.edu.sg"
                ]
            });
            expect(JSON.stringify(res.body)).to.equal(myJSON);
            
            done();
        })
    });          

    it("Get list of students who can receive a given notification from teacher and @notification body but some notified student are suspended", function(done) {
        const formData ={
            "teacher":  "cronus@school.com",
            "notification": "Hello students! @beth@school.edu.sg @john@school.edu.sg"
        };

        superagent.post('http://localhost:8080/api/retrievefornotifications')
        .set('Content-Type', 'application/json')
        .send(formData)
        .end(function(err,res){
            expect(res.status).to.equal(200);

            var myJSON = JSON.stringify({
                "recipients": [
                    "alice@school.edu.sg",
                    "beth@school.edu.sg",
                    "dave@school.edu.sg"
                ]
            });
            expect(JSON.stringify(res.body)).to.equal(myJSON);
            
            done();
        })
    });          
});
