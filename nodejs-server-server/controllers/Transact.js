'use strict';

var utils = require('../utils/writer.js');
var Transact = require('../service/TransactService');

module.exports.redemee = function redemee (req, res, next) {
  var frommssid = req.swagger.params['frommssid'].value;
  var tomssid = req.swagger.params['tomssid'].value;
  var amount = req.swagger.params['amount'].value;
  var serviceID = req.swagger.params['serviceID'].value;
  Transact.redemee(frommssid,tomssid,amount,serviceID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transfear = function transfear (req, res, next) {
  var mssid = req.swagger.params['mssid'].value;
  var tomssid = req.swagger.params['tomssid'].value;
  var amount = req.swagger.params['amount'].value;
  Transact.transfear(mssid,tomssid,amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
