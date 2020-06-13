'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    teacher_email: DataTypes.STRING,
    student_email: DataTypes.STRING
  }, {});
  Registration.associate = function(models) {
    // associations can be defined here
  };
  return Registration;
};