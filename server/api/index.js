const router = require("express").Router();

// Your routes go here!
router.use('/users', require("./users"))

router.use((req, res, next) => {
  const err = new Error("Page not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
