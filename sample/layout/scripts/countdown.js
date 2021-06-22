function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
  setTimeout(returnInit, 600000);
  setTimeout(minsremind, 480000);
  
}

window.onload = function () {
  var Minutes = 60 * 10,
      display = document.querySelector('#time');
  startTimer(Minutes, display);

  //add notification

  


};

function minsremind() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'info',
    title: '2 minutes left'
  })

}


function returnInit() {

  if($("input[type=radio]:checked").length < 6){
    // alert

    Swal.fire({
      title: 'Out of time',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Restart'
    }).then((result) => {
      if (result.isConfirmed) {
        location.href = "transition.html";
      }
      location.href = "transition.html";
    })
    // location.href = "transition.html"; //get back
  } 
  else if ($("input[type=radio]:checked").length >= 6){
   
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'info',
      title: 'Submit'
    })

    document.getElementById('submit').click();
    document.getElementById("time").style.display = "none";

  }
}