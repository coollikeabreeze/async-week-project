const Sequelize = require('sequelize');
const db = require('../database');

const Post = db.define('post', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
})

module.exports = Post;
