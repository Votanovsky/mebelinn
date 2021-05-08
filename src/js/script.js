// слайдер
$(function(){

    $('.promo__slider').slick({
        dots: true,
        arrows: false
    });
});




$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger , .header__menu').toggleClass('header__burger_active');
    });


    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('header__burger_active');
                menu.classList.toggle('header__burger_active');
            });
        });
    });
});


$('[data-modal=consultation]').on('click' , function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, .overlay_two, #consultation, #thanks, #order #characteristic').fadeOut('slow');
  });
  
  $('.overlay_two').on('click', function() {
    $('.overlay, .overlay_two, #consultation, #thanks, #order #characteristic').fadeOut('slow');
  });
  

  


//   $('.modulnie__catalog__descr').on('click' , function () {
//     $('.overlay_two, #characteristic').fadeIn('slow');
//   });
  
  $('.modulnie__catalog__button').each(function(i){
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.modulnie__catalog__name').eq(i).text())
      $('.overlay, #order').fadeIn('slow');
    });
  });


//   подстановка параметров товара

  $('.modulnie__catalog__descr').each(function(i){
    $(this).on('click', function() {
      $('#characteristic .modal__tittle').text($('.modulnie__catalog__name').eq(i).text()),
      $('#characteristic .modal__descr').text($('.modulnie__catalog__parametr').eq(i).text()),
      $('#characteristic .modal__descr_price').text($('.modulnie__catalog__parametr_price').eq(i).text()),

      $('#characteristic .modal__img').attr("src", $('.modulnie__catalog__img__modal').eq(i).attr("src"))
      $('#characteristic .modal__img_two').attr("src", $('.modulnie__catalog__img__modal_two').eq(i).attr("src"))

      $('.overlay_two, #characteristic').fadeIn('slow');
    });
  });



  $('.modulnie__catalog__img').each(function(i){
    $(this).on('click', function() {
      $('#characteristic .modal__tittle').text($('.modulnie__catalog__name').eq(i).text()),
      $('#characteristic .modal__descr').text($('.modulnie__catalog__parametr').eq(i).text()),
      $('#characteristic .modal__descr_price').text($('.modulnie__catalog__parametr_price').eq(i).text()),

      $('#characteristic .modal__img').attr("src", $('.modulnie__catalog__img__modal').eq(i).attr("src"))
      $('#characteristic .modal__img_two').attr("src", $('.modulnie__catalog__img__modal_two').eq(i).attr("src"))

      $('.overlay_two, #characteristic').fadeIn('slow');
    });
  });

//   \\\\\\\\\\\\\\\\\\\\\



// Отправка писем с сайта \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
  return false;
});

// Отправка писем с сайта \\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// Кнопка вверх и плавный скролл \\\\\\\\\\\\\\\\\\\\\\\

  $(window).scroll(function() {
    if ($(this).scrollTop()>700) {
      $('.pageup').fadeIn();
    } 
    else {
      $('.pageup').fadeOut();
    }


    // $("a[href^='#']").click(function(){
    //   const _href = $(this).attr("href");
    //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //   return false;
    // });

  });

// Кнопка вверх и плавный скролл \\\\\\\\\\\\\\\\\\\\\\\



$(function(){
  $("a[href^='#']").click(function(){
          const _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });
});




// ФИЛЬТР АКСЕССУАРЫ И МАТРАССЫ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const filterBox = document.querySelectorAll('.box');

document.querySelector('.filter__nav').addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return false;

  let filterClass = event.target.dataset['f'];

  filterBox.forEach (elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass)) {
      elem.classList.add('hide');
    }
  });
});

// ФИЛЬТР АКСЕССУАРЫ И МАТРАССЫ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




