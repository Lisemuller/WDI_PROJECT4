var router = require('express').Router();
var authController = require('../controllers/authentication');
var positionsController = require('../controllers/positions');
var usersController = require('../controllers/users');
var scoresController = require('../controllers/scores');

router.post('/auth/facebook', authController.facebook);

router.route('/positions')
  .get(positionsController.index);

router.route('/users')
  .get(usersController.index);

router.route('/scores')
  .get(scoresController.index)
  .post(scoresController.create);
  
router.route('/scores/:id')
  .put(scoresController.update);

router.route('/positions/:id')
  .get(positionsController.show)
  .put(positionsController.update)
  .delete(positionsController.delete);


module.exports = router;