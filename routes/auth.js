var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/google', passport.authenticate('google', {
  scope: [ 'email', 'profile' ],
}));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  res.send({
    status: true,
    data: {
      id: req.user.id,
      name: req.user.displayName
    }
  });
})


module.exports = router;
