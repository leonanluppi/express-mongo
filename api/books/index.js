const express = require('express'),
      router  = express.Router(),
      service = require('./services/book');

router.get('/', service.find);
router.get('/:id', service.show);
router.post('/', service.create);
router.put('/:id', service.update);
router.patch('/:id', service.update);
router.delete('/:id', service.destroy);

module.exports = router;