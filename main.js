$(document).ready(function(){
  var quadrato = '<div class="quadrato"></div>';
  for (var i=0; i < 36 ; i++){
    $('.wrapper_griglia').append(quadrato);

  }
  $('.quadrato').click(function(){
    var thisquadrato = $(this);
    var numero = "";
    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data)
      {
        var numero = data.response;
        console.log(data);
        if (numero <= 5) {
          $(thisquadrato).addClass('verde');
        }
        else {
          $(thisquadrato).addClass('yellow');
        }
      },
      error: function()
      {
        alert("non funzia");
      },
    });
  })
})
