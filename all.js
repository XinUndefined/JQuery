var swiper = new Swiper(".swiper-container", {
  //循環
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //自動
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  $(".course__table tbody tr:even").addClass("odd");
  $(".course__table tbody tr").hover(
    function () {
      $(this).addClass("tr-bg");
    },
    function () {
      $(this).removeClass("tr-bg");
    }
  );
});
