$ = jQuery;
$(document).ready(function () {


    let loaderObject = $('.loader');

    // console.log(loaderObject);
    if (loaderObject !== null) {
        loaderObject.css('opacity', 0);

        setTimeout(function () {
            loaderObject.css('display', 'none');

        }, 400);
    }

    let headerTopLeftLiLanguage, headerTopLeftLanguage, headerTopLeftLiUnit, headerTopLeftUnit,
        headerTopRightLiAcc, headerTopRightAcc;
    headerTopLeftLiLanguage = $('ul.top__left--langguage-pay>li.top__left--langguage');
    headerTopLeftLanguage = $('ul.top__left--langguage-pay>li ul.langguage');


    headerTopLeftLiLanguage.on('click', function () {
        //console.log($(this));
        if (!headerTopLeftLanguage.hasClass('hide')) {
            !headerTopLeftLanguage.addClass('hide');
            headerTopLeftLanguage.show();
        } else {
            headerTopLeftLanguage.hide();
            headerTopLeftLanguage.removeClass('hide');
        }
    });





    headerTopLeftLiUnit = $('ul.top__left--langguage-pay>li.top__left--unit');
    headerTopLeftUnit = $('ul.top__left--langguage-pay>li ul.unit');
    //console.log(headerTopLeft);


    headerTopLeftLiUnit.on('click', function () {
        //console.log($(this));
        if (!headerTopLeftUnit.hasClass('hide')) {
            !headerTopLeftUnit.addClass('hide');
            headerTopLeftUnit.show();
        } else {
            headerTopLeftUnit.hide();
            headerTopLeftUnit.removeClass('hide');
        }
    });


    headerTopRightLiAcc = $('.top__right--account-wish li.toggle-account');
    headerTopRightAcc = $('.top__right--account-wish ul.account');


    headerTopRightLiAcc.on('click', function () {
        //console.log($(this));
        if (!headerTopRightAcc.hasClass('hide')) {
            !headerTopRightAcc.addClass('hide');
            headerTopRightAcc.show();
        } else {
            headerTopRightAcc.hide();
            headerTopRightAcc.removeClass('hide');
        }
    });


    $('.header__slide-banner').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000
    });
    $('.main-introduce__content').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000
    });



    let tabNav = $('.main-seller__top--tab ul li a');
    let tabContent = $('.list-post .tab-content');
    let tabContentActive = $('.list-post .tab-content.active');
    tabNav.on('click', function (e) {
        e.preventDefault();
        let hash = $(this).attr('href');


        tabNav.removeClass('active');
        $(this).addClass('active');
        //tabContent.removeClass('active');

        //tabContent.find(hash).addClass('active');
/* 
        setTimeout(function () {
            tabContent.fadeOut('slow');
            console.log($(hash));
            tabContent.removeClass('active');
            //tabContent.fadeIn('slow');
            $(hash).addClass('active');

            $(hash).fadeIn('slow');
        }, 400); */
        
           tabContentActive.fadeOut(400, function(){
              tabContent.removeClass('active');
            $(hash).fadeIn(400,function(){
                $(hash).addClass('active');
              });
          }); 
        // console.log(tabContent.parent().find('.active'));
    });


    $('.main-brands__logo').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 5,
        dots: false,
        navText: ['<img src="image/prev-left.PNG" alt="">','<img src="image/prev-right.PNG" alt="">'],
        responsive:{
            0:{
                items:3,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    $('.main-blog__bottom--list-blog').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navText: ['<img src="image/prev-left.PNG" alt="">','<img src="image/prev-right.PNG" alt="">'],
        items: 3,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });


});