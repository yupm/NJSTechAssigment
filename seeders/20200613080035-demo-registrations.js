'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Registrations', 
    [
      {
        teacher_email: 'asura@school.com',
        student_email: 'beth@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'asura@school.com',
        student_email: 'alice@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'asura@school.com',
        student_email: 'dave@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'cronus@school.com',
        student_email: 'dave@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'vulcan@school.com',
        student_email: 'lian@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'vulcan@school.com',
        student_email: 'john@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'zora@school.com',
        student_email: 'beng@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'zora@school.com',
        student_email: 'john@school.edu.sg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Registrations', null, {});
  }
};
