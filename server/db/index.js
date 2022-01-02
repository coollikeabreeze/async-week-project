const db = require('./database')
const User = require('./models/User')
const Post = require('./models/Post')

//Associations
Post.belongsTo(User)
User.hasMany(Post)

module.exports = {
  db,
  User,
  Post
}
