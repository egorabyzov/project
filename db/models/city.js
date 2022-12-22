const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Region, {
        foreignKey: 'regionId',
      });
    }
  }
  City.init({
    name: DataTypes.STRING,
    regionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
