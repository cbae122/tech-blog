const { User } = require('../models');

const userData = [{
        username: 'Kevin',
        password: 'password1234'
    },
    {
        username: 'Joe',
        password: 'password1234'
    },
    {
        username: 'Ashley',
        password: 'password1234'
    }
];

const userseed = () => User.bulkCreate(userData);

module.exports = userseed;