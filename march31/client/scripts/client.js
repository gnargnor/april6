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
      // appendRentals(rentals);
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
    var button = $(event.relatedTarget); // Button that triggered the modal
    var realEstateType = button.data('realEstateType'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
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



  //listener for image preview
  // $(document).on('change', '.btn-file :file', function() {
	// 	var input = $(this),
	// 		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	// 	input.trigger('fileselect', [label]);
	// });
  //
	// $('.btn-file :file').on('fileselect', function(event, label) {
  //
  //   var input = $(this).parents('.input-group').find(':text'),
	// 	  log = label;
  //
	// 	  if( input.length ) {
	// 	    input.val(log);
	// 	  } else {
	// 	    if( log ) alert(log);
	// 	  }
  //
	// });
  //
  //
	// $("#imgInp").change(function(){
	// 	readURL(this);
	// });
  //
  // function readURL(input) {
  //
  //   if (input.files && input.files[0]) {
  //       var reader = new FileReader();
  //
  //       reader.onload = function (e) {
  //           $(input).next('img').attr('src', e.target.result);
  //       };
  //
  //       reader.readAsDataURL(input.files[0]);
  //   }
  // }

}
  //end preview listener

//end event listeners

function appendForSale(forSale){
  for (var j = 0; j < forSale.length; j++){
    var currentProp = forSale[j];
    var cost = currentProp.cost;
    var sqft = currentProp.sqft;
    var city = currentProp.city;

    //cycle through for sale properties
    // if (j !== 0 && j%4===0){
    //   console.log('modulo ', currentProp.cost);
    //   $('.test').append(
    //     '<div class="row">row start' +
    //       '<div class="col-md-3">' +
    //         '<div class="panel-group"' +
    //           '<div class="panel panel-primary">' +
    //             '<div class="panel-heading">Cost:</div>' +
    //             '<div class="panel-body">' + currentProp.cost + '</div>' +
    //           '</div>' +
    //           '<div class="panel panel-success">' +
    //             '<div class="panel-heading">Size:</div>' +
    //             '<div class="panel-body">' + currentProp.sqft + ' SqFt</div>' +
    //           '</div>' +
    //           '<div class="panel panel-info">' +
    //             '<div class="panel-heading">City:</div>' +
    //             '<div class="panel-body">' + currentProp.city + '</div>' +
    //           '</div>' +
    //         '</div>' +
    //       '</div>');
    //
    // } else {
      console.log('else ', currentProp.cost);
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

// }
