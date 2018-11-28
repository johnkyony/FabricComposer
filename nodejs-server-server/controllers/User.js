'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.enableTicket = function enableTicket (req, res, next) {
  var changeTo = req.swagger.params['changeTo'].value;
  var ticket = req.swagger.params['ticket'].value;
  var mssid = req.swagger.params['mssid'].value;
  User.enableTicket(changeTo,ticket,mssid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBalances = function getBalances (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  User.getBalances(ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getlogs = function getlogs (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  User.getlogs(ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUser = function loginUser (req, res, next) {
  var mssid = req.swagger.params['mssid'].value;
  User.loginUser(mssid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.merchantRegistry = function merchantRegistry (req, res, next) {
  var card = req.swagger.params['card'].value;
  var changeTo = req.swagger.params['changeTo'].value;
  var mssid = req.swagger.params['mssid'].value;
  User.merchantRegistry(card,changeTo,mssid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personalPreferences = function personalPreferences (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  var productName = req.swagger.params['productName'].value;
  User.personalPreferences(ticket,productName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registration = function registration (req, res, next) {
  var mssid = req.swagger.params['mssid'].value;
  var id = req.swagger.params['id'].value;
  User.registration(mssid,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRecomendedServices = function userRecomendedServices (req, res, next) {
  var userID = req.swagger.params['userID'].value;
  User.userRecomendedServices(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
