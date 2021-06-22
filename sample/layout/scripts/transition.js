$( ".cta" ).click(function() {
    $( ".transition").toggleClass( "anim-trans" );
    setTimeout(returnInit, 4000);

  });

  function returnInit() {
    location.href = "test.html";
  }