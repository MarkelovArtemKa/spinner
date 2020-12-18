$(document).ready(function() {
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal_close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow')
    });
    $('.main_btn').each(function(i){
        $(this).on('click', function(){
            $('#consultation .modal_descr');
            $('.overlay, #consultation').fadeIn('slow');
        });
    });
    $('.main_btn').click(function(){
        $('#thanks').hide();
    });
    $('input[name=phone]').mask("+1 (999) 999-99-99")
  function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Please, enter your name",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Please, enter your phone number",
              email: {
                required: "Please, enter your email",
                email: "Inavalid format"
              }
          }
      });
  };
    validateForms('#consultation form')
  $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
        });
});

