//import modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//extend mode
class Post extends Model {}

//Post init
Post.init(
    //id, title, contents, user_id, date_created
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key:'id',
            },
        },
    }    
);

//module export
module.exports = Post;