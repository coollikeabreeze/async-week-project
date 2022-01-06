const router = require('express').Router();
const { User } = require('../db')

router.get('/', async(req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
}
)

router.post('/', async(req, res, next) =>{
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    next(error)
  }
})

// router.post('/login', async (req, res, next) => {
//   try {
//     res.send({ token: await User.authenticate(req.body)});
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/signup', async (req, res, next) => {
//   try {
//     const user = await User.create(req.body)
//     res.send({token: await user.generateToken()})
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('User already exists')
//     } else {
//       next(err)
//     }
//   }
// })

module.exports = router
