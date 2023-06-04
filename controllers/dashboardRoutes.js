const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postDB = await Post.findAll({
            where: {'user_id': req.session.user_id},
            include: [User]
        });
        const posts = postDB.map((post) => post.get({ plain: true }));
        console.log(posts);

        res.render('allposts', { layout: 'dashboard', posts, });
    } catch (err) {
        res.redirect('login')
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('newpost', { layout: 'dashboard', });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postDB = await Post.findByPk(req.params.id);

        if (postDB) {
            const post = postDB.get({ plain: true });
            console.log(post);
            res.render('editpost', { layout: 'dashboard', post, });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;