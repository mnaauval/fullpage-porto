// FullPage
new fullpage("#fullpage", {
  anchors: ["page1", "page2", "page3", "page4", "page5"],
  mene: "#navbarNav",
  scrollOverflow: true,
  responsiveWidth: 768,
  responsiveHeight: 600,
  responsiveSlides: true,
  lazyLoading: true,
});

// active section
var activeNavItem = $(".nav-item");

activeNavItem.click(function () {
  activeNavItem.removeClass("active");
  $(this).addClass("active");
});

// owl-carousel
$(document).ready(function () {
  $(".skill-worked").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      460: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3,
        margin: 30,
      },
    },
  });
});
$(document).ready(function () {
  $(".skill-dabbled").owlCarousel({
    // loop: true,
    margin: 20,
    // nav: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      460: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3,
        margin: 30,
      },
    },
  });
});
$(document).ready(function () {
  $(".gallery-list").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      460: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3,
        margin: 30,
      },
    },
  });
});

//  copytoclipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// Toast
var toastTrigger = document.getElementById("mobile");
var toastTrigger2 = document.getElementById("mail");
var toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    var toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
if (toastTrigger2) {
  toastTrigger2.addEventListener("click", function () {
    var toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
