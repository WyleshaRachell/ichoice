$(document).ready(function() {

  //Initialize the slider
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000
  });

  //Get The Show Releases
  $.ajax({
    url: 'data/shoes.json',
    type: 'GET'
  })
  .done(displayShoes)
  .fail(function(error) {
    console.log(error);
  });


  function displayShoes(response) {
    var releases = response.releases;
    var html = '';

    $(releases).each(function(i, shoe){
      var name = shoe.name;
      var date = shoe.date;
      var image = shoe.image;
      var price = shoe.price;

      html += `<div class="tile">
                <img src="`+ image +`" alt="">
                <div class="overlay">
                  <div class="details">
                    <p class="name">`+ name +`</p>
                    <p class="date">RELEASE DATE: `+ date +`</p>
                    <p class="price">`+ price +`</p>
                  </div>
                </div>
              </div>`;
    });

    $('.tiles').html(html);
    
  }
  

});