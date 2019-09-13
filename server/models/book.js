'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
    Book.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' })
  };
  return Book;
};