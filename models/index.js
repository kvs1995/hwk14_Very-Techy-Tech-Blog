//import models

const User = require('./User');
// const Post = require('./Post');
const Post = require('./Post');
const Comment = require('./Comment');


//User - Post
//User has Many Posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Post - User
//Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//Post - Comment
//Post has Many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

//Comment - Post
//Comment belongs Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

//User - Comment
//User has Many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Comment - User
//Comment belongs to User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };
