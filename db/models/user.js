const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Initiative, {
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    surname: DataTypes.STRING,
    name: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    federal: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
