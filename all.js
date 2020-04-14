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
  //form
  $(".course__table tbody tr:even").addClass("odd");
  $(".course__table tbody tr").hover(
    function () {
      $(this).addClass("tr-bg");
    },
    function () {
      $(this).removeClass("tr-bg");
    }
  );
  //top
  $(".top").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
});
