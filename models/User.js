//import modules
const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//extend Model
class User extends Model{}

//id, username, password
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'user',
    }
);

//module export
module.exports = Project;
