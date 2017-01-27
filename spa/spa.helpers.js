/** SPA helpers **/

/*
* DOM query
* $i() => returns one element from an id (without "#")
* $() => returns a nodeList from a CSS query
*/
var $i = SPA.$i = function(id){
  return document.getElementById(id);
}

var $ = SPA.$ = function(id){
  return document.querySelectorAll(id);
}


/*
* Send a custom event
* Source: https://github.com/xem/HeyListen
* @param eventName: string
* @param data: objectto transfer
*/

SPA.sendCustomEvent = function(eventName, data){
  var event;
  try {
    event = new CustomEvent(eventName, {detail: data});
  }
  catch(r){
    event = document.createEvent("Event");
    event.initEvent(eventName, false, false);
    event.detail = data;
  }
  window.dispatchEvent(event);
}

/*
* Log
* @param message: string / object / ...
*/
var l = function(message){
  console.log(message);
}