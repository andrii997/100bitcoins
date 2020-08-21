$(document).ready(function(){

  /*Header menu*/

  $(".header-mobile_menu").click(function(e){
    e.preventDefault();
    $("#menu").toggleClass("show");
  });

  $("#menu a").click(function(){

    setTimeout(function() {
      $(".header-mobile_menu").click();
    }, 200);
    
  });

  $(document).on('click','.milk-shadow',function(){
    $(".header-mobile_menu").click();
  });
  

  $('.exchange-directions-slider').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:false
          },
          768:{
              items:5,
              nav:false
          },
          1000:{
              items:7,
              nav:false,
              loop:false
          }
      }
  })

  $('.partners-slider').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:false
          },
          768:{
              items:5,
              nav:false
          },
          1000:{
              items:7,
              nav:false,
              loop:false
          }
      }
  })

$('.reviews-slider').owlCarousel({
    loop:true,
    items:1,
    center:true,
    responsiveClass:true,
    responsive:{
        0:{
            nav:true
        },
        600:{
            nav:false
        },
        1000:{
            nav:true,
        }
    }
})

$('.recent-exchanges-slider').owlCarousel({
    loop:false,
    items:3,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
        	items:1,
        	dots:true
        },
        768:{
        	items:2,
        	dots:true
        },
        1000:{
        	items:3,
        	dots:false
        }
    }
})

$('.tariffs-slider').owlCarousel({
    loop:false,
    items:3,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
        },
        768:{
          items:2,
        },
        1000:{
          items:3,
        }
    }
})


  $('.login-popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#login',

    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#login';
        }
      }
    }
  });

  $('.register-popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#login',

    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#login';
        }
      }
    }
  });

  $('.reg-conditions').magnificPopup({
    type: 'inline',
    preloader: false
  });

  $('.orderUSD-popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#login',
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#login';
        }
      }
    }
  });

  $('.orderUSD-conditions-popup').magnificPopup({
    type: 'inline',
    preloader: false
  });

  $('.cancel-popup').magnificPopup({
    type: 'inline',
    preloader: false
  });

});



function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


$(".cabinet-page_form .dropdown").click(function(e){
  e.preventDefault();
  $(this).toggleClass("active");
});

$("#exchange .dropdown").click(function(e){
  e.preventDefault();
  $(this).toggleClass("active");
});

$(".popup-block .dissmiss").click(function(e){
  e.preventDefault();
  $.magnificPopup.close();
});



$('select').wSelect();


$('#demo-multi').val(['soccer', 'archery']).change();

// Testing append from one select to another.
$('#demo option:last').appendTo('#demo-multi');
$('#demo, #demo-multi').wSelect('reset');

