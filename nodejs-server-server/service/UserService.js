'use strict';

const conn = require('../connection/connect');

/**
 * status enable
 * 
 *
 * changeTo String switch on or off
 * ticket String user id
 * mssid String user mssid
 * returns String
 **/
exports.enableTicket = function(changeTo,ticket,mssid) {
  return new Promise(function(resolve, reject) {
    conn.StatusSwitch(ticket,mssid,changeTo).then(res=>{
      console.log(res);
      if(res.status)
        resolve(res);
      else
        reject({Error:{}});
    });
  });
}



/**
 * Get balances
 * 
 *
 * ticket String ticket
 * returns Object
 **/
exports.getBalances = function(ticket) {
  return new Promise(function(resolve, reject) {
    conn.AccountBalances(ticket).then(res=>{
      console.log(res);
      if(res.CustomerAccount)
      resolve(res);
      else {
        reject({Error:{}});
      }
    });
  });
}


/**
 * Get logs
 * 
 *
 * ticket String user id
 * returns objarr
 **/
exports.getlogs = function(ticket) {
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
 * Logs user into the system
 * 
 *
 * mssid String The user name for login
 * returns login
 **/
exports.loginUser = function(mssid) {
  return new Promise(function(resolve, reject) {

    conn.login(mssid).then(user=>{
      
      console.log(user);
      if(user.type)
        resolve({type:user.type,
          ssid:user.mssid,
          status:user.status,
        id:user.id});
      else
        reject({Error:user});
});
});
}


/**
 * merchantRegistry
 * 
 *
 * card String ticket
 * changeTo String change to merchant or customer
 * mssid String cell
 * returns Object
 **/
exports.merchantRegistry = function(card,changeTo,mssid) {
  return new Promise(function(resolve, reject) {
    conn.RegisterAMerchant(card,mssid,changeTo).then(res=>{
      console.log(res);
      if(res.status)
      resolve(res);
      else
      reject({status:"failed"});
    });
});
}


/**
 * what whould a customer preffer Personal Preferences
 * 
 *
 * ticket String user id
 * productName String user id
 * returns objarr
 **/
exports.personalPreferences = function(ticket,productName) {
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
 * Logs user into the system
 * 
 *
 * mssid String mssid
 * id String id
 * returns Object
 **/
exports.registration = function(mssid,id) {
  return new Promise(function(resolve, reject) {
    conn.register(mssid,id).then(res=>{
      if(res.status)
        resolve(res);
        else
        reject({status:"failed"});
    });
  });
}



/**
 * user Recomended Services
 * 
 *
 * userID String user id
 * returns objarr
 **/
exports.userRecomendedServices = function(userID) {
  return new Promise(function(resolve, reject) {
    conn.AllMtnServices(userID).then(res=>{
      console.log(res);
      const newarr =  randomie(res);
      resolve(newarr);
    });
  });
}


function randomie(arr){
  var indexes = [];
  var newarr = [];
  while(newarr.length !== 5 && arr.length !=newarr.length){ 
     let num =  Math.floor(Math.random() *  arr.length);
     if(indexes.indexOf(num) == -1){
         indexes.push(num);
         newarr.push(arr[num]);
     }
  }
 return newarr;
}