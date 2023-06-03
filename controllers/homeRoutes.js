const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

// all posts on homepage
router.get('/', async (req, res) => {
  try {
    const allPostData = await Post.findAll({
      include: [User],
    });
    const posts = allPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

// one post
router.get('/post/:id', async (req, res) => {
  try {
    const onePostData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        User, 
        { 
          model: Comment,
          include: [User],
        },
      ],
    });

    if (onePostData) {
      const post = onePostData.get({ plain: true });
      console.log(post);
      res.render()
    }
    const posts = allPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

// login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// signup
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
