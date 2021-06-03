$(function () {
    window.responsive = function responsive() {
        $(".slider li").width($(".parent-slider").width());
        //var $child_slider = $(".slider li").length
        //console.log($child_slider)
        //if ($child_slider==2) {
        //} else {

        //    $(".slider").css("margin-right", -$(".parent-slider").width());
        //}
        if ($(window).width() >= 600) {
            if ($(".side-bar-fixed")[0]) {
                $(".side-bar-fixed").sidebarFix({
                    frame: $('.side-bar-fixed-parent'),
                    topBuffer: 90,
                });
            }
            if ($(".side-bar-fixed").height() >= $(".side-bar-fixed-parent").height()) {
                $(".side-bar-fixed-parent").css({
                    "height": '',
                    top: 0,
                    "margin-top":140
                })
            } else {

                $(".side-bar-fixed-parent").height($(".inter-articles").height() - 140);
            }
        }

    };
});
$(window).on('ready load resize orientationchange', function () { responsive(); });
//Call the function on load and resize
//Call the function on load and resize

//$(".prev").click(function () {
//    $(".slider:not(:animated)").animate({
//        "right": -$(".parent-slider").width()
//    }, 1000, function () {
//        $(this).css("right", "0")
//        $(this).children().first().insertAfter($(".slider").children().last())

//    });
//    $(".slider li section").stop().animate({
//        "bottom": "-100%"
//    }, 1000, function () {
//        $(this).animate({ "bottom": "0" })
//    });
//});
//$(".next").click(function () {
//    $(".slider:not(:animated)").animate({
//        "right": $(".parent-slider").width()
//    }, function () {
//        $(this).css("right", "")
//        $(this).children().last().insertBefore($(".slider").children().first())
//    });
//    $(".slider li section").stop().animate({
//        "bottom": "-100%"
//    }, 1000, function () {
//        $(this).animate({ "bottom": "0" })
//    });
//});
//setInterval(function () {
//    $(".slider:not(:animated)").animate({
//        "right": -$(".parent-slider").width(),
//    }, 1000, function () {
//        $(this).css("right", "0");
//        $(this).children().first().insertAfter($(".slider").children().last());
//    });
//    $(".slider li section").stop().animate({
//        "bottom": "-100%",
//    }, 1500, function () {
//        $(this).animate({ "bottom": "0" });
//    });
//}, 5000);
$('#modal-one').modal({
    endingTop: '30%',
});

$(".back-header > div > div > ul").append("<div class='rail'></div>");
$(".back-header > div > div > ul > li").hover(function () {
    var i = $(this);
    $(".rail").css({
        "left": i.position().left,
        width: i.outerWidth()
    })
})
$(".back-header ul").mouseleave(function () {
    var i = $(this);
    $(".rail").css({
        "left": "",
        "width":""
    })
})
$(".menu-s-icon").click(function () {
    $(".menu-xs").animate({ "right": "0" }, 500)
    $(".black-click").fadeIn();
})

$(".parent-close-icon svg").click(function () {
    $(".menu-xs").animate({ "right": -$(".menu-xs").outerWidth() }, 500);
    $(".black-click").fadeOut();
})
$(".search-xs-icon i").click(function () {
    $(".search-box").animate({
        "left": 0
    }, 500)
    $(".black-click").fadeIn();
})
$(".menu-drop > div").children(".plus-xs").click(function () {
    var tro = $(this).attr("data-status")
    if (tro == 1) {
        $(this).addClass("plus-up")
        $(this).closest(".menu-drop").children(".menu-down-xs").stop().slideDown()
        $(this).attr("data-status", 2);

    } else if (tro == 2) {
        $(this).removeClass("plus-up")
        $(this).closest(".menu-drop").children(".menu-down-xs").stop().slideUp()
        $(this).attr("data-status", 1)
    }
})
$(".black-click").click(function () {
    $(".search-box").animate({
        "left": "-110%"
    }, 500)
    $(".menu-xs").animate({
        right: "-250px"
    })
    $(".black-click").fadeOut()
})
var swiper = new Swiper('.swiper-container', {
    paginationClickable: true,
    slidesPerView: 5,
    loop: true,
    spaceBetween: 40,
    breakpoints: {
        // when window width is <= 320px
        600: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 480px
        980: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is <= 640px
        980: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    nextButton: '.next-car',
    prevButton: '.prev-car'
});

$(".menu-l li").hover(function () {
    $(this).children("ul").stop().fadeToggle()
})







function walkNode(node) {
    if (node.nodeType == 3) {
        // Do your replacement here
        node.data = node.data.replace(/\d/g, convert);
    }

    // Also replace text in child nodes
    for (var i = 0; i < node.childNodes.length; i++) {
        walkNode(node.childNodes[i]);
    }
}

walkNode(document.getElementsByTagName("body")[0]);

function convert(a) {
    return ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'][a];
}

$(window).load(function () {
    if ($(".filter-button-group")[0]) {
        $(".filter-button-group button").click(function () {
            $(this).addClass("button-active-gallery");
            $(this).nextAll().removeClass("button-active-gallery")
            $(this).prevAll().removeClass("button-active-gallery")
        })

        var $grid = $('.grid').isotope({
            filter: '.img',
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

    }
})

//////---- started by sadegh ---- /////
$("#search-btn").click(function () {
    $("#searchform").submit();
});
$("#search-btn-xs").click(function () {
    $("#searchform-xs").submit();
});

$("#searchform").on('submit', function (e) {
    var input = $("#first_name").val();
    if (input.length < 2) {
        e.preventDefault();
        alert("حداقل ۲ کاراکتر وارد کنید")
    }
});
$("#searchform-xs").on('submit', function (e) {
    var input = $("#search-txt-xs").val();
    if (input.length < 2) {
        e.preventDefault();
        alert("حداقل ۲ کاراکتر وارد کنید")
    }
});
//////---- ended by sadegh ---- /////
$(".search").click(function () {
    $("body").addClass("fix-pop")
});

$("#btn-loader").click(function () {
    $("#btn-loader").html('<svg viewBox="0 0 24 30"> <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /></rect></svg>')
});

$(window).load(function () {
    setTimeout(function () {
        $(".loader-page").fadeOut();
    }, 800)
});


equalheight = function (container) {

    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {
    equalheight('.articles ul > li');

})
$(window).resize(function () {
    equalheight('.articles ul > li');
});

