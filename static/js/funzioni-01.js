
// Plugin @RokoCB :: Return the visible amount of px of any element currently in viewport.
// stackoverflow.com/questions/24768795/
// jsfiddle.net/RokoCB/tw6g2oeu/7/
;(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
            function visPx(){
                if(deviceWidth > 640) {
                    var H = $(this).height() / 1.8;
                } else {
                    var H = $(this).height() / 1.1;
                }
                var r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
            } visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));

function scrollToDiv(id, vel) {
    animazione = true;
    if (vel == null)
        vel = 1200;
    var puntoArrivo = $(id).offset().top + 1;
    if (vel == 0) {
        $('body, html').scrollTop(puntoArrivo);
    } else {
        $('body, html').animate({
            scrollTop: puntoArrivo
        }, vel, 'easeInOutQuart', function () {
            animazione = false;
        });
    }
}

function checkLandscape() {
	if (deviceWidth < 1024 && isMobile()) {
		if (deviceWidth > deviceHeight) {
			$(".rotate-screen-container").fadeIn(500);
			document.addEventListener("touchstart", dontScroll);
			document.addEventListener("touchmove", dontScroll);
		} else {
			$(".rotate-screen-container").fadeOut(500);
			document.removeEventListener("touchstart", dontScroll);
			document.removeEventListener("touchmove", dontScroll);
		}
	}
}

function dontScroll(e) {
	e.preventDefault();
}

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
	}
}

var deviceWidth, deviceHeight;
var mousePosX, mousePosY;

(function ($) {

    $(window).resize(function () {
        deviceWidth = $(window).width();
        deviceHeight = $(window).height();

        checkLandscape();
        setTimeout(function(){
            resizeVisual();
        }, 100);
        updateSidebar();
    });

    $(window).scroll(function (e) {
        updateSidebar();
    });

})(jQuery);


$(document).ready(function () {

    deviceWidth = $(window).width();
    deviceHeight = $(window).height();

    checkLandscape();
    updateSidebar();

    // Apertura e chiusura menÃ¹
    $('.share-toggle').click(function () {
        if($('#share_layer').hasClass('open')) {
            shareAnimation('out');
        } else {
            shareAnimation('in');
        }
    });

    // Preload del sito
    var preload_i = 0;
    $('body').imagesLoaded()
        .always( function( instance ) {

            $('html, body').scrollTop(0);
            $('.loading_layer .w').delay(600).fadeOut(function() {
                $('body').removeClass('menuOn');
                $('.loading_layer').delay(300).fadeOut();
            });

            setTimeout(function() {

                // Wow.js init
                var wow = new WOW({
                    offset: deviceHeight / 4
                });
                wow.init();

                resizeVisual();

                // Ingresso header
                $(".header").inViewport(function(px){
                    if(px && !$(this).attr('animated')) {
                        $(this).attr('animated','true');
                        animHeader();
                    }
                });

                // Ingresso quote
                $("blockquote").each(function(i, el){
                    $(el).inViewport(function(px){
                        if(px && !$(el).attr('animated')) {
                            $(el).attr('animated','true');
                            $(el).addClass('visible');
                        }
                    });
                });

                // Ingresso luci
                $(".visual .luci").inViewport(function(px){
                    if(px && !$(this).attr('animated')) {
                        $(this).attr('animated','true');
                        $(this).addClass('visible');
                    }
                });

                // Ingresso titoli
                $(".big_title").each(function(i, el){
                    $(el).inViewport(function(px){
                        if(px && !$(el).attr('animated')) {
                            $(el).attr('animated','true');
                            $(el).addClass('visible');
                        }
                    });
                });

            }, 1000);
        })
        .progress( function( instance, image ) {
            preload_i++;
            perc = Math.round((preload_i*100) / instance.images.length);
            //$('.loading_layer .w .percent span').html(perc + '%' );
        });

    // Plugin okshadow per ombra su titolo in alto
    if(deviceWidth > 640) {
        $('.header .title h1').okshadow({
            color: '#512838',
            textShadow: true,
            xMax: 15,
            xOffset: 0,
            yMax: 15,
            yOffset: 15,
            fuzzMin: 0,
            fuzzMax: 0,
            fuzzFactor: 0
        });
    } else {
        $('.header .title h1').css('text-shadow','10px 10px 0px #512838')
    }

    // Click su pallini nella sidebar
    $('.sidebar .bar .dot').each(function(i, el) {
        $(el).click(function() {
            scrollToDiv('.' + $(el).data('section'), 2200);
        })
    });

});


// Animazione menÃ¹ share ******************************************************************
var shareTimeline;
function shareAnimation(mode) {
    if(mode == 'in') {
        if(!shareTimeline) {
            shareTimeline = new TimelineMax({
                onReverseComplete:function() {
                    shareTimeline.kill();
                    $('#share_layer').toggleClass('open');
                    $('body').toggleClass('menuOn');
                }
            });
            shareTimeline.staggerFromTo($('#share_layer ul li'), 0.4,
                { alpha:0, y: "+=80px", ease:Quad.easeInOut },
                { alpha:1, y: "0", ease:Quad.easeInOut },
            0.1).delay(0.4);
        } else {
            setTimeout(function() {
                shareTimeline.play();
            }, 400);
        }
        TweenMax.to($('#share_layer span'), 0.5, { opacity:1 });
        $('#share_layer').toggleClass('open');
        $('.share-toggle').html('CHIUDI');
        $('body').toggleClass('menuOn');
    } else {
        shareTimeline.reverse();
        TweenMax.to($('#share_layer span'), 0.5, { opacity:0 });
        $('.share-toggle').html('Condividi');
    }
}


