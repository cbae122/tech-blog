const { Comment } = require('../models');

const commentData = [{
        comment_text: "Amazing post!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I disagree with this take.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Learn something new everyday.",
        user_id: 3,
        post_id: 3
    }
];

const commentseed = () => Comment.bulkCreate(commentData);

module.exports = commentseed;