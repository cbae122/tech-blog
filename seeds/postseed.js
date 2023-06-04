const { Post } = require('../models');

const postData = [{
        title: 'Free computer parts giveaway',
        content: 'Local electronics store giving away mousepads!',
        user_id: 1
    },
    {
        title: 'New Movie is...',
        content: 'New direction of DC movies will be interesting',
        user_id: 2
    },
    {
        title: 'How can I become better at coding?',
        content: 'Coding is hard!!!!!',
        user_id: 3
    }
];

const postseed = () => Post.bulkCreate(postData);

module.exports = postseed;