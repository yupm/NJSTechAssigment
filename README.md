# NodeJS API Tech Trial 
The goal of this assessment is to develop a set of endpoints for performing functions of a teacher-parent gateway.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
#### Global packages
```
npm install sequelize-cli --global
npm install mocha --global
```

Please run npm install after cloning this repository.
#### Local packages
```
npm install express --save
npm install http --save
npm install sequelize --save
npm install mysql2 --save
npm install mocha --save-dev
npm install chai --save-dev
npm install request --save-dev
npm install superagent --save-dev
```

### Installing

#### Create database in MYSQL
A database called edu_admin_db will be used by the application. 
This assumes a user called nodeuser has been created. 
If another database is to be used, edit the details in the /config/config.json file.
```
CREATE DATABASE edu_admin_db;
```

#### Perform migrations
```
sequelize db:migrate
```

#### Seed database
```
sequelize db:seed:all
```


## Running the tests
Please start the server first before running the test

Start the server with :
```
npm start
```

Run tests with:
```
npm test
```
![Unit tests for assessment](/images/tests.png?raw=true | width=680)

## Deployment

Application deployed at http://35.197.155.163:8080

Extra endpoints to poll the state of the databases:
```
http://35.197.155.163:8080/api/teachers

http://35.197.155.163:8080/api/students

http://35.197.155.163:8080/api/registrations
```
To be deleted at the end of the month as the config is committed. 


## Authors

* **Milton** - *Assessment* - [this](https://github.com/yupm/NJSTechAssigment)

## License

For assessment or testing. 

