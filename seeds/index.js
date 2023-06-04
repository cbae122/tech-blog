const commentseed = require('./commentseed');
const postseed = require('./postseed');
const userseed = require('./userseed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await commentseed();
    await postseed();
    await userseed();
    process.exit(0);
};

seedAll();
