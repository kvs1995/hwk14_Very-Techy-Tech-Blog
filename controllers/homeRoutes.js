//import modules
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


//get all existing posts 
router.get('/', async (req, res) => {
  try {
    //Get all posts and join with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    //serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    //pass serialized data and sesion flag into template
    res.render('homepage', {
      posts, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    // console.log('1st GET homeRoutes Error: ', err)
  }

}) ;