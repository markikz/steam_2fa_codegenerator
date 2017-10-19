var SteamTotp = require('steam-totp');

var fs = require('fs');

//? нз что это
var express = require('express');
var app = express();

var SteamCommunity = require("steamcommunity");
var community = new SteamCommunity();

var SteamTrade = require("steam-trade");
var steamTrade = new SteamTrade();

var configtrad1e;
var configmarkik;
var configmark;



app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

try{
	/*
  configtrad1e = JSON.parse(fs.readFileSync('./configtrade.json'));
  configmarkik = JSON.parse(fs.readFileSync('./configmarkik.json'));
  configmark = JSON.parse(fs.readFileSync('./configmark.json'));
  */
} catch (err){
  console.log('Error: unable to parse config.json.');
  console.log(err);
  process.exit(1);
}

var timerId = setTimeout(function tick() {
	/*
  console.log('trad1e:'+SteamTotp.generateAuthCode(configtrad1e.sharedsecret));
  console.log('markik:'+SteamTotp.generateAuthCode(configmarkik.sharedsecret));
  console.log('mark:' + SteamTotp.generateAuthCode(configmark.sharedsecret));
  */
  console.log('-----------------------------');
  console.log(Math.random()*10);
  timerId = setTimeout(tick, 1000);
}, 1000);




