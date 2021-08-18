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
  });
});
$(document).ready(function () {
  $(".skill-dabbled").owlCarousel({
    // loop: true,
    margin: 20,
    // nav: true,
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
