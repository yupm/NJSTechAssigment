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
![Unit tests for assessment](/images/tests.png?raw=true "Unit Testing")

## Deployment

TODO

## Authors

* **Milton** - *Initial work* - [this](https://github.com/yupm/NJSTechAssigment)

## License

As described by the assesement requirements:
```
Your code must be hosted on Github, or any other similar service, in a publicly-accessible repository.
```

