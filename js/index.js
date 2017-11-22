$(document).ready(function() {

  var headerHeight = $('header').outerHeight();
  $('html').css('margin-top', headerHeight+'px');

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

  //Smooth window scroll
  $("nav a").click(function(e) {
      var id = $(this).attr('href'); //#home
      var headerHeight = $('header').outerHeight();

      $('html, body').animate({
          scrollTop: $(id).offset().top - headerHeight
      }, 2000);

      e.preventDefault();
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