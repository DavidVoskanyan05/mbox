console.log = console.warn = console.error = () => {};
console.error('Something bad happened.');
document.querySelector('.anons_info').addEventListener('click' , function(){window.open("https://www.kinopoisk.ru/film/779602/");});
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');
menuButton.addEventListener('click',function(){
   menu.classList.toggle('activiti');
   menuButton.classList.toggle('menu-button-active');
});



new Swiper('.shows', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    slidesPerView:6,
    // Navigation arrows
    navigation: {
      nextEl: '.next',
    },
    breakpoints: {
      
      1300: {
        slidesPerView: 6,
        spaceBetween: 100
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });

  new Swiper('.movies', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    slidesPerView:6,
    // Navigation arrows
    navigation: {
      nextEl: '.next-1',
    },
    breakpoints: {
      
      1300: {
        slidesPerView: 6,
        spaceBetween: 100
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });
  new Swiper('.actors', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    slidesPerView:6,
    // Navigation arrows
    navigation: {
      nextEl: '.actors_next',
    },
    breakpoints: {
      
      1300: {
        slidesPerView: 6,
        spaceBetween: 100
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });
