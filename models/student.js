'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    student_email: DataTypes.STRING,
    suspended: DataTypes.BOOLEAN
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};