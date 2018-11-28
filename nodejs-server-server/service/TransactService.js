'use strict';

const conn = require('../connection/connect');

/**
 * buy from merchant
 * 
 *
 * frommssid String to
 * tomssid String to
 * amount String serviceID
 * serviceID String service ID
 * no response value expected for this operation
 **/
exports.redemee = function(frommssid,tomssid,amount,serviceID) {
  return new Promise(function(resolve, reject) {
    conn.Buy(frommssid,tomssid, amount, serviceID).then(res=>{
        console.log(res);
        resolve(res);
    });
  });
}


/**
 * transfear to an account
 * 
 *
 * mssid String from
 * tomssid String to
 * amount String amount
 * no response value expected for this operation
 **/
exports.transfear = function(mssid,tomssid,amount) {
  return new Promise(function(resolve, reject) {
    conn.tranferPoints(mssid,tomssid, amount).then(res=>{
        console.log(res);
        resolve(res);
    });
   
  });
}

