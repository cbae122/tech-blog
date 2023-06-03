const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postDB = await Post.findAll({
            where: {'user_id': req.session.user_id},
            include: [User]
        });
        const posts = postDB.map((post) => post.get({ plain: true }));
        console.log(posts);

        res.render('dashboard', { posts, logged_in: true });
    } catch (err) {
        res.redirect('/login')
    }
});



module.exports = router;