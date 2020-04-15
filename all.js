//swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
$(document).ready(function () {
  //menu
  $(".item--jq").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      "swing"
    );
  });
  //nav
  $(".nav--jq").click(function (event) {
    event.preventDefault();
    $(".nav__menu__main").slideToggle();
  });
  $(".product li").click(function (e) {
    e.preventDefault();
    $(this).addClass("bg-active").siblings().removeClass("bg-active");
  });
  //table
  $(".table--jq tbody tr:even").addClass("odd");
  $(".table--jq tbody tr").hover(
    function () {
      $(this).addClass("tr-bg");
    },
    function () {
      $(this).removeClass("tr-bg");
    }
  );
  //top
  $(".top--jq").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

//form
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
