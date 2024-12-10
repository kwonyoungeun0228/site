jQuery(document).ready(function ($) {

	$(function () {
        var mediaLG = window.matchMedia('(min-width: 992px)');
        
		initHeader();
		initCommon();
        initMain();
        initSub();

        function initHeader() {
            $(".hbg-btn").on("click", function() {
                $(this).toggleClass("close");
                $(".main-menu").toggleClass("active");
                $("html").toggleClass("fixed");
            });

            // mainMenu
            $(".main-menu > li").on("click", function() {
                if($("main-menu > li").hasClass("on")) {
                    $("main-menu > li").removeClass("on");
                    $("#mask").removeClass("on");
                } else {
                    $(this).addClass("on");
                    $("#mask").addClass("on");
                }
            });
            $(".main-menu > li").on("mouseenter", function() {
                $("main-menu > li").removeClass("on");
                $(this).addClass("on");
                $("#mask").addClass("on");
            });
            $(".main-menu > li").on("mouseleave", function() {
                $(this).removeClass("on");
                $("#mask").removeClass("on");
            });
            $(".main-menu > li .menuitem").on("focusin", function() {
                $("main-menu > li").removeClass("on");
                $(this).parents("li").addClass("on");
                $("#mask").addClass("on");
            });
            $(".main-menu > li .menuitem").on("focusout", function() {
                $(this).parents("li").removeClass("on");
                $("#mask").removeClass("on");
            });
        };

        function initCommon() {

            // selectCustom
            selectCustom();

            function selectCustom() {
                $(".select-custom").each(function() {
                    var $select = $(this);
                    var $selectTrigger = $select.find(".trigger");
                    var $options = $select.find(".option");
                    var $hiddenInput = $select.find(".option-value");
    
                    $selectTrigger.on("click", function() {
                        $options.toggle();
                        $select.toggleClass("active");
                        $(".select-custom").not($select).find(".option").hide();
                        $(".select-custom").not($select).removeClass("active");
                    });
    
                    $options.find("li").on("click", function() {
                        var value = $(this).data("value");
                        var text = $(this).text();
                        $select.find(".trigger-txt").text(text);
                        $options.hide();
                        $select.removeClass("active");
                        if(value != "") {
                            $select.addClass("select")
                        } else {
                            $select.removeClass("select")
                        }
                        $hiddenInput.val(value);
                    });
                });
    
                $(document).on("click", function(e) {
                    if (!$(e.target).closest(".select-custom").length) {
                        $(".select-custom .option").hide();
                        $(".select-custom").removeClass("active");
                    }
                });
            };

            // tabCustom
            var $tabButtonItem = $("#tab-button li");
            var $tabSelect = $("#tab-select");
            var $tabContents = $(".tab-contents");
            var activeClass = "active";

            $tabButtonItem.first().addClass(activeClass);
            $tabContents.not(":first").hide();

            $tabButtonItem.find("a").on("click", function(e) {
                var target = $(this).attr("href");

                $tabButtonItem.removeClass(activeClass);
                $(this).parent().addClass(activeClass);
                $tabSelect.val(target);
                $tabContents.hide();
                $(target).show();
                e.preventDefault();
            });

            $tabSelect.on("change", function() {
                var target = $(this).val();
                var targetSelectNum = $(this).prop("selectedIndex");

                $tabButtonItem.removeClass(activeClass);
                $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
                $tabContents.hide();
                $(target).show();
            });

        }

        function initMain() {
            // visualSwiper

            let slideCount = $('#main-visual .swiper-slide').length;

            if (slideCount >= 2) {
                var visualSwiper = new Swiper(".visualSwiper", {
                    slidesPerView: 1,
                    loop: true,
                    speed : 1000,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".visual-button-next",
                        prevEl: ".visual-button-prev",
                    },
                    pagination: {
                        el: ".visual-pagination",
                        clickable: true,
                    },
                });
                $(".visual-play").on("click", function() {
                    $(this).hide();
                    $(".visual-pause").show();
                    visualSwiper.autoplay.start();
                });
                $(".visual-pause").on("click", function() {
                    $(this).hide();
                    $(".visual-play").show();
                    visualSwiper.autoplay.stop();
                });
            } else {
                $('#main-visual').addClass("only");
            }

            // conversionSwiper
            var conversionSwiper = new Swiper(".conversionSwiper", {
                loop: true,
                speed : 1000,
                navigation: {
                    nextEl: ".conversion-button-next",
                    prevEl: ".conversion-button-prev",
                },
                slidesPerView: 1,
                spaceBetween: 15,
                breakpoints: {
                    1200: {
                        spaceBetween: 30,
                    },
                },
            });

            // saleSwiper
            var saleSwiper = new Swiper(".saleSwiper", {
                loop: true,
                speed : 1000,
                navigation: {
                    nextEl: ".sale-button-next",
                    prevEl: ".sale-button-prev",
                },
                slidesPerView: 1.2,
                spaceBetween: 12,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
            });

            // reviewSwiper
            var reviewSwiper = new Swiper(".reviewSwiper", {
                loop: true,
                speed : 1000,
                navigation: {
                    nextEl: ".review-button-next",
                    prevEl: ".review-button-prev",
                },
                slidesPerView: 1.2,
                spaceBetween: 12,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
            });
        };

        function initSub() {
            // scoreSwiper
            var scoreSwiper = new Swiper(".scoreSwiper", {
                slidesPerView: 1.4,
                spaceBetween: 12,
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                },
            });

            // customerAppSwiper
            var customerAppSwiper = new Swiper(".customerAppSwiper", {
                slidesPerView: 1.6,
                spaceBetween: 12,
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                },
            });

            // ownerAppSwiper
            var ownerAppSwiper = new Swiper(".ownerAppSwiper", {
                slidesPerView: 1.6,
                spaceBetween: 12,
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                },
            });

            // detailSwiper
            var detailSwiper = new Swiper(".detailSwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                },
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".detail-button-next",
                    prevEl: ".detail-button-prev",
                },
            });

            // thumbZoomSwiper
            var thumbSwiper = new Swiper(".thumbSwiper", {
                spaceBetween: 12,
                slidesPerView: 2.5,
                breakpoints: {
                    576: {
                        slidesPerView: 3.5,
                    },
                    768: {
                        slidesPerView: 4.5,
                    },
                    992: {
                        slidesPerView: 5.5,
                    },
                },
                loop: true,
                freeMode: true,
                watchSlidesProgress: true,
            });
            var thumbZoomSwiper = new Swiper(".thumbZoomSwiper", {
                spaceBetween: 12,
                loop: true,
                speed : 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".zoom-button-next",
                    prevEl: ".zoom-button-prev",
                },
                thumbs: {
                    swiper: thumbSwiper,
                },
            });

            // beforeSwiper
            var beforeSwiper = new Swiper(".beforeSwiper", {
                observer: true,
                observeParents: true,

                slidesPerView: 2,
                spaceBetween: 12,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                    },
                },
                loop: true,
                speed : 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".before-button-next",
                    prevEl: ".before-button-prev",
                },
            });
            
            // afterSwiper
            var afterSwiper = new Swiper(".afterSwiper", {
                observer: true,
                observeParents: true,
                
                slidesPerView: 2,
                spaceBetween: 12,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                    },
                },
                loop: true,
                speed : 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".after-button-next",
                    prevEl: ".after-button-prev",
                },
            });

            // donutChart
            const salesData01 = [
                { label: "월", value: 1536650, color: "#2F4E9C"},
                { label: "화", value: 2074100, color: "#8CAEF2"},
                { label: "수", value: 2207400, color: "#D9D9D9"},
                { label: "목", value: 2113840, color: "#66A33F"},
                { label: "금", value: 1814160, color: "#EA722B"},
                { label: "토", value: 2243300, color: "#FFB800"},
                { label: "일", value: 1548850, color: "#EF4A4A"},
            ];
            const salesData02 = [
                { label: "00시~04시", value: 696650, color: "#2F4E9C"},
                { label: "04시~08시", value: 378300, color: "#EA722B"},
                { label: "08시~12시", value: 578400, color: "#D9D9D9"},
                { label: "12시~16시", value: 3176100, color: "#FFBD10"},
                { label: "16시~20시", value: 5754640, color: "#8CAEF2"},
                { label: "20시~04시", value: 3454060, color: "#66A33F"},
            ];
            const salesData03 = [
                { label: "사랑방 4인실", value: 64500, color: "#66A33F"},
                { label: "사랑방 7인실", value: 462000, color: "#2F4E9C"},
                { label: "당구(대대)", value: 3194400, color: "#8CAEF2"},
                { label: "당구(중대)", value: 9150250, color: "#FFB800"},
                { label: "당놀마트", value: 1267000, color: "#EF4A4A"},
            ];
            const salesData04 = [
                { label: "회원", value: 12222400, color: "#2F4E9C"},
                { label: "비회원", value: 1815750, color: "#EF4A4A"},
            ];
    
            // Calculate total sales
            const totalSales01 = salesData01.reduce((sum, item) => sum + item.value, 0);
            const totalSales02 = salesData02.reduce((sum, item) => sum + item.value, 0);
            const totalSales03 = salesData03.reduce((sum, item) => sum + item.value, 0);
            const totalSales04 = salesData04.reduce((sum, item) => sum + item.value, 0);
    
            // Generate chart segments
            let currentPercentage01 = 0;
            let currentPercentage02 = 0;
            let currentPercentage03 = 0;
            let currentPercentage04 = 0;
    
            const segments01 = salesData01.map((data) => {
                const percentage01 = (data.value / totalSales01) * 100;
                const segment01 = `${data.color} ${currentPercentage01}% ${
                    currentPercentage01 + percentage01
                }%`;
                currentPercentage01 += percentage01;
                return segment01;
            }).join(", ");
            const segments02 = salesData02.map((data) => {
                const percentage02 = (data.value / totalSales02) * 100;
                const segment02 = `${data.color} ${currentPercentage02}% ${
                    currentPercentage02 + percentage02
                }%`;
                currentPercentage02 += percentage02;
                return segment02;
            }).join(", ");
            const segments03 = salesData03.map((data) => {
                const percentage03 = (data.value / totalSales03) * 100;
                const segment03 = `${data.color} ${currentPercentage03}% ${
                    currentPercentage03 + percentage03
                }%`;
                currentPercentage03 += percentage03;
                return segment03;
            }).join(", ");
            const segments04 = salesData04.map((data) => {
                const percentage04 = (data.value / totalSales04) * 100;
                const segment04 = `${data.color} ${currentPercentage04}% ${
                    currentPercentage04 + percentage04
                }%`;
                currentPercentage04 += percentage04;
                return segment04;
            }).join(", ");
    
            // Apply gradient to the chart
            const chart01 = document.getElementById("donutChart01");
            const chart02 = document.getElementById("donutChart02");
            const chart03 = document.getElementById("donutChart03");
            const chart04 = document.getElementById("donutChart04");
            chart01.style.setProperty("--segments", segments01);
            chart02.style.setProperty("--segments", segments02);
            chart03.style.setProperty("--segments", segments03);
            chart04.style.setProperty("--segments", segments04);
    
            // Generate legend dynamically
            const legend01 = document.getElementById("legend01");
            const legend02 = document.getElementById("legend02");
            const legend03 = document.getElementById("legend03");
            const legend04 = document.getElementById("legend04");
            salesData01.forEach((data) => {
                const legendItem01 = document.createElement("div");
                    legendItem01.classList.add("legend-item");
                    legendItem01.innerHTML = `
                        <div class="legend-color" style="background-color: ${data.color};"></div>
                        <div class="legend-label">${data.label}</div>
                        <div class="legend-value">${data.value.toLocaleString()} 원</div>
                    `;
                    legend01.appendChild(legendItem01);
            });
            salesData02.forEach((data) => {
                const legendItem02 = document.createElement("div");
                legendItem02.classList.add("legend-item");
                legendItem02.innerHTML = `
                    <div class="legend-color" style="background-color: ${data.color};"></div>
                    <div class="legend-label">${data.label}</div>
                    <div class="legend-value">${data.value.toLocaleString()} 원</div>
                `;
                legend02.appendChild(legendItem02);
            });
            salesData03.forEach((data) => {
                const legendItem03 = document.createElement("div");
                legendItem03.classList.add("legend-item");
                legendItem03.innerHTML = `
                    <div class="legend-color" style="background-color: ${data.color};"></div>
                    <div class="legend-label">${data.label}</div>
                    <div class="legend-value">${data.value.toLocaleString()} 원</div>
                `;
                legend03.appendChild(legendItem03);
            });
            salesData04.forEach((data) => {
                const legendItem04 = document.createElement("div");
                legendItem04.classList.add("legend-item");
                legendItem04.innerHTML = `
                    <div class="legend-color" style="background-color: ${data.color};"></div>
                    <div class="legend-label">${data.label}</div>
                    <div class="legend-value">${data.value.toLocaleString()} 원</div>
                `;
                legend04.appendChild(legendItem04);
            });

            // map
            new daum.roughmap.Lander({
                "timestamp" : "1731257162582",
                "key" : "2m6xx",
                "mapHeight" : "400"
            }).render();
    
            setTimeout(function() {
                new daum.roughmap.Lander({
                    "timestamp" : "1731257782878",
                    "key" : "2m6xy",
                    "mapHeight" : "300"
                }).render();
    
            }, 2000);

        };


    });

});