var router = require('express').Router();
var authController = require('../controllers/authentication');
var positionsController = require('../controllers/positions');

router.post('/auth/facebook', authController.facebook);

router.route('/positions')
  .get(positionsController.index);

router.route('/positions/:id')
  .get(positionsController.show)
  .put(positionsController.update)
  .delete(positionsController.delete);


module.exports = router;