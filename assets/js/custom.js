$(document).ready(function () {
  $(".banner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".LTO-item-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".PWL-item-container").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".WWH-item-container").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$("#menu-open").click(function () {
  $(".sidebar").addClass("active");
});

$("#menu-close").click(function () {
  $(".sidebar").removeClass("active");
});

$("#menu-sec").click(function () {
  $("#my-acc-sec").removeClass("active");
  $("#menu-sec").addClass("active");
  $(".sidebar-categories").css("transform", "translate(0%)");
});

$("#my-acc-sec").click(function () {
  $("#my-acc-sec").addClass("active");
  $("#menu-sec").removeClass("active");
  $(".sidebar-categories").css("transform", "translate(-50%)");
});

// Header Search Result
$(".header-search").focusin(function () {
  $(".header-search-result").addClass("active");
});

$(".header-search").focusout(function () {
  $(".header-search-result").removeClass("active");
});

// Header Search Result mobile
$(".search-mobile").click(function () {
  $(".header-search-result").addClass("active");
});

$("#close-search").click(function () {
  $(".header-search-result").removeClass("active");
});

// Cart
$(".cart").click(function () {
  $(".cart-view").toggleClass("active");
});

// Cart mobile
$("#close-cart-mb").click(function () {
  $(".cart-view").removeClass("active");
});

// collapsible footer
var titles = $(".footer-col:not(:last-child) > .f-title");

titles.on("click", function () {
  $(this).next().toggle(this);
  $(this).toggleClass("active");
});

function validateEmailNews(e) {
  Event.preventDefault;

  let email = $("#newsletter-input").val();

  let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.length === 0) {
    alert("This is a required field.");
    return false;
  } else if (!emailregex.test(email)) {
    alert("Enter a valid Email.");
    return false;
  } else {
    alert("Thank You For Subscribe!.");
    return true;
  }
}