// Animazione visual header ******************************************************************
function animHeader() {
    var larghIn = "74%";
    var largFin = "100%";
    var margIn = "13%";
    var margFin = "0";

    if(deviceWidth <= 640) {
        larghIn = "100%";
        largFin = "120%";
        margIn = "0%";
        margFin = "-10%";
    }

    TweenMax.fromTo($('.header .bg'), 3,
		{ opacity:0, width: larghIn, marginLeft: margIn, ease:Strong.easeInOut },
		{ opacity:1, width: largFin, marginLeft: margFin, ease:Strong.easeInOut }
	).delay(1);
    TweenMax.fromTo($('.header .spenta'), 3,
		{ width: larghIn, marginLeft: margIn, ease:Strong.easeInOut },
		{ width: largFin, marginLeft: margFin, ease:Strong.easeInOut }
	).delay(1);
    TweenMax.fromTo($('.header .figura'), 3,
		{ opacity:0, width: larghIn, marginLeft: margIn, ease:Strong.easeInOut },
		{ opacity:1, width: largFin, marginLeft: margFin, ease:Strong.easeInOut }
	).delay(1);
    TweenMax.fromTo($('.header .accesa'), 3,
		{ opacity:0, width: larghIn, marginLeft: margIn, ease:Strong.easeInOut },
		{ opacity:1, width: largFin, marginLeft: margFin, ease:Strong.easeInOut }
	).delay(1);
    TweenMax.fromTo($('.header .title'), 1,
		{ opacity:0, marginTop: '4%' },
		{ opacity:1, marginTop: '0' }
	).delay(2.5);
    TweenMax.fromTo($('.header small'), 1,
		{ opacity:0 },
		{ opacity:1 }
	).delay(2.5);
}


// Funzione di resize per tutti i visual *****************************************************
function resizeVisual() {
    // Resize header
    var resizeHeight = deviceHeight;
    if(deviceWidth <= 991) {
        resizeHeight = deviceHeight - (deviceHeight/6);
    }
    $('.header .wrapper').css({
        'width': deviceWidth,
        'height': resizeHeight,
        'max-height': deviceHeight
    });

    // Resize luce faro
    // 1440:810 = 100:x
    var altezzaFaro = (810 * deviceWidth) / 1440;
    $('#animation_container, #animation_container canvas, #animation_container #dom_overlay_container').css('height', altezzaFaro);

    // Resize altre fasce
    $('.visual .level').each(function(i, el) {
        firstImg = $(el).find('img').first();
        $(el).height(firstImg.height());
    });
    $('.visual').each(function(i, el) {
        altezza = $(el).find('.level').last().height();
        $(el).height(altezza);
    });
}


// Barra laterale *****************************************************************************
var anchorPagine = [".header", ".impero", ".musa", ".luce", ".footer"];

function updateSidebar() {
    if(deviceWidth > 640) {

        //console.clear();

        var bar = $('.sidebar .sect.s0 .progress');
        var currentSec = '.impero';
        var sommaAltezze = 0;
        var s = $(window).scrollTop() - $(anchorPagine[0]).offset().top;
        var d = $(anchorPagine[0]).offset().top;

        $('.sidebar .bar .dot').removeClass('on');

        for(i=0; i<=anchorPagine.length-1; i++) {
            if(s >= $(anchorPagine[i]).offset().top) {
                //console.log('skip --> ' + i);
                $('.sidebar .sect.s' + i + ' .progress').css('height', '100%');
                $('.sidebar .bar .dot.d' + i).addClass('on');
                sommaAltezze = Math.round($(anchorPagine[i]).offset().top);
                continue;
            } else {
                // console.log('------');
                // console.log('current: ' + i);
                s = $(anchorPagine[i-1]).offset().top + ( $(window).scrollTop() - $(anchorPagine[i-1]).offset().top );
                d = $(anchorPagine[i]).offset().top - $(anchorPagine[i-1]).offset().top;
                bar = $('.sidebar .sect.s' + (i-1) + ' .progress');
                currentSec = anchorPagine[i];
                break;
            }
        }

        if( s >= $(anchorPagine[0]).height() && s <= $(anchorPagine[4]).offset().top) {
            $('.sidebar').addClass('visible');
        } else {
            $('.sidebar').removeClass('visible');
        }

        var scrollPercent = ( (s - sommaAltezze) / d ) * 100;
        bar.css('height', Math.round(scrollPercent) + '%');

        // console.log('going to: ' + currentSec);
        // console.log('sommaAltezze: ' + sommaAltezze);
        // console.log('from: ' + s);
        // console.log('to: ' + d);
        // console.log('-------');
        // console.log('scrollPercent: ' + Math.round(scrollPercent));

    }
}
