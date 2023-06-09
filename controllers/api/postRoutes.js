const router = require('express').Router();
const { Post } = require('../../models/');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const create = req.body;
    console.log(create);
    try {
        const postNew = await Post.create({ ...create, user_id: req.session.user_id });
        console.log(postNew);
        res.json(postNew);
    } catch (err) {
        console.log('failed', err);
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const [postUpdate] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (postUpdate > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [postUpdate] = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (postUpdate > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;