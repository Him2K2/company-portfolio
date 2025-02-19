var express = require('express');
const PortfolioService = require('../services/portfolios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let portfolioId = req.query.id;
  let portfolioData = PortfolioService.getById(portfolioId);
  res.jsonp(portfolioData);
});

module.exports = router;
