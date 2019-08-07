const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('relapses', {
    "id_user": {
      type: Sequelize.INTEGER,
      model: "users",
      key: "id",
    },
    "status": {
      type: Sequelize.ENUM,
      values: ['pending', 'dismissed', 'else'],
    },
    "name": Sequelize.STRING,
    "day": Sequelize.DATE,
    "amount": Sequelize.DECIMAL,
  }, { db }
);
