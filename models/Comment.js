//import modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//extend model 
class Comment extends Model {}

//Comment.init
Comment.init(
//id, content, date_created, post_id, user_id
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true, 
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'post',
                key:'id',
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'user',
                key:'id',
            },
        },
        
    },
    {
        sequelize,
        timestamps: false, 
        freezeTableName: true,
        underscored: true, 
        modelName: 'comment',
    }
);

//module export
module.exports = Comment;