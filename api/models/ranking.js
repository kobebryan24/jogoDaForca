'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ranking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ranking.init({
    nome: DataTypes.STRING,
    pontuacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ranking',
  });
  return Ranking;
};