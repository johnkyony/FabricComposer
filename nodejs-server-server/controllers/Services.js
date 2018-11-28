'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.addtoServiceList = function addtoServiceList (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  var serviceID = req.swagger.params['serviceID'].value;
  var mssid = req.swagger.params['mssid'].value;
  Services.addtoServiceList(ticket,serviceID,mssid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findMerchantServices = function findMerchantServices (req, res, next) {
  var merchantID = req.swagger.params['merchantID'].value;
  Services.findMerchantServices(merchantID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getservides = function getservides (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  Services.getservides(ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logs = function logs (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  Services.logs(ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mercantserviceslist = function mercantserviceslist (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  Services.mercantserviceslist(ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeServiceList = function removeServiceList (req, res, next) {
  var mssid = req.swagger.params['mssid'].value;
  var serviceID = req.swagger.params['serviceID'].value;
  var ticket = req.swagger.params['ticket'].value;
  Services.removeServiceList(mssid,serviceID,ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
