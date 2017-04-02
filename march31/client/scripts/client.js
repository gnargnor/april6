$(document).ready(function(){
  console.log('jq sourced');
  getRealEstate();
  addEventListeners();
});


//server calls
function getRealEstate(){
  $.ajax({
    type: 'GET',
    url: '/realestate/get',
    success: function(response){
      console.log('returned from real estate with ', response);
      var forSale = response[0];
      var rentals = response[1];
      console.log('for sale before append: ', forSale);
      appendForSale(forSale);
      appendRentals(rentals);
    }
  });
}

function postRealEstate(data){
  $.ajax({
    type: 'POST',
    url: '/realestate/post',
    data: data,
    success: function(response){
      console.log(response);
    }
  });
}
//end server calls

//event listeners
function addEventListeners(){
  console.log('addeventlisteners');
  //event listener for modal popup buttons
  $('.addButtons').on('click', '.toggleModal', function(){
    console.log('add button clicked ', $(this).text());
    $('.modal').modal('toggle');
  });
  //end add real estate button listeners

  //modal display options
  $('#addRealEstateModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var realEstateType = button.data('realEstateType');
    var modal = $(this);

    if (realEstateType === 'rental'){
      modal.find('.modal-title').text('Rental Property Listing Details');
      modal.find('.modal-body input').val(realEstateType);
    } else {
      modal.find('.modal-title').text('Seller Listing Details');
      modal.find('.modal-body input').val(realEstateType);
    }

  });
  //end modal display options
}
//end event listeners

function appendForSale(forSale){
  for (var j = 0; j < forSale.length; j++){
    var currentProp = forSale[j];
    var cost = currentProp.cost;
    var sqft = currentProp.sqft;
    var city = currentProp.city;

      $('.forSaleProperties').append(
      // $('#forSaleProperties').children().last().append(
        '<div class="col-md-3 col-sm-4 col-xs-6 properties">' +
          '<div class="panel-group">' +
            '<div class="panel panel-primary">' +
              '<div class="panel-heading panel-heading-sm">Cost:</div>' +
              '<div class="panel-body panel-body-sm">' + currentProp.cost + '</div>' +
            '</div>' +
            '<div class="panel panel-success">' +
              '<div class="panel-heading panel-heading-sm">Size:</div>' +
              '<div class="panel-body panel-body-sm">' + currentProp.sqft + ' SqFt</div>' +
            '</div>' +
            '<div class="panel panel-info">' +
              '<div class="panel-heading panel-heading-sm">City:</div>' +
              '<div class="panel-body panel-body-sm">' + currentProp.city + '</div>' +
            '</div>' +
          '</div>' +
        '</div>');

    }
    if (j%4===3){
      console.log('/row');
    $('.test').append('row</div><div class="row">');

    }
}

function appendRentals(rentals){
  for (var j = 0; j < rentals.length; j++){
    var currentProp = rentals[j];
    var rent = currentProp.rent;
    var sqft = currentProp.sqft;
    var city = currentProp.city;

      $('.rentalProperties').append(
        '<div class="col-md-3 col-sm-4 col-xs-6 properties">' +
          '<div class="panel-group">' +
            '<div class="panel panel-primary">' +
              '<div class="panel-heading panel-heading-sm">Rent:</div>' +
              '<div class="panel-body panel-body-sm">' + currentProp.rent + '</div>' +
            '</div>' +
            '<div class="panel panel-success">' +
              '<div class="panel-heading panel-heading-sm">Size:</div>' +
              '<div class="panel-body panel-body-sm">' + currentProp.sqft + ' SqFt</div>' +
            '</div>' +
            '<div class="panel panel-info">' +
              '<div class="panel-heading panel-heading-sm">City:</div>' +
              '<div class="panel-body panel-body-sm">' + currentProp.city + '</div>' +
            '</div>' +
          '</div>' +
        '</div>');

    }
    if (j%4===3){
      console.log('/row');
    $('.test').append('row</div><div class="row">');

    }
  }
