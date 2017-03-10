/*
  So here we have a cool little app that highlights different boxes over time.
  Only problem is, we only want one box highlighted at a time.
  You can add one line of code to fix this problem.
  See if you can figure it out!
*/

var index = 0;
var numSquares = 10;
var divArray = [];

$(document).ready(function(){
  appendDom();
  setInterval(interval, 1000);
});

function interval(){
  index++;
  if(index == numSquares){
    index = 0;
  }
  highlightIndex();
}

function appendDom(){
  //Write Append Dom Code Here
  for(var i = 0; i < numSquares; i++){
    $(".container").append("<div class='square'></div>");
    var $el = $(".container").children().last();
    $el.data("id", i);
    divArray.push($el);
  }
  highlightIndex();
}

function highlightIndex(){
  for(var i = 0; i < divArray.length; i++){

    if(divArray[i].data("id") == index){
      divArray[i].addClass("highlight");
    }
  }
}
