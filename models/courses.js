const { DataTypes } = require("sequelize");
const db = require("../db");

const Course = db.define("course", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    holes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type:DataTypes.INTEGER,
    },
    tee: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Course