// CAMBIO LOCACION MENU
$(".ac-label").click(function(){
  let link = $(this).attr('name')
  console.log(link)
  if (typeof link !== typeof undefined && link !== false) {
    window.location.href = link + '.html' ;
  }
})

// GESTIONAR CARRERA MAS DETALLES
$('.more-details').on('click', function () {
  if ($(this).hasClass('show')) {
      $(this).removeClass('show');
      $('.box-resumen').find('.hidden-xs').stop(false, true).slideUp();
  }
  else {
      $(this).addClass('show');
      $(this).parents('.box-resumen').find('.hidden-xs').stop(false, true).slideDown();
  }
});

// OPCION EDAD O FECHA DE NACIMIENTO
$(".ageOrBirthday").on( "click", function() {
  let val = $("input:checked").val();
  if(val === "date") {
    $("#age-input").addClass("hide")
    $("#age-select").removeClass("hide")
  } else {
    $("#age-input").removeClass("hide")
    $("#age-select").addClass("hide")
  }
});

// ANEXO TABLA BENEFICIARIOS AGREGADOS AL PLAN
$('#verTabla').click( function () {
  $('.tabla-beneficiarios').removeClass("hide");
})

// FUNCIONAMIENTO INPUT RANGE + BOTONES MAS Y MENOS
$(function () {
  $('.add').on('click',function(){
      var $qty=$(this).closest('form').find('.qty');
var $range=$(this).closest('form').find('.rangeInput');
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
          $qty.val(currentVal + 5000);
          $range.val(currentVal);
          $('.rangeInput').css('--val', $qty.val());
      }
  });
  $('.minus').on('click',function(){
      var $qty=$(this).closest('form').find('.qty');
      var $range=$(this).closest('form').find('.rangeInput');
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 5000);
        $range.val(currentVal);
        $('.rangeInput').css('--val', $qty.val());
      }
  });
});
$('.qty').on('change keyup paste', function() {
  let amount = $('.qty').val();
  $('.rangeInput').val(amount)
  $('.rangeInput').css('--val', amount);
})
$('.rangeInput').on('change', function() {
  let range = $('.rangeInput').val();
  $('.qty').val(range)
  $('.rangeInput').css('--val', range);
})

// FUNCIONAMIENTO NUBES PLANES
$('.cloud').click(function() {
  $('.cloud').removeClass('open');
  $(this).addClass('open');
})