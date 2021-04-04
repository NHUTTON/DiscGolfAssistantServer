const { DataTypes } = require("sequelize");
const db = require("../db");

const MyCourses = db.define("mycourse", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
        review: {
            type: DataTypes.TEXT
      }
});

module.exports = MyCourses