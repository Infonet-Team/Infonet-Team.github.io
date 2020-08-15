   //////////////////////////////////////////
  //  Infonet HyperText Update Notifier   //
 // Entirely written by Maxim Coppieters //
//////////////////////////////////////////

var textstring = "The latest version of IHT is: "+ latestVersion
var footer = "Infonet HyperText Developer Release "+ latestVersion

function start() {
Swal.fire({
  title: 'Infonet Update Backend',
  text: textstring,
  icon: 'info',
  showCancelButton: false,
  showConfirmButton: false,
  allowEnterKey: false,
  allowEscapeKey: false,
  allowOutsideClick: false,
  footer: footer
})
}

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