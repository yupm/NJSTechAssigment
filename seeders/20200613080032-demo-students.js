'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', 
    [
      {
        student_email: 'alice@school.edu.sg',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_email: 'beth@school.edu.sg',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_email: 'dave@school.edu.sg',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_email: 'john@school.edu.sg',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_email: 'beng@school.edu.sg',
        suspended: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_email: 'lian@school.edu.sg',
        suspended: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
