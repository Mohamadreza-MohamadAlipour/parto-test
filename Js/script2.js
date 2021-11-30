$(document).ready(function () {
  $('#customer-rev-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    smartSpeed: 1000,
    margin: 25,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
})
