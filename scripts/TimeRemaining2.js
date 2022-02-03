const Scene = require('Scene');
const Patches = require('Patches');
const Diagnostics = require('Diagnostics');
const Instruction = require('Instruction');
const Animation = require('Animation');
const FaceTracking = require('FaceTracking');
const Materials = require('Materials');
const Textures = require('Textures');
const Time = require('Time');
const Audio = require('Audio');
const Reactive = require('Reactive');
//const Vector = require('Reactive');

//const text = Scene.root.findFirst('2dtext0');
//var vectorColor = Reactive.HSVA(255, 0, 0, 1);
var textColor = Reactive.RGBA(255, 0, 0, 1);
//const newColor = textColor.toVec4;
const r = 0, g = 0, b = 0, a = 1;
var black = [r, g, b, a];
var signal = 0;
var start = new Date();
var startTime = start.toString();
const finishTime = 'Sun Jul 4 2021 00:00:00 GMT+0800';
//while (true) {
var now = new Date();
var nowTime = now.toString();
if (Date.parse(nowTime) - Date.parse(startTime) > 500) {
  startTime = nowTime;
  signal = 1;
}


const total = Date.parse(finishTime) - Date.parse(startTime);
const second = Math.floor((total / 1000) % 60);
var seconds = second.toString();
if (second < 10) {
  seconds = '0' + seconds;
}
const minute = Math.floor((total / 1000 / 60) % 60);
var minutes = minute.toString();
if (minute < 10) {
  minutes = '0' + minutes;
}
const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
const day = Math.floor(total / (1000 * 60 * 60 * 24));
const timeRemain = ('指考倒數' + day + '天\n' + hour + '小時' + minutes + '分' + seconds + '秒');
const dayRemain = ('指考倒數' + day + '天');

//while ()
//Diagnostics.log(finishTime);
//Diagnostics.log(startTime);

//if (signal === 1) {
Diagnostics.log('倒數 ' + day + ' 天 ');
Diagnostics.log(hour + '小時 ' + minute + '分 ' + second + '秒 ');
Diagnostics.log(total);
Patches.inputs.setString('fromScriptValue', dayRemain);
//Patches.inputs.setColor('fromScriptColor', textColor);
//Patches.inputs.setColor('fromScriptColor2', textColor);
//Patches.inputs.setVector('fromScriptColor', black);
//return timeRemain;
//}
signal = 0;
//};
