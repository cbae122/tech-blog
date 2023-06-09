const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [User],
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));

        console.log(comments);

        res.render('post', { comments, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const commentNew = await Comment.create({
            ...body,
            user_id: req.session.user_id,
        });
        res.json(commentNew);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;