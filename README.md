# NodeJS API Asessment
NodeJS API Asessment for Techical Software Engineering Interview. 

Your task is to:
1. Develop a set of API endpoints, listed under *User Stories* below, for teachers to perform administrative functions for their classes.
    * Your code must be hosted on Github, or any other similar service, in a publicly-accessible repository.
    * You may assume that login and access control have already been handled.
2. *(Optional)* Deploy your API to any publicly accessible hosting environment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
#### Global packages
```
npm install -g sequelize-cli
npm install --global mocha
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
```

### Installing

#### Create database in MYSQL
```
mysql -unodeuser -pgovtechnodejs -e "CREATE DATABASE edu_admin_db;"
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

## Deployment

TODO

## Authors

* **Milton** - *Initial work* - [this](https://github.com/yupm/NJSTechAssigment)

## License

As described by the assesement requirements:
```
Your code must be hosted on Github, or any other similar service, in a publicly-accessible repository.
```

