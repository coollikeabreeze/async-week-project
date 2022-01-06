const db = require('./database')
const User = require('./models/User')
// const Post = require('./models/Post')

//Associations
// Post.belongsTo(User);
// User.hasMany(Post);

module.exports = {
  // Include your models in this exports object as well!
  db,
  User,
  // Post,
}
