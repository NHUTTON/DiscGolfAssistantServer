const { DataTypes } = require("sequelize");
const db = require("../db");
     
const User = db.define("user", {
        id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
              },
        firstname: {
                type: DataTypes.STRING(100),
     allowNull: false,
                },
        lastname: {
                type: DataTypes.STRING(100),
                allowNull: false,
                },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
        },
  password: {
    type: DataTypes.STRING,
    allowNull: false,     
                },
        supervisorrole: {
                type: DataTypes.BOOLEAN,
                allowNull: false, 
                defaultValue: false
        }
 });

module.exports = User;