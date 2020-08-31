$(document).ready(function () {
  $('.main__slider').lightSlider({
    item: 1,
    loop: true,
    auto: true,
    pauseOnHover: true,
    pause: 7000,
    speed: 1000,
    slideMargin: 0,
    prevHtml: '<span></span>',
    nextHtml: '<span></span>'
  });
  $('.categories__carousel').lightSlider({
    item: 7,
    loop: true,
    auto: true,
    controls: false,
    pause: 7000,
    speed: 1000,
    pager: false,
    responsive: [{
      breakpoint: 1020,
      settings: {
        item: 6
      }
    }, {
      breakpoint: 900,
      settings: {
        item: 5
      }
    }, {
      breakpoint: 800,
      settings: {
        item: 4
      }
    }, {
      breakpoint: 700,
      settings: {
        item: 3
      }
    }, {
      breakpoint: 450,
      settings: {
        item: 2
      }
    }]
  });
  $('.novelty__slider').lightSlider({
    item: 2,
    loop: true,
    auto: true,
    pause: 7000,
    speed: 1000,
    pager: false,
    slideMargin: 20,
    prevHtml: '<span></span>',
    nextHtml: '<span></span>',
    pauseOnHover: true,
    responsive: [{
      breakpoint: 900,
      settings: {
        item: 1
      }
    }, {
      breakpoint: 700,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        item: 1
      }
    }]
  });
  $('.sales__slider').lightSlider({
    item: 4,
    loop: true,
    auto: true,
    pause: 7000,
    speed: 1000,
    pager: false,
    slideMargin: 20,
    prevHtml: '<span></span>',
    nextHtml: '<span></span>',
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1000,
      settings: {
        item: 3
      }
    }, {
      breakpoint: 700,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        item: 1
      }
    }]
  });
  $('.bestsellers__slider').lightSlider({
    item: 4,
    loop: true,
    auto: true,
    pause: 7000,
    speed: 1000,
    pager: false,
    slideMargin: 20,
    prevHtml: '<span></span>',
    nextHtml: '<span></span>',
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1000,
      settings: {
        item: 3
      }
    }, {
      breakpoint: 700,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        item: 1
      }
    }]
  });
  $('.advise__slider').lightSlider({
    item: 4,
    loop: true,
    auto: true,
    pause: 7000,
    speed: 1000,
    pager: false,
    slideMargin: 20,
    prevHtml: '<span></span>',
    nextHtml: '<span></span>',
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1000,
      settings: {
        item: 3
      }
    }, {
      breakpoint: 700,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        item: 1
      }
    }]
  });
  $('.brands__carousel').lightSlider({
    item: 4,
    loop: true,
    auto: true,
    pause: 7000,
    speed: 1000,
    pauseOnHover: true,
    controls: false,
    responsive: [{
      breakpoint: 1100,
      settings: {
        item: 3
      }
    }, {
      breakpoint: 800,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        item: 1
      }
    }]
  });
  $(document).ready(function () {
    $('.product__images__slider').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      thumbItem: 3,
      slideMargin: 0,
      galleryMargin: 15,
      thumbMargin: 10,
      currentPagerPosition: 'left',
      auto: true,
      pause: 7000,
      speed: 1000,
      pauseOnHover: true,
      prevHtml: '<span></span>',
      nextHtml: '<span></span>'
    });
  });
  $('.filters__item__name').click(function () {
    $(this).closest('.filters__item').toggleClass('active');
  });
  $('.categories-list__button').click(function () {
    $(this).find('.icon').toggleClass('active');
    $(this).siblings('ul.first-lvl').slideToggle();
  });
  $('.product__buy button.minus').click(function () {
    var currentCount = $('.product__buy .count').val();

    if (currentCount > 1) {
      $('.product__buy .count').val(--currentCount);
    }
  });
  $('.product__buy button.plus').click(function () {
    var currentCount = $('.product__buy .count').val();
    $('.product__buy .count').val(++currentCount);
  });
  var pathname_url = window.location.pathname;
  var href_url = window.location.href;
  $('.main-menu a').each(function () {
    var link = $(this).attr('href');

    if (pathname_url == link || href_url == link) {
      $(this).addClass('active');
    }
  });

  if ($('.page__address__map').length > 0) {
    ymaps.ready(initMap);
  }

  function initMap() {
    var myMap;
    myMap = new ymaps.Map('map1', {
      center: [55.663294, 37.470330],
      zoom: 15,
      controls: ['geolocationControl', 'zoomControl']
    }, {
      // Зададим опции для элементов управления.
      geolocationControlFloat: 'right'
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl', {
      position: {
        top: 150,
        right: 15
      }
    });
    var myPlacemark = new ymaps.Placemark([55.663294, 37.470330], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/mark-map.png',
      iconImageSize: [36, 51],
      iconImageOffset: [0, -52]
    });
    myMap.geoObjects.add(myPlacemark);
    var myMap;
    myMap2 = new ymaps.Map('map2', {
      center: [55.663294, 37.470330],
      zoom: 15,
      controls: ['geolocationControl', 'zoomControl']
    }, {
      // Зададим опции для элементов управления.
      geolocationControlFloat: 'right'
    });
    myMap2.behaviors.disable('scrollZoom');
    myMap2.controls.add('zoomControl', {
      position: {
        top: 150,
        right: 15
      }
    });
    var myPlacemark = new ymaps.Placemark([55.663294, 37.470330], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/mark-map.png',
      iconImageSize: [36, 51],
      iconImageOffset: [0, -52]
    });
    myMap2.geoObjects.add(myPlacemark);
  }

  var forEach = function forEach(t, o, r) {
    if (Object.prototype.toString.call(t) === '[object Object]') {
      for (var c in t) {
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
      }
    } else {
      for (var e = 0, l = t.length; l > e; e++) {
        o.call(r, t[e], e, t);
      }
    }
  };

  var hamburgers = document.querySelectorAll('.hamburger');

  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener('click', function () {
        this.classList.toggle('is-active');
      }, false);
    });
  }

  $('.hamburger').click(function () {
    $('.main-menu').toggleClass('visible');
  });
});