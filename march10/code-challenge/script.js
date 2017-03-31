var genCount = 0;
$(document).ready(function(){
  $('body').append('<button>Generate</button>');

  addEventListeners();
});

function addEventListeners(){
  $('button').on('click', function(){
    genCount++;
    $('body').append('<div><p>Div generation count: ' + genCount +'</p></div>');
    generateButtons();
  });
  // $('div').on('click', '#swap', function(){
  //   $(this).css('background-color', 'yellow');
  // });
}

function generateButtons(){
  var $el = $('body').children().last();
  $el.append('<button id="swap">Swap</button>' +
             '<button id="delete">Delete</button>');
  $el.on('click', '#swap', function(){
    $el.css('background-color', 'yellow');
  });
  $el.on('click', '#delete', function(){
    $el.remove();
  });
}
