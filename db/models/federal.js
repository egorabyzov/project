const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Federal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.Region, {
      //   foreignKey: 'federalId',
      // });
    }
  }
  Federal.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Federal',
  });
  return Federal;
};
