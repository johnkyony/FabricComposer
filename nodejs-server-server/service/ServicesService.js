'use strict';


/**
 * Add to mechnat services list
 * 
 *
 * ticket String ticket
 * serviceID String service id
 * mssid String mssid
 * returns objarr
 **/
exports.addtoServiceList = function(ticket,serviceID,mssid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * mechnat services list
 * 
 *
 * merchantID String merchantID
 * returns objarr
 **/
exports.findMerchantServices = function(merchantID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all mtn services list
 * 
 *
 * ticket String ticket
 * returns objarr
 **/
exports.getservides = function(ticket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get logs
 * 
 *
 * ticket String user id
 * returns objarr
 **/
exports.logs = function(ticket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * mechnat services list
 * 
 *
 * ticket String ticket
 * returns objarr
 **/
exports.mercantserviceslist = function(ticket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove from mechant service list
 * 
 *
 * mssid String mssid
 * serviceID String service id
 * ticket String user id
 * returns objarr
 **/
exports.removeServiceList = function(mssid,serviceID,ticket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

