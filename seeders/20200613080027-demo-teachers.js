'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', 
    [
      {
        teacher_email: 'asura@school.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'cronus@school.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'vulcan@school.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_email: 'zora@school.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
