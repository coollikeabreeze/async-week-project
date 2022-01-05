const Sequelize = require('sequelize');
const db = require('../database');
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
//const axios = require('axios');

// const SALT_ROUNDS = 5;

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.iconbunny.com/icons/media/catalog/product/1/4/147.1-student-icon-iconbunny.jpg',
    validate: {
      isUrl: true
    }
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  country: {
    type: Sequelize.STRING
  }
})

module.exports = User;

// User.prototype.correctPassword = function(candidatePwd) {
//   return bcrypt.compare(candidatePwd, this.password);
// }

// User.prototype.generateToken = function() {
//   return jwt.sign({id: this.id}, process.env.JWT)
// }

// User.authenticate = async function({ username, password }){
//     const user = await this.findOne({where: { username }})
//     if (!user || !(await user.correctPassword(password))) {
//       const error = Error('Incorrect username/password');
//       error.status = 401;
//       throw error;
//     }
//     return user.generateToken();
// };

// User.findByToken = async function(token) {
//   try {
//     const {id} = await jwt.verify(token, process.env.JWT)
//     const user = User.findByPk(id)
//     if (!user) {
//       throw 'nooo'
//     }
//     return user
//   } catch (ex) {
//     const error = Error('bad token')
//     error.status = 401
//     throw error
//   }
// }

// const hashPassword = async(user) => {
//   //in case the password has been changed, we want to encrypt it with bcrypt
//   if (user.changed('password')) {
//     user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
//   }
// }
