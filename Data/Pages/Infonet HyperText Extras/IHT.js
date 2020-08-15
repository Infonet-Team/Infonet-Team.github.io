// Infonet HyperText Script File
// Credits to Wout P. for making this file possible!

// Disable context menu, CTRL+SHIFT+I, CTRL+SHIFT+J, CTRL+U
window.addEventListener('contextmenu', function (e) {
  // do something here... or how about nothing
  e.preventDefault();
}, false);

document.onkeydown = function (event)
{
  event = (event || window.event);
  if (event.keyCode == 123 || event.keyCode == 18)
  {
    return false;
  }
}
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
}


// Loader and overlay fadeout
function removeFadeOut( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
//  setTimeout(function() {
//      el.parentNode.removeChild(el);
//  }, speed);
}
// Overlay fadein for reload
function fadeIn( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 1;
}


function StartInfonetHyperText() {
  Swal.fire({
    icon: 'info',
    title: 'Just a moment',
    text: 'Please wait while everything loads...',
    showConfirmButton: false,
    //timer: 10000,
    //timerProgressBar: false,
    allowEnterKey: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
    toast: false,
})/*.then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        nextStep();
      }
})*/
}

//function nextStep() {
  const videoprelude = document.getElementById('HyperTextTheme');
  videoprelude.oncanplaythrough = function() {
setTimeout(() => {
  
    Swal.fire({
      title: 'New Version',
      html: 'We have some great stuff to show you! <br> Ready to dive in?',
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#28a745',
      confirmButtonText: 'Lets Go!',
      reverseButtons: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
    }).then((result) => {
      if (result.value) {
       letsAgo();
      }
    })
  }, 2000);


  }; 

//}

function letsAgo() {

removeFadeOut(document.getElementById('overlay'), 300);
setTimeout(() => {
  document.getElementById('HyperTextTheme').play();
}, 150);
setTimeout(() => {
  fadeIn(document.getElementById('overlay'), 300);
}, 10650);
setTimeout(finalGo, 11000);
}

function finalGo() {
  //document.getElementById('overlay').remove();
  const iframe = Object.assign(document.createElement('iframe'), {
    id: 'mainframe',
    src: './Version%2048/Data/Pages/Infonet%20HyperText.html',
    class: 'mainframe'
  });
  document.body.append(iframe);
  setTimeout(() => {
    removeFadeOut(document.getElementById('overlay'), 500);
  }, 600);
setTimeout(removeVideo, 20000);  
}
function removeVideo() {
  document.getElementById('HyperTextTheme').remove();
  document.getElementById('overlay').remove();
}