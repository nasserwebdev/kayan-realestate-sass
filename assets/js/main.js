let mobNavIcon = document.getElementById('mob-nav-icon');
let aside = document.getElementById('aside');

mobNavIcon.addEventListener('click', function () {
  if (aside.style.right === '0px') {
    aside.style.right = '-250px';
  } else {
    aside.style.right = '0px';
  }
});

document.addEventListener('click', function(e) {
  if (!aside.contains(e.target) && e.target !== mobNavIcon) {
    aside.style.right = '-250px';
  }
});

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});