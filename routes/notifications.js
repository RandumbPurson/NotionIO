var express = require('express');
var router = express.Router();

/* Handle gmail push notifications */
router.post('/finances/gmail', (req, res) => {
  console.log(res);
});

module.exports = router;
