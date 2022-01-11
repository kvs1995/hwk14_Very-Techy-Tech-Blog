//import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


//User - Post
//User has Many Posts

//Post - User
//Post belongs to User

//Post - Comment
//Post has Many Comments

//Comment - Post
//Comment belongs Post

//User - Comment
//User has Many Comments

//Comment - User
//Comment belongs to User