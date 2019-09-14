/**
 * Created by themeforseo on 5/5/2016.
 */

(function ($) {
    "use strict";

    var wrapper_popup = $(".wrapper-popup");
    var bg_popup = $(".bg-popup");
    var popup_content = $(".popup-content");
    var overflow_body = $("body");

    $("a,div").on("click", function(){

        if ( $(this).hasClass("galery-item") ) {
            wrapper_popup.addClass("ready-popup");
            bg_popup.addClass("ready-popup");
            overflow_body.addClass("overflow-body")

            // add content in popup
            var galery_content = $(this).find(".box-content-item").html();
            popup_content.html(galery_content);
        }else if ( $(this).hasClass("close-popup") ){
            wrapper_popup.removeClass("ready-popup");
            bg_popup.removeClass("ready-popup");
            overflow_body.removeClass("overflow-body")
        }
    });

    /*----------------------------
     One Columns Slider
     ------------------------------ */
    $(".columns1").owlCarousel({
        loop: true,
        autoplay: true,
        items : 1,
        margin: 0,
        singleItem: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000
    });
    $(".speakers .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        items : 5,
        margin: 0,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        responsiveClass:true,

    });

    $(".panelist .owl-carousel").owlCarousel({
        loop: false,
        autoplay: false,
        items : 5,
        margin: 0,
        dots: false,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        responsiveClass:true,

    });



    //mobile menu
    jQuery('.menu nav').meanmenu();

    //init newsletter parallax
    $('.newsletter-parallax').parallax({imageSrc: 'http://sayidan_h1.kenzap.com/images/bg-newsletter.jpg'});

    //waypoints animation on scroll
    $(".footer-wrapper").waypoint(function() {

        $('.footer-col').addClass('fadeIn');
    }, { offset: '100%'});

})(jQuery);


//tab js//
$(document).ready(function(e) {


    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if( $this.val() === '' ) {
                label.removeClass('highlight');
            }
            else if( $this.val() !== '' ) {
                label.addClass('highlight');
            }
        }

    });

    $('.tab a').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });
//canvas off js//
    $('#menu_icon').click(function(){
        if($("#content_details").hasClass('drop_menu'))
        {
            $("#content_details").addClass('drop_menu1').removeClass('drop_menu');
        }
        else{
            $("#content_details").addClass('drop_menu').removeClass('drop_menu1');
        }


    });

//search box js//


    $("#flip").click(function(){
        $("#panel").slideToggle("5000");
    });

// sticky js//

    $(document).ready(function() {
        $('.input-group input[required]').on('keyup change', function() {
            var $form = $(this).closest('form'),
                $group = $(this).closest('.input-group'),
                $addon = $group.find('.input-group-addon'),
                $icon = $addon.find('span'),
                state = false;

            if (!$group.data('validate')) {
                state = $(this).val() ? true : false;
            }else if ($group.data('validate') == "email") {
                state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
            }

            if (state) {
                $addon.removeClass('danger');
                $addon.addClass('success');
                $icon.attr('class', 'glyphicon glyphicon-ok');
            }else{
                $addon.removeClass('success');
                $addon.addClass('danger');
                $icon.attr('class', 'glyphicon glyphicon-remove');
            }

            if ($form.find('.input-group-addon.danger').length == 0) {
                $form.find('[type="submit"]').prop('disabled', false);
            }else{
                $form.find('[type="submit"]').prop('disabled', true);
            }
        });

        $('.input-group input[required], .input-group textarea[required], .input-group select[required]').trigger('change');


    });




});

// set the date we're counting down to
var target_date = new Date('April, 6, 2019 , 10:00:00').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  ' <label>Days</label></span> <span class="hours">' + hours + ' <label>Hours</label></span> <span class="minutes">'
        + minutes + ' <label>Minutes</label></span> <span class="seconds">' + seconds + ' <label>Seconds</label></span>';

}, 1000);
