const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Level, {
        foreignKey: 'levelId',
      });
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      });
    }
  }
  Initiative.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    for: DataTypes.INTEGER,
    against: DataTypes.INTEGER,
    term: DataTypes.DATEONLY,
    levelId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};
