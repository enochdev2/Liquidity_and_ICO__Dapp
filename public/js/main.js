var CRUMINA = {};
!function (e) {
  "use strict";
  var t = e(window),
    n = e(document),
    i = e("body"),
    a = e(".pie-chart"),
    o = e("#site-header"),
    s = e(".counter"),
    r = e(".crumina-countdown"),
    l = e(".crumina-countdown-number"),
    c = e(".crumina-skills-item"),
    d = e("#primary-menu"),
    u = e("#hellopreloader");

  function m(t) {
    return t.id
      ? e(
          '<span ><img class="woox-icon" sytle="display: inline-block;" src="img/' +
            t.element.value.toLowerCase() +
            '.png" /> ' +
            t.text +
            "</span>"
        )
      : t.text;
  }
  (CRUMINA.preloader = function () {
    return (
      t.scrollTop(0),
      setTimeout(function () {
        u.fadeOut(800);
      }, 500),
      !1
    );
  }),
    (CRUMINA.spinnerAnimation = function () {
      var e = document.getElementById("can"),
        t = e.getContext("2d"),
        n = [],
        i = 0,
        a = 0,
        o = 0;

      function s(e, t, n) {
        (this.x = e), (this.y = t), (this.z = n), (this.color = "#0D0");
      }
      (e.width = window.innerWidth),
        (e.height = window.innerHeight),
        (s.prototype.rotateX = function (e) {
          var t = this.z * Math.cos(e) - this.x * Math.sin(e);
          return new s(this.z * Math.sin(e) + this.x * Math.cos(e), this.y, t);
        }),
        (s.prototype.rotateY = function (e) {
          var t = this.y * Math.cos(e) - this.z * Math.sin(e),
            n = this.y * Math.sin(e) + this.z * Math.cos(e);
          return new s(this.x, t, n);
        }),
        (s.prototype.rotateZ = function (e) {
          return new s(
            this.x * Math.cos(e) - this.y * Math.sin(e),
            this.x * Math.sin(e) + this.y * Math.cos(e),
            this.z
          );
        }),
        (s.prototype.perspectiveProjection = function (t, n) {
          var i = t / (n + this.z);
          return new s(
            this.x * i + e.width / 2,
            this.y * i + e.height / 2,
            this.z
          );
        }),
        (s.prototype.draw = function () {
          this.y;
          var e = this.rotateX(i)
            .rotateY(a)
            .rotateZ(0)
            .perspectiveProjection(100, 100);
          (this.color = "rgb(255, 186, 0"),
            (t.fillStyle = this.color),
            t.fillRect(e.x, e.y, 1.5, 1.5);
        });
      for (var r = 0; r < 50; r++)
        for (var l = 0; l < 50; l++) {
          n.push(new s(200 * l - 5e3, 0, 200 * r - 5e3));
        }
      !(function s() {
        (t.fillStyle = "rgba(22, 24, 29, 1)"),
          t.fillRect(0, 0, e.width, e.height);
        for (var r = 0, l = n.length; r < l; r++) {
          var c = r % 50,
            d = Math.floor(r / 50),
            u = Math.sin((c / 50) * 4 * Math.PI + o),
            m = Math.cos((d / 50) * 4 * Math.PI + o);
          (n[50 * d + c].y = 1500 + u * m * 1050), n[r].draw();
        }
        (o += 0.03),
          (i += 0.005),
          (a += 0.005),
          window.requestAnimationFrame(s);
      })();
    }),
    (CRUMINA.flyingBalls = function () {
      setTimeout(function () {
        e(".particles-js").each(function () {
          var t = "particle-" + (Math.floor(889 * Math.random()) + 111);
          e(this).attr("id", t),
            particlesJS.load(
              t,
              "./js/" + e(this).data("settings") + ".json",
              function () {}
            );
        });
      }, 500);
    }),
    (CRUMINA.fixedHeader = function () {
      o.headroom({
        offset: 10,
        tolerance: 5,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp",
        },
      });
    }),
    jQuery(".back-to-top").on("click", function () {
      return (
        e("html,body").animate(
          {
            scrollTop: 0,
          },
          1200
        ),
        !1
      );
    }),
    (CRUMINA.counters = function () {
      s.length &&
        s.each(function () {
          jQuery(this).waypoint(
            function () {
              e(this.element).find("span").countTo(), this.destroy();
            },
            {
              offset: "95%",
            }
          );
        });
    }),
    (CRUMINA.countdowns = function () {
      r.each(function () {
        e(this).TimeCircles({
          circle_bg_color: "#15171c",
          animation_interval: "ticks",
          fg_width: 0.05,
          bg_width: 1.2,
          number_size: 0.36,
          text_size: 0.16,
          time: {
            Days: {
              color: "#ffba00",
            },
            Hours: {
              color: "#ffba00",
            },
            Minutes: {
              color: "#ffba00",
            },
            Seconds: {
              color: "#ffba00",
            },
          },
        });
      }),
        l.each(function () {
          e(this).TimeCircles({
            circle_bg_color: "transparent",
            animation_interval: "ticks",
            number_size: 0.46,
            text_size: 0.12,
            time: {
              Days: {
                color: "transparent",
              },
              Hours: {
                color: "transparent",
              },
              Minutes: {
                color: "transparent",
              },
              Seconds: {
                color: "transparent",
              },
            },
          });
        });
    }),
    (CRUMINA.IsotopeSort = function () {
      e(".sorting-container").each(function () {
        var t = e(this),
          n = t.data("layout").length ? t.data("layout") : "masonry";
        t.isotope({
          itemSelector: ".sorting-item",
          layoutMode: n,
          percentPosition: !0,
        }),
          t.imagesLoaded().progress(function () {
            t.isotope("layout");
          }),
          t
            .siblings(".sorting-menu")
            .find("li")
            .on("click", function () {
              if (e(this).hasClass("active")) return !1;
              e(this).parent().find(".active").removeClass("active"),
                e(this).addClass("active");
              var n = e(this).data("filter");
              return void 0 !== n
                ? (t.isotope({
                    filter: n,
                  }),
                  !1)
                : void 0;
            });
      });
    }),
    (CRUMINA.mediaPopups = function () {
      e(".js-popup-iframe").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
      }),
        e(".js-zoom-image, .link-image").magnificPopup({
          type: "image",
          removalDelay: 500,
          callbacks: {
            beforeOpen: function () {
              (this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim"
              )),
                (this.st.mainClass = "mfp-zoom-in");
            },
          },
          closeOnContentClick: !0,
          midClick: !0,
        });
    }),
    (CRUMINA.progresBars = function () {
      c.length &&
        c.each(function () {
          jQuery(this).waypoint(
            function () {
              e(this.element).find(".count-animate").countTo(),
                e(this.element)
                  .find(".skills-item-meter-active")
                  .fadeTo(300, 1)
                  .addClass("skills-animate"),
                this.destroy();
            },
            {
              offset: "90%",
            }
          );
        });
    }),
    (CRUMINA.pieCharts = function () {
      a.length &&
        a.each(function () {
          jQuery(this).waypoint(
            function () {
              var t = e(this.element),
                n = t.data("start-color"),
                i = t.data("end-color"),
                a = 100 * t.data("value");
              t
                .circleProgress({
                  thickness: 16,
                  startAngle: (-Math.PI / 4) * 2,
                  emptyFill: "transparent",
                  lineCap: "round",
                  fill: {
                    gradient: [n, i],
                    gradientAngle: Math.PI / 4,
                  },
                })
                .on("circle-animation-progress", function (e, n) {
                  t.find(".content").html(
                    parseInt(a * n, 10) + "<span>%</span>"
                  );
                })
                .on("circle-animation-end", function () {}),
                this.destroy();
            },
            {
              offset: "90%",
            }
          );
        });
    }),
    (CRUMINA.Swiper = {
      $swipers: {},
      init: function () {
        var t = this;
        e(".swiper-container").each(function (n) {
          var i = e(this),
            a = "swiper-unique-id-" + n;
          i.addClass(a + " initialized").attr("id", a),
            i
              .closest(".crumina-module")
              .find(".swiper-pagination")
              .addClass("pagination-" + a),
            (t.$swipers[a] = new Swiper("#" + a, t.getParams(i, a))),
            t.addEventListeners(t.$swipers[a]);
        });
      },
      getParams: function (e, t) {
        var n = {
          parallax: !0,
          breakpoints: !1,
          keyboardControl: !0,
          setWrapperSize: !0,
          preloadImages: !0,
          updateOnImagesReady: !0,
          prevNext: !!e.data("prev-next") && e.data("prev-next"),
          changeHandler: e.data("change-handler")
            ? e.data("change-handler")
            : "",
          direction: e.data("direction") ? e.data("direction") : "horizontal",
          mousewheel: !!e.data("mouse-scroll") && {
            releaseOnEdges: !0,
          },
          slidesPerView: e.data("show-items") ? e.data("show-items") : 1,
          slidesPerGroup: e.data("scroll-items") ? e.data("scroll-items") : 1,
          spaceBetween:
            e.data("space-between") || 0 == e.data("space-between")
              ? e.data("space-between")
              : 20,
          centeredSlides:
            !!e.data("centered-slider") && e.data("centered-slider"),
          autoplay: !!e.data("autoplay") && {
            delay: parseInt(e.data("autoplay")),
          },
          autoHeight: !!e.hasClass("auto-height"),
          loop: 0 != e.data("loop") || e.data("loop"),
          effect: e.data("effect") ? e.data("effect") : "slide",
          pagination: {
            type: e.data("pagination") ? e.data("pagination") : "bullets",
            el: ".pagination-" + t,
            clickable: !0,
          },
          coverflow: {
            stretch: e.data("stretch") ? e.data("stretch") : 0,
            depth: e.data("depth") ? e.data("depth") : 0,
            slideShadows: !1,
            rotate: 0,
            modifier: 2,
          },
          fade: {
            crossFade: !e.data("crossfade") || e.data("crossfade"),
          },
        };
        return (
          n.slidesPerView > 1 &&
            (n.breakpoints = {
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              769: {
                slidesPerView: n.slidesPerView,
                slidesPerGroup: n.slidesPerView,
              },
            }),
          n
        );
      },
      addEventListeners: function (t) {
        var n = this,
          i = t.$el.closest(".crumina-module-slider");
        t.params.prevNext &&
          i.on("click", ".swiper-btn-next, .swiper-btn-prev", function (n) {
            n.preventDefault(),
              e(this).hasClass("swiper-btn-next")
                ? t.slideNext()
                : t.slidePrev();
          }),
          i.on("click", ".slider-slides .slides-item", function (n) {
            n.preventDefault();
            var i = e(this);
            t.params.loop ? t.slideToLoop(i.index()) : t.slideTo(i.index());
          }),
          i.on("click", ".time-line-slides .slides-item", function (a) {
            a.preventDefault();
            var o = e(this);
            n.changes.timeLine(t, i, n, o.index());
          }),
          t.on("slideChange", function () {
            var e = n.changes[t.params.changeHandler];
            "function" == typeof e && e(t, i, n, this.realIndex);
          });
      },
      changes: {
        thumbsParent: function (e, t) {
          var n = t.find(".slider-slides .slides-item");
          n.removeClass("swiper-slide-active"),
            n.eq(e.realIndex).addClass("swiper-slide-active");
        },
        timeParent: function (e, t, n, i) {
          var a = t.find(".swiper-time-line").attr("id"),
            o = n.$swipers[a];
          o.slideTo(i), n.changes.timeLine(o, t, n, i);
        },
        timeLine: function (e, t, n, i) {
          var a = e.$el.find(".swiper-slide"),
            o = a.eq(i);
          o.hasClass("time-active") ||
            (a.removeClass("time-active"),
            o.addClass("time-active").removeClass("visited"),
            o.prevAll(".swiper-slide").addClass("visited"),
            o.nextAll(".swiper-slide").removeClass("visited"));
        },
      },
    }),
    e(".js-open-popup").on("click", function () {
      return (
        e(this)
          .closest(".has-popup")
          .find(".window-popup")
          .toggleClass("active"),
        i.toggleClass("popup-active"),
        !1
      );
    }),
    (CRUMINA.rangeSlider = function () {
      e(".range-slider-js").ionRangeSlider({
        type: "double",
        grid: !0,
        min: 0,
        max: 1e3,
        from: 200,
        to: 800,
        prefix: "$",
      });
    }),
    (CRUMINA.select2Init = function () {
      e(".woox--select").select2();
    }),
    (CRUMINA.select2LS = function () {
      var t = e(".language-switcher");
      t.select2({
        templateResult: m,
      }),
        t.on("select2:select", function (e) {
          var t = e.params.data,
            n = jQuery(t.element);
          if (n.length && !0 === t.selected && !0 !== t.disabled) {
            var i = n.data("href");
            i && (location.href = i);
          }
        });
    }),
    e(".custom-dropdown").on("click", ".init", function () {
      e(this).closest(".custom-dropdown").children("li:not(.init)").toggle();
    });
  var p = e(".custom-dropdown").children("li:not(.init)");
  e(".custom-dropdown").on("click", "li:not(.init)", function () {
    p.removeClass("selected"),
      e(this).addClass("selected"),
      e(".custom-dropdown").children(".init").html(e(this).html()),
      p.toggle();
  }),
    (CRUMINA.overlayMenu = function () {
      e(".js-open-aside").click(function () {
        e("body").toggleClass("popup-active"),
          e("#overlay-menu").toggleClass("open");
      });
    }),
    (CRUMINA.overlayBody = function () {
      e(".js-body-overlay").click(function () {
        e("body").toggleClass("body-overlay-active");
      });
    }),
    (CRUMINA.Materialize = function () {
      e.material.init(),
        e(".checkbox > label").on("click", function () {
          e(this).closest(".checkbox").addClass("clicked");
        }),
        e(".datepicker").each(function () {
          var e = jQuery(this);
          e.datepicker().on("changeDate", function (t) {
            e.datepicker("hide");
          });
        });
    }),
    (CRUMINA.mainMenu = {
      $links: null,
      init: function () {
        this.$links = e(".overlay-menu-list > .overlay-menu-item");
      },
      addEventListeners: function () {
        var t = this;
        this.removeEventListeners(),
          CRUMINA.isTouch()
            ? (e(document).on("click.menu", function (n) {
                var i = e(n.target);
                i.closest(".overlay-menu-item").length ||
                  i.hasClass("overlay-menu-item") ||
                  t.$links.find(".sub-menu").removeClass("open");
              }),
              this.$links.on("click.menu", function () {
                var n = e(this),
                  i = n.find(".sub-menu");
                i.hasClass("open")
                  ? i.removeClass("open")
                  : (t.$links.find(".sub-menu").removeClass("open"),
                    n.find(".sub-menu").addClass("open"));
              }))
            : this.$links.on("mouseenter.menu mouseleave.menu", function (t) {
                var n = e(this);
                "mouseenter" === t.type && n.find(".sub-menu").addClass("open"),
                  "mouseleave" === t.type &&
                    n.find(".sub-menu").removeClass("open");
              });
      },
      removeEventListeners: function () {
        e(document).off(".menu"), this.$links.off(".menu");
      },
    }),
    (CRUMINA.isTouch = function () {
      return !!(
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      );
    }),
    (CRUMINA.updateResponsiveInit = function () {
      var t = null;
      e(window)
        .on("resize", function () {
          null === t &&
            (t = window.setTimeout(function () {
              (t = null), CRUMINA.mainMenu.addEventListeners();
            }, 200));
        })
        .resize();
    }),
    (CRUMINA.chartStatistics = function () {
      var t = [],
        n = 0,
        i = [
          {
            name: "MarketCap",
            color: "#3a3e48",
          },
          {
            name: "Ethereum",
            color: "#2a2e36",
          },
          {
            name: "WOOX",
            color: "#ffba00",
          },
        ];
      (CRUMINA.elementChart = function () {
        setTimeout(function () {
          e(".js-chart-statistic").each(function () {
            var n = "chart-" + (Math.floor(889 * Math.random()) + 111);
            e(this).attr("id", n),
              Highcharts.stockChart(n, {
                credits: {
                  enabled: !1,
                },
                chart: {
                  backgroundColor: "#181a20",
                },
                rangeSelector: {
                  buttons: [
                    {
                      type: "day",
                      count: 1,
                      text: "1d",
                    },
                    {
                      type: "week",
                      count: 1,
                      text: "1w",
                    },
                    {
                      type: "month",
                      count: 1,
                      text: "1m",
                    },
                    {
                      type: "month",
                      count: 3,
                      text: "3m",
                    },
                    {
                      type: "year",
                      count: 1,
                      text: "1y",
                    },
                    {
                      type: "all",
                      text: "All",
                    },
                  ],
                  inputEnabled: !1,
                },
                navigator: {
                  enabled: !1,
                },
                scrollbar: {
                  enabled: !1,
                },
                xAxis: {
                  lineColor: "#21232b",
                  gridLineColor: "#21232b",
                  gridLineWidth: 1,
                },
                yAxis: {
                  min: 0,
                  gridLineColor: "#21232b",
                  gridLineWidth: 2,
                  title: {
                    text: "Price (USD)",
                  },
                  labels: {
                    format: "{value} $",
                  },
                  plotLines: [
                    {
                      value: 0,
                      width: 2,
                      color: "silver",
                    },
                  ],
                },
                plotOptions: {
                  series: {
                    compare: "value",
                    showInNavigator: !0,
                    lineWidth: 4,
                    colorIndex: 20,
                  },
                },
                tooltip: {
                  pointFormat:
                    '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                  valueDecimals: 2,
                  split: !0,
                },
                series: t,
              });
          });
        }, 500);
      }),
        e.each(i, function (a, o) {
          e.getJSON("json/" + o.name.toLowerCase() + "-c.json", function (e) {
            (t[a] = {
              name: o.name,
              data: e,
              color: o.color,
            }),
              (n += 1) === i.length && CRUMINA.elementChart();
          });
        });
    }),
    (CRUMINA.initSmoothScroll = function () {
      if ("querySelector" in document && "addEventListener" in window) {
        for (
          var t = e("#primary-menu a[href*=\\#], .btn[href*=\\#]").filter(
              function () {
                return e(this).is(":not([href=\\#])");
              }
            ),
            n = 0,
            i = t.length;
          n < i;
          n++
        ) {
          new RegExp(window.location.hostname + window.location.pathname).test(
            t[n].href
          ) && t[n].setAttribute("data-scroll", !0);
        }
        if (window.location.hash) {
          var a = document.querySelector(window.location.hash),
            s = document.querySelector(
              'a[href*="' + window.location.hash + '"]'
            );
          smoothScroll.animateScroll(a, s, {});
        }
        smoothScroll.init({
          selector: "[data-scroll]",
          speed: 500,
          easing: "easeOutQuad",
          offset: o.height(),
          updateURL: !0,
          callback: function (e, t) {},
        }),
          e("#primary-menu")
            .find("[href=\\#]")
            .on("click", function () {
              return !1;
            });
      }
    }),
    (CRUMINA.shareButtons = function () {
      e(".btn--share-js").on("click", function () {
        var t = e(this);
        t.hasClass("open") ? t.removeClass("open") : t.toggleClass("open");
      }),
        e(".btn--share-js a").on("click", function (t) {
          e(this).closest(".btn--share-js").hasClass("open")
            ? window.Sharer.init()
            : t.preventDefault();
        });
    }),
    (CRUMINA.burgerAnimation = function () {
      function e(e) {
        e.draw("80% - 240", "80%", 0.3, {
          delay: 0.1,
          callback: function () {
            !(function (e) {
              e.draw("100% - 545", "100% - 305", 0.6, {
                easing: ease.ease("elastic-out", 1, 0.3),
              });
            })(e);
          },
        });
      }

      function t(e) {
        e.draw(20, 380, 0.1, {
          callback: function () {
            !(function (e) {
              e.draw(200, 200, 0.3, {
                easing: ease.ease("bounce-out", 1, 0.3),
              });
            })(e);
          },
        });
      }

      function n(e) {
        e.draw("90% - 240", "90%", 0.1, {
          easing: ease.ease("elastic-in", 1, 0.3),
          callback: function () {
            !(function (e) {
              e.draw("20% - 240", "20%", 0.3, {
                callback: function () {
                  !(function (e) {
                    e.draw(80, 320, 0.7, {
                      easing: ease.ease("elastic-out", 1, 0.3),
                    });
                  })(e);
                },
              });
            })(e);
          },
        });
      }
      var i = document.getElementById("pathD"),
        a = document.getElementById("pathE"),
        o = document.getElementById("pathF"),
        s = new Segment(i, 80, 320),
        r = new Segment(a, 80, 320),
        l = new Segment(o, 80, 320),
        c = document.getElementById("menu-icon-wrapper"),
        d = document.getElementById("menu-icon-trigger"),
        u = !0;
      (c.style.visibility = "visible"),
        (d.onclick = function () {
          (c.className = "menu-icon-wrapper scaled"),
            u
              ? (e(s), t(r), e(l))
              : (n(s),
                r.draw(80, 320, 0.7, {
                  delay: 0.1,
                  easing: ease.ease("elastic-out", 2, 0.4),
                }),
                n(l)),
            (u = !u),
            setTimeout(function () {
              !(function (e) {
                e.className = "menu-icon-wrapper";
              })(c);
            }, 450);
        });
    }),
    t.keydown(function (t) {
      27 == t.which &&
        (e("#overlay-menu").removeClass("open"),
        i.removeClass("popup-active"),
        e(".window-popup").removeClass("active"),
        e("body").removeClass("body-overlay-active"));
    }),
    (CRUMINA.maps = {
      maps: {
        mapMain: {
          config: {
            id: "map",
            map: {
              center: new L.LatLng(-37.613611, 144.963056),
              zoom: 10,
              maxZoom: 18,
              layers: new L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                {
                  attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                  subdomains: "abcd",
                  maxZoom: 19,
                }
              ),
            },
            icon: {
              iconSize: [70, 87],
              iconAnchor: [22, 94],
              className: "icon-map",
            },
            cluster: {
              iconSize: [40, 40],
            },
          },
          markers: [
            {
              coords: [-37.813611, 144.963056],
              icon: "marker-google.png",
            },
          ],
        },
      },
      init: function () {
        for (var e in this.maps) {
          var t = this.maps[e];
          if (t.config && t.markers && document.getElementById(t.config.id)) {
            var n = new L.map(t.config.id, t.config.map),
              i = L.markerClusterGroup({
                iconCreateFunction: function (n) {
                  var i = n.getChildCount(),
                    a = t.config.cluster;
                  return new L.DivIcon({
                    html: "<div><span>" + i + "</span></div>",
                    className: "marker-cluster marker-cluster-" + e,
                    iconSize: new L.Point(a.iconSize[0], a.iconSize[1]),
                  });
                },
              });
            t.markers.forEach(function (e) {
              t.config.icon.iconUrl = "./img/" + e.icon;
              var n = L.icon(t.config.icon),
                a = L.marker(e.coords, {
                  icon: n,
                });
              i.addLayer(a);
            }),
              n.addLayer(i),
              this.disableScroll(jQuery("#" + t.config.id), n);
          }
        }
      },
      disableScroll: function (e, t) {
        t.scrollWheelZoom.disable(),
          e.bind("mousewheel DOMMouseScroll", function (e) {
            e.stopPropagation(),
              1 == e.ctrlKey
                ? (e.preventDefault(),
                  t.scrollWheelZoom.enable(),
                  setTimeout(function () {
                    t.scrollWheelZoom.disable();
                  }, 1e3))
                : t.scrollWheelZoom.disable();
          });
      },
    }),
    n.ready(function () {
      e("#menu-icon-wrapper").length && CRUMINA.burgerAnimation(),
        d.crumegamenu({
          showSpeed: 0,
          hideSpeed: 0,
          trigger: "hover",
          animation: "drop-up",
          effect: "fade",
          indicatorFirstLevel: "",
          indicatorSecondLevel: "",
        }),
        CRUMINA.fixedHeader(),
        CRUMINA.Materialize(),
        CRUMINA.Swiper.init(),
        CRUMINA.select2Init(),
        CRUMINA.select2LS(),
        CRUMINA.mediaPopups(),
        CRUMINA.IsotopeSort(),
        CRUMINA.overlayMenu(),
        CRUMINA.overlayBody(),
        CRUMINA.flyingBalls(),
        CRUMINA.maps.init(),
        CRUMINA.countdowns(),
        CRUMINA.initSmoothScroll(),
        CRUMINA.shareButtons(),
        CRUMINA.rangeSlider(),
        e("#can").length && CRUMINA.spinnerAnimation(),
        e(".js-chart-statistic").length && CRUMINA.chartStatistics(),
        CRUMINA.progresBars(),
        CRUMINA.pieCharts(),
        CRUMINA.counters(),
        e(".perfect-scroll").perfectScrollbar({
          wheelPropagation: !1,
        }),
        CRUMINA.mainMenu.init(),
        CRUMINA.updateResponsiveInit(),
        e(".mCustomScrollbar").perfectScrollbar({
          wheelPropagation: !1,
        });
    });
};
