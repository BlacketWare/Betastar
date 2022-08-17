// This is a Betastar Signup Script.
// Node.JS can be easily run on Replit.
const btoa = require('btoa')
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);
const express = require('express');
const app = express();

var username = prompt("Username:");
var password = prompt("Password:");
var passwordBtoa = btoa(password);
if (username === password) {
  console.log('ERROR: SECURITY: Password should not match username.');
}
var postData = "username=" + username + "&password=" + passwordBtoa;
$.post('https://betastar.org/api/register/', postData, function(data) {
  if (data === 'SUCCESS') {
    console.log('Account Created! Details:\nUsername: ' + username + '\nPassword: ' + password + '\nPassword btoa: ' + passwordBtoa)
  } else {
    let x = `${data}`.toString();
    if (x.includes("have an account")) {
      console.log("ERROR: SYSTEM: You have an account. This shouldn't happen, but it could.");
    } else if (x.includes("characters")) {
      console.log("ERROR: BETASTAR: Username has a limit of 16 characters.");
    } else {
      console.log(`ERROR: ${data}`);
    }
  }
});
