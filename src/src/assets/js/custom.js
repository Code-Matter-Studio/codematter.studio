/*
===========================================================================
  Template Name   : The9
===========================================================================
*/

;(function ($) {
  'use strict'
  var THE = {}
  var plugin_track = 'assets/plugin/'
  $.fn.exists = function () {
    return this.length > 0
  }

  /* ---------------------------------------------- /*
	 * Pre load
	/* ---------------------------------------------- */
  THE.PreLoad = function () {
    document.getElementById('loading').style.display = 'none'
  }

  /*--------------------
        * Menu Close
    ----------------------*/
  THE.MenuClose = function () {
    $('.navbar-nav .nav-link').on('click', function () {
      var toggle = $('.navbar-toggler').is(':visible')
      if (toggle) {
        $('.navbar-collapse').collapse('hide')
      }
    })
  }

  /* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
  THE.HeaderFixd = function () {
    var HscrollTop = $(window).scrollTop()
    if (HscrollTop >= 100) {
      $('header').addClass('fixed-header')
    } else {
      $('header').removeClass('fixed-header')
    }
  }

  /*--------------------
        * One Page
    ----------------------*/
  THE.OnePage = function () {
    $(
      'header a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"])'
    ).on('click', function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname
      ) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top - 70,
            },
            1000
          )
          return false
        }
      }
    })
  }

  THE.HeaderHeight = function () {
    var HHeight = $('.header-height .fixed-header-bar').height()
    $('.header-height').css('min-height', HHeight)
  }

  /*--------------------
    * OwlSlider
    ----------------------*/
  THE.Owl = function () {
    var owlslider = jQuery('div.owl-carousel')
    if (owlslider.length > 0) {
      loadScript(
        plugin_track + 'owl-carousel/js/owl.carousel.min.js',
        function () {
          owlslider.each(function () {
            var $this = $(this),
              $items = $this.data('items') ? $this.data('items') : 1,
              $loop = $this.attr('data-loop') ? $this.data('loop') : true,
              $navdots = $this.data('nav-dots')
                ? $this.data('nav-dots')
                : false,
              $navarrow = $this.data('nav-arrow')
                ? $this.data('nav-arrow')
                : false,
              $autoplay = $this.attr('data-autoplay')
                ? $this.data('autoplay')
                : true,
              $autospeed = $this.attr('data-autospeed')
                ? $this.data('autospeed')
                : 5000,
              $smartspeed = $this.attr('data-smartspeed')
                ? $this.data('smartspeed')
                : 1000,
              $autohgt = $this.data('autoheight')
                ? $this.data('autoheight')
                : false,
              $CenterSlider = $this.data('center')
                ? $this.data('center')
                : false,
              $stage = $this.attr('data-stage') ? $this.data('stage') : 0,
              $space = $this.attr('data-space') ? $this.data('space') : 30

            $(this).owlCarousel({
              loop: $loop,
              items: $items,
              responsive: {
                0: {
                  items: $this.data('xx-items') ? $this.data('xx-items') : 1,
                },
                480: {
                  items: $this.data('xs-items') ? $this.data('xs-items') : 1,
                },
                768: {
                  items: $this.data('sm-items') ? $this.data('sm-items') : 1,
                },
                980: {
                  items: $this.data('md-items') ? $this.data('md-items') : 1,
                },
                1200: { items: $items },
              },
              dots: $navdots,
              autoplayTimeout: $autospeed,
              smartSpeed: $smartspeed,
              autoHeight: $autohgt,
              center: $CenterSlider,
              margin: $space,
              stagePadding: $stage,
              nav: $navarrow,
              navText: [
                "<i class='ti-arrow-left'></i>",
                "<i class='ti-arrow-right'></i>",
              ],
              autoplay: $autoplay,
              autoplayHoverPause: true,
            })
          })
        }
      )
    }
  }

  /*-----------------------
    * Cookis
    -------------------------*/
  THE.Cookis = function () {
    loadScript(plugin_track + 'cookie/herbyCookie.js', function () {
      $(document).herbyCookie({
        btnText: 'Accept',
        policyText: 'Privacy policy',
        text:
          "We use cookies to ensure you get the best experience on our website, if you continue to browse you'll be acconsent with our",
        scroll: false,
        expireDays: 30,
        link: '/policy',
      })
    })
  }

  /* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
  // loadScript
  var _arr = {}
  function loadScript(scriptName, callback) {
    if (!_arr[scriptName]) {
      _arr[scriptName] = true
      var body = document.getElementsByTagName('body')[0]
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = scriptName
      // then bind the event to the callback function
      // there are several events for cross browser compatibility
      // script.onreadystatechange = callback;
      script.onload = callback
      // fire the loading
      body.appendChild(script)
    } else if (callback) {
      callback()
    }
  }

  // Window on Load
  $(window).on('load', function () {
    THE.PreLoad()
  })
  // Document on Ready
  $(document).on('ready', function () {
    setTimeout(function () {
      THE.HeaderFixd(),
        THE.OnePage(),
        THE.MenuClose(),
        THE.HeaderHeight(),
        THE.Cookis(),
        THE.Owl()
    }, 1500)
  })

  // Document on Scrool
  $(window).on('scroll', function () {
    THE.HeaderFixd()
  })

  // Window on Resize
  $(window).on('resize', function () {
    THE.HeaderHeight()
  })
})(jQuery)
