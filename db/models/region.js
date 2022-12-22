const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Federal, {
        foreignKey: 'federalId',
      });
      this.hasMany(models.City, {
        foreignKey: 'regionId',
      });
    }
  }
  Region.init({
    name: DataTypes.STRING,
    federalId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Region',
  });
  return Region;
};
