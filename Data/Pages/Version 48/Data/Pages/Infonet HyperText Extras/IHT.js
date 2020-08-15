// Infonet HyperText Script File
// Credits to Wout P. for making this file possible!

// Mode specific working
function defaultMode() {
  date_time();
}
function XMOS() {
  document.getElementById('Time').innerHTML = 'Cadeautje van de chysostomosleerlingen';
  document.body.style.cssText = '-moz-transform: scaleY(-1); -o-transform: scaleY(-1); -webkit-transform: scaleY(-1); transform: scaleY(-1); filter: FlipV; -ms-filter: "FlipV"';
  document.getElementById('ipl-progress-indicator').style.cssText = '-moz-transform: scaleY(-1); -o-transform: scaleY(-1); -webkit-transform: scaleY(-1); transform: scaleY(-1); filter: FlipV; -ms-filter: "FlipV"';
}
function afs1() {
  date_time();
  document.body.style.cssText = '-moz-transform: rotate(-1deg); -o-transform: rotate(-1deg); -webkit-transform: rotate(-1deg); transform: rotate(-1deg)';
  document.getElementById('ipl-progress-indicator').style.cssText = '-moz-transform: rotate(1deg); -o-transform: rotate(1deg); -webkit-transform: rotate(1deg); transform: rotate(1deg)';
}
function afs2() {
  clearInterval(theme);
  document.body.style.cssText = '-moz-transform: scaleX(-1) rotate(1deg); -o-transform: scaleX(-1) rotate(1deg); -webkit-transform: scaleX(-1) rotate(1deg); transform: scaleX(-1) rotate(1deg); filter: FlipH; -ms-filter: "FlipH"'
  document.getElementById('ipl-progress-indicator').style.cssText = '-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); filter: FlipH; -ms-filter: "FlipH"'
  date_time();
  setTimeout(() => {
    document.body.style.backgroundColor = '#003169';
  }, 400);
  darkMenu();
  document.body.background = '';

  const video = Object.assign(document.createElement('video'), {
    id: 'afstHyperTextTheme',
    video: true,
    autobuffer: true,
    muted: true,
    loop: true,
    autoplay: true,
  });
  
  const source = Object.assign(document.createElement('source'), {
    id: 'mp4',
    src: '../Video/fools.mp4',
    type: 'video/mp4'
  });
  
  video.append(source);
  
  //document.querySelector('#PageContentDiv').append(video);
  document.body.append(video);

  document.getElementById('Time').style.color = '#ffffff';
  document.getElementById('InfonetHyperTextLogo').src = nighttimelogo;
}

var parser = setTimeout(parseparams, 50);
function parseparams() {
  const params = new URLSearchParams(window.location.search);
  var beta = params.get('beta');
  if (beta == 'true') {
  window.location.replace('./unfinished.html');
  }
  else {
  }

  var mode = params.get('mode');
  if (mode == 'default') {
  setTimeout(defaultMode, 100);
  }
  else if (mode == 'xmos') {
  setTimeout(XMOS, 100);
  }
  else if (mode == 'afs1') {
  setTimeout(afs1, 100);
  }
  else if (mode == 'afs2') {
  setTimeout(afs2, 100);
  }
  else {
  setTimeout(defaultMode, 100);
  }

  var framemode = params.get('framemode');
  if (framemode == 'contact') {
    setTimeout(() => {
      document.getElementById('leftframe').src = './unfinished.html';
    }, 1000);
  }
  else if (framemode == 'teacher') {
    setTimeout(() => {
      document.getElementById('leftframe').src = './unfinished.html';
    }, 1000);
  }
  else {
  }

  var darkness = params.get('darkmode');
  if (darkness == 'true') {
    clearInterval(theme);
    setTimeout(() => {
      document.body.style.backgroundColor = '#26262b';
      document.getElementById('Time').style.color = '#ffffff';
      document.getElementById('InfonetHyperTextLogo').src = nighttimelogo;
      document.getElementById('swal').setAttribute('href', './Infonet%20HyperText%20Extras/Sweetalert2/dark.css');
      document.getElementById('overlay').style.background = '#26262b';
      if (document.getElementById('ipl-progress-indicator') !== null) {
          document.getElementById('ipl-progress-indicator').style.backgroundColor = '#26262b';
      }
      darkMenu();
    }, 50);
  }
}

  var daytimelogo = '../Images/HTLogo/HTLogoDay.png';
  var nighttimelogo = '../Images/HTLogo/HTLogoNight.png';
  // Set theme
  // Keep checking the time and adjust when needed.
  var theme = setInterval(HyperTextTheme, 1000);
  // Main Update script
  function HyperTextTheme(){
    var d = new Date();
    var n = d.getHours();
    console.log('Theme Check Executed');
    const clock = document.getElementById('Time');
    const sweetmodal = document.getElementById('swal');
    const ihtlogo = document.getElementById('InfonetHyperTextLogo');
  
    if (n >= 23){
      document.body.background = '../Images/Background/23.png';
    } else {
      document.body.background = `../Images/Background/${n}.png`;
    }
  
    if (n >= 0 && n < 8) {
      clock.style.color = '#ffffff';
      ihtlogo.src = nighttimelogo;
      sweetmodal.setAttribute('href', './Infonet%20HyperText%20Extras/Sweetalert2/dark.css');
      if (document.getElementById('ipl-progress-indicator') !== null) {
        document.getElementById('ipl-progress-indicator').style.backgroundColor = '#26262b';
        document.getElementById('overlay').style.background = '#26262b';
        }
      darkMenu();
    }
    else if (n >= 8 && n < 16) {
      clock.style.color = '#000000';
      ihtlogo.src = daytimelogo;
      sweetmodal.setAttribute('href', './Infonet%20HyperText%20Extras/Sweetalert2/default.css');
      document.getElementById('overlay').style.background = '#E8E8E8';
      lightMenu();
    }
    else if (n >= 16) {
    clock.style.color = '#ffffff';
    ihtlogo.src = nighttimelogo;
    sweetmodal.setAttribute('href', './Infonet%20HyperText%20Extras/Sweetalert2/dark.css');
    if (document.getElementById('ipl-progress-indicator') !== null) {
      document.getElementById('ipl-progress-indicator').style.backgroundColor = '#26262b';
      document.getElementById('overlay').style.background = '#26262b';
      }
    darkMenu();
    }
  }

// Modal that displays the version of IHT
function versionModal() {
  var versionTextString = 'Version: '+currentVersion; 
  Swal.fire({
    title: 'About Infonet HyperText',
    text: versionTextString,
    icon: 'info',
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'Close'
  })
}

// Disable CTRL+SHIFT+I, CTRL+SHIFT+J, CTRL+U

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

function logoClicked() {
    Swal.fire({
      title: 'Interactive guide',
      text: 'Would you like to enter the Interactive Guide?',
      icon: 'warning',
      showCancelButton: true,
      /*confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',*/
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        guideActivateStage0();
      }
    })
}
function guideActivateStage0() {
  // Log the activation
  console.log('Interactive Guide Activation started. Stage 0 running');
  // Enable overlay
  document.getElementById('overlay').style.display = 'block';
  // Log it
  console.log('Overlay enabled');
  // Change overlay color
  document.getElementById('overlay').style.background = '#0e0e0f';
  // Log it
  console.log('Overlay color set');
  // Start next stage
  setTimeout(guideActivateStage1, 30);
}
function guideActivateStage1() {
  // Log the activation
  console.log('Interactive Guide Activation Stage 2 Running');
  // Fade in the overlay
  fadeIn(document.getElementById('overlay'), 600);
  // Log it
  console.log('Overlay fadein triggered');
  // Start next stage
  setTimeout(guideActivateStage3, 600);
}
function guideActivateStage3() {
  // Log the activation
  console.log('Interactive Guide Activation Stage 3 Running');
  // Redirect to the Interactive Guide
  window.location.href = '../Interactive%20Guide/index.html';
}

// Define iframe height based on window size
function resize() {
  var heights = window.innerHeight;
  var headerheight = document.getElementById('Header').clientHeight;
  var frameheights = (heights - headerheight - 12);
  document.getElementById('leftframe').style.height = frameheights + 'px';
  document.getElementById('rightframe').style.height = frameheights + 'px';
  // window.addEventListener('resize', () => { resize() }); Disabled, too resource intensive!
}
window.addEventListener('resize', resize);


// Display date and time
function date_time()
{
  date = new Date;
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec');
  d = date.getDate();
  day = date.getDay();
  days = new Array('Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za');
  h = date.getHours();
  if(h<10)
  {
    h = '0'+h;
  }
  m = date.getMinutes();
  if(m<10)
  {
    m = '0'+m;
  }
  s = date.getSeconds();
  if(s<10)
  {
    s = '0'+s;
  }
  result = ' '+days[day]+' '+d+' '+months[month]+' '+year+' - '+h+':'+m+':'+s+' ';
  document.getElementById('Time').innerHTML = result;
  setTimeout('date_time()','500');
  return true;
}

// SweetAlert2 Tips and Fun facts toast
function displayTip(){
  // Select random tip
  console.log('Tip system triggered');
  var tipArray = ['We have a Discord server',
  'Infonet HyperText automatically refreshes',
  'Check the status at infonet.statuspage.io',
  'There is a hidden code',
  'You can be a betatester if you want to',
  'You can force a full reload by typing F three times',
  'Infonet HyperText can be referred to as IHT',
  'Suggestions can be sent to our Discord server',
  'IHT is now available on GitHub',
  'Have another tip? Send it over!',
  'There is an interactive guide',
  'Betatesters get credited',
  'Infonet HyperText is Open Source',
  'Infonet adjusts itself to your screen',
  'Have a question? Send it to Infonet Team!',
  'Feature releases are common!',
  'We do not collect or store user data',
  'This site does not use cookies :]',
  'Access the menu by right-clicking or pressing space'];
  var tip = tipArray[Math.floor(Math.random() * tipArray.length)];
  console.log('Random tip selected');
  // Display toast
  Swal.fire({
    showClass: {
      popup: 'fadein'
    },
    hideClass: {
      popup: 'fadeout'
    },
    toast: true,
    position: 'top-end',
    icon: 'info',
    title: tip,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    //onOpen: (toast) => {
    //  toast.addEventListener('mouseenter', Swal.stopTimer)
    //  toast.addEventListener('mouseleave', Swal.resumeTimer)
    //}
  })
  console.log('Toast activated, job complete');
}

// The Infonet HyperText Hypervisor
// Loader and overlay fadeout
function removeFadeOut( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = 'opacity '+seconds+'s ease';

  el.style.opacity = 0;
//  setTimeout(function() {
//      el.parentNode.removeChild(el);
//  }, speed);
}
// Overlay fadein for reload
function fadeIn( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = 'opacity '+seconds+'s ease';

  el.style.opacity = 1;
}

var IHTReload = setTimeout(IHTReloadStage0, 500000);
// Sets the minimal time in milliseconds before the page content is loaded. If it takes longer than set amount to load all elements, the loader will be displayed until all elements are loaded.
function startInfonetHyperText() {
  console.log('Main System loading stage started.');
  console.log('Loading Stage 0 Initiated');
  resize();
  document.getElementById('InfonetHyperTextLogo').addEventListener('click', logoClicked);
  setTimeout(displayTip, 600);
  setTimeout(showPageStage1, 500);
}
// After loading has finished, Stage 1 makes the final elements appear and plays the jingle
function showPageStage1() {
  console.log('Loading Stage 2 Initiated');
  removeFadeOut(document.getElementById('ipl-progress-indicator'), 750);
  document.getElementById('LoadedAudio').play();
  // Prevent dragging the logo
  document.getElementById('InfonetHyperTextLogo').setAttribute('draggable', false);
  document.getElementById('LoadingAudio').style.display = 'none';
  setTimeout(() => {
    document.getElementById('LoadingAudio').remove();
    document.getElementById('ipl-progress-indicator').remove();
  }, 5000);
  setTimeout(newWidth, 1500);
  setTimeout(enableMenu, 750);
  //var IHTReload = setTimeout(IHTReloadStage0, 900000);
  console.log('Infonet HyperText Loaded Successfully');
}

// Showdown of the new width of the frames
function newWidth() {
  let root = document.documentElement;
  root.style.setProperty('--leftwidth', '65%');
  root.style.setProperty('--rightwidth', '35%');
}

// Reload Infonet HyperText after a set amount of time with fadeouts.
function IHTReloadStage0() {
  console.log('Reloading System Running');
  console.log('Preparing for HyperText Reload...');
  clearInterval(theme);
  document.getElementById('overlay').style.background = '#E8E8E8';
  document.getElementById('overlay').style.display = 'block';
  console.log('Preparation complete');
  setTimeout(IHTReloadStage1, 20);
}
function IHTReloadStage1() {
  console.log('Initiating HyperText Reload...');
  fadeIn(document.getElementById('overlay'), 600);
  setTimeout(() => {
    console.log('Reload Stage 2 initiated. Restarting HyperText...');
    window.location.reload(true);
  }, 650);
}

// Secret
class Deferred {
  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

function* iterateEvents (type) {
  let nextEvent = new Deferred()
  const onEvent = event => {
    nextEvent.resolve(event)
    nextEvent = new Deferred()
  }
  document.addEventListener(type, onEvent)
  try {
    while (true) {
      yield nextEvent.promise
    }
  } finally {
    document.removeEventListener(type, onEvent)
  }
}

class Buffer {
  static from (array) {
    const buffer = new Buffer(array.length)
    return buffer.push(...array)
  }

  constructor (length) {
    this.length = length
    this.data = Array(length).fill(undefined)
  }

  push (...values) {
    this.data.push(...values)
    this.data = this.data.slice(-this.length)
    return this
  }

  values () {
    return this.data.slice().values()
  }

  equals (buffer) {
    return this.data.every((value, index) => value === buffer.data[index])
  }
}

async function matchKeyboardSequence (sequence, timeoutTime, callback) {
  let pressed
  const clearPressed = () => pressed = new Buffer(sequence.length)
  clearPressed()

  let timeoutId
  const resetTimeout = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      clearPressed()
      resetTimeout()
    }, timeoutTime)
  }
  resetTimeout()

 /* for await (event of iterateEvents('keydown')) {
    resetTimeout()
    if (pressed.push(event.keyCode).equals(sequence)) {
      clearPressed()
      callback()
    }
  }
}*/
for (let eventPromise of iterateEvents('keydown')) {
  const event = await eventPromise;
  resetTimeout()
  if (pressed.push(event.keyCode).equals(sequence)) {
    clearPressed()
    callback()
  }
}
}

const kernel = Buffer.from([38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13])
matchKeyboardSequence(kernel, 1000, () => kettle())

const reload = Buffer.from([70, 70, 70])
matchKeyboardSequence(reload, 1000, () => IHTReloadStage0())

const IHTVersion = Buffer.from([86, 69, 82])
matchKeyboardSequence(IHTVersion, 1000, () => versionModal())


const kaudio = new Audio('../Sound/ad322ffe0a88436296158a80d5d11baa.mp3');
// Secret Entered
function kettle() {
  console.log('kettle');
  kaudio.play();
  Swal.fire({
    icon: 'success',
    title: 'OwO',
    text: 'You entered the secret code ^_^',
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'Show me the secrit!',
    timer: 10000,
    timerProgressBar: true,
    allowEnterKey: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
    toast: false,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }).then((result) => {
    if (result.value) {
    kActivateStage0();
    }
  })
}

// Kettle mode activated
function kActivateStage0() {
  // Log the activation
  console.log('Kettle Mode activated. Stage 0 running');
  // Reset refresh delay
  clearTimeout(IHTReload);
  // Log it
  console.log('Refresh timer cleared');
  // Enable overlay
  document.getElementById('overlay').style.display = 'block';
  // Log it
  console.log('Overlay enabled');
  // Start next stage
  setTimeout(kActivateStage1, 30);
}
function kActivateStage1() {
  // Log the activation
  console.log('Kettle Mode Stage 1 running');
  // Fade in the overlay
  fadeIn(document.getElementById('overlay'), 600);
  // Log it
  console.log('Overlay fadein triggered');
  // Start next stage
  setTimeout(kActivateStage2, 600);
}
function kActivateStage2() {
  // Log the activation
  console.log('Kettle Mode Stage 2 running');
  // Kill any existing audio process
  document.getElementById('LoadedAudio').pause();
  //document.getElementById('LoadedAudio').src = '';
  // Log it
  //console.log('Any existing WarpSpeed processes killed');
  // Set volume to 40%
  document.getElementById('LoadedAudio').volume = 0.35;
  // Log it
  console.log('Volume set');
  // Stop theme script
  clearInterval(theme);
  // Log it
  console.log('Theme script killed');
  // Change clock color
  document.getElementById('Time').style.color = '#ffffff';
  // Log it
  console.log('Clock color set');
  // Change background color
  document.body.style.backgroundColor = '#100a1a';
  // Log it
  console.log('Background color for overflow set');
  // Change logo color
  document.getElementById('InfonetHyperTextLogo').src = nighttimelogo;
  // Log it
  console.log('Logo color set');
    // Choose random BG song out of this array
    var bgmArray = ['Graviton Flux - Singularity', 
    'Renard - Send It To The Moon',
    'Big Giant Circles - Go For Distance',
    'Otis McDonald - Richard\'s Stuff',
    'Initial D - Deja Vu',
    'Daniwell - Nyanyanyanyanyanyanya!',
    'Rick Astley - Never Gonna Give You Up',
    'Approaching Nirvana & Big Giant Circles - Reboot',
    'Yeah Yeah Yeahs - Heads Will Roll',
    'Bag Raiders - Shooting Stars',
    'Queen - Don\'t stop me now',
    'Illenium - Crawl Outta Love',
    'Sub Urban - Cradles',
    'Joakim Karud - Good Old Days',
    'Nightcore - Rockefeller Street',
    'a-ha - Take On Me',
    'Andrew Applepie - I\'m so',
    'Darude - Sandstorm',
    'Harold Faltermeyer - Axel F',
    'Noisestorm - Crab Rave',
    'Nea - Some Say',
    'Owl City - Fireflies',
    'Gigi D\'Agostino - L\'Amour Toujours',
    'Lemaitre - Axel F',
    'Smash Mouth - All Star',
    'Naz3nt - Coconut Mall',
    'Eiffel 65 - Blue',
    'Video Game Remixes - Wii Shop Channel',
    'ODESZA - Loyal',
    'MagnusTheMagnus - Keep On Lovin\'',
    'MagnusTheMagnus - Area',
    'The Dirty Tees - More Cowbell',
    'United States Marine Band - Regimental Pride March',
    'Initial D - Running in The 90s',
    'Vicetone & Tony Igy - Astronomia',
    'Yamboo - Kalinka',
    'Wagner - Ride of the Valkries',
    'Astrophysics - Bad Guy Synthwave Remix',
    'Astrophysics - Astronomia Synthwave Remix',
    'Fortnite - Travis Scott Event',
    'Loituma - Ievan Polkka',
    'The Living Tombstone - We are number one',
    'Edward Maya - Stereo Love',
    'Engelwood - Crystal Dolphin'];
    var bgm = bgmArray[Math.floor(Math.random() * bgmArray.length)];
    var bgmsrc = '../Sound/kettle/'+bgm+'.mp3';
    // Log it
    console.log('Random song selected');
    // Set the source to the random selected song
    document.getElementById('LoadedAudio').src = bgmsrc;
    // Log it
    console.log('Random song set');
    // Load/Buffer said song
    document.getElementById('LoadedAudio').load();
    // Log it
    console.log('Song buffered');
    console.log(bgm);
  // Make both iframes more transparent
  document.getElementById('leftframe').style.opacity = '0.35';
  document.getElementById('rightframe').style.opacity = '0.35';
  // Log it
  console.log('Iframe styles set');
  // Remove background
  document.body.background = '';
  // Log it
  console.log('Background removed');
  // Create new background with WarpSpeed
  new WarpSpeed('kettlebg', {'speed':0.4,'speedAdjFactor':0,'density':1,'shape':'square','warpEffect':false,'depthFade':true,'starSize':4,'backgroundColor':'hsl(263,45%,7%)','starColor':'#FFFFFF'});
  // Log it
  console.log('WarpSpeed activated');
  // Start next stage
  setTimeout(kActivateStage3, 1500);
  setTimeout(() => {
    kActivateStage5(bgm);
  }, 2000);
}
function kActivateStage3() {
  // Play it
  document.getElementById('LoadedAudio').play();
  // Log it
  console.log('Started playing');
  // Fade out the overlay
  removeFadeOut(document.getElementById('overlay'), 1000);
  // Log it
  console.log('Overlay fadeout triggered');
  // Start next stage
  setTimeout(kActivateStage4, 1100);
}
function kActivateStage4() {
  // Log the activation
  console.log('Kettle Mode activated. Stage 0 running');
  // Disable overlay
  document.getElementById('overlay').style.display = 'none';
  // Log it
  console.log('Overlay disabled');
  // Reset and extend the reload timer
  var IHTReload = setTimeout(IHTReloadStage0, 1800000);
  // Log it
  console.log('Refresh timer set');

}
function kActivateStage5(bgm) {
    // Display toast with playing message
    var bgmmsg = 'Playing: '+bgm;
    Swal.fire({
      showClass: {
        popup: 'fadein'
      },
      hideClass: {
        popup: 'fadeout'
      },
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: bgmmsg,
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  // Final log
  console.log('Kettle mode job completed. Enjoy!');
}

  /////////////////////
 // Menu management //
/////////////////////

// Only enable the menu after IHT has loaded
let menuEnable = false
function enableMenu() {
    menuEnable = true;
}

// Toggle menu function
function toggleMenu() {
  if (menuEnable === true) {
    //open menu
    document.getElementById('PageContentDiv').classList.toggle('toggled');
    document.getElementById('nav').classList.toggle('toggled');
    document.getElementById('menu').classList.toggle('toggled');
  }
}

// Darkmode menu
function darkMenu() {
  var menuElements = document.getElementsByTagName('a');

  for(var i = 0; i < menuElements.length; i++) {
    menuElements[i].style.color = "#ffffff";
  }
}
function lightMenu() {
  var menuElements = document.getElementsByTagName('a');

  for(var i = 0; i < menuElements.length; i++) {
    menuElements[i].style.color = "#000000";
  }
}

// Open the menu on right click
window.addEventListener('contextmenu', function (e) {
  // do something here... or how about nothing or update, how about opening a menu
  toggleMenu();
  e.preventDefault();
}, false);

// Open the menu on space press
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    toggleMenu();
  }
}

darkModeSwitch();
function darkModeSwitch() {
  const params = new URLSearchParams(window.location.search);

  var darkmode = params.get('darkmode');
  if (darkmode == 'true') {
    document.getElementById('darkmodetoggle').innerHTML = 'Disable Dark Mode'
    document.getElementById('menuopt3').addEventListener('click', event => {
      toggleMenu();
      reloadLight();
    })
  }
  else {
    document.getElementById('darkmodetoggle').innerHTML = 'Enable Dark Mode'
    document.getElementById('menuopt3').addEventListener('click', event => {
      toggleMenu();
      reloadDark();
    })
  }
}

// Add functions to the menu options
document.getElementById('menuopt1').addEventListener('click', event => {
	toggleMenu();
  })

document.getElementById('menuopt2').addEventListener('click', event => {
  toggleMenu();
  IHTReloadStage0();
  })

/*document.getElementById('menuopt3').addEventListener('click', event => {
	toggleMenu();
})*/
  
document.getElementById('menuopt4').addEventListener('click', event => {
  toggleMenu();
  versionModal();
})
    
document.getElementById('menuopt5').addEventListener('click', event => {
  toggleMenu();
  window.open('https://github.com/MaxTechnics/Infonet-HyperText/issues', '_blank'); 
})
      
document.getElementById('menuopt6').addEventListener('click', event => {
  toggleMenu();
  okBye();
})

// Return to the console
function okBye() {
  // Log the activation
  console.log('Return to console. Stage 0 running');
  // Enable overlay
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('overlay').style.background = '#E8E8E8';
  // Log it
  console.log('Overlay enabled');
  // Start next stage
  setTimeout(byeStage1, 30);
}
function byeStage1() {
  // Log the activation
  console.log('Interactive Guide Activation Stage 1 Running');
  // Fade in the overlay
  fadeIn(document.getElementById('overlay'), 600);
  // Log it
  console.log('Overlay fadein triggered');
  // Start next stage
  setTimeout(() => {
    console.log('K BYEEE');
    window.location.href = '../../index.html';
  }, 600);
}
// This is the switching between darkmode and lightmode
function reloadDark() {
  const params = new URLSearchParams(window.location.search);
  // Set the darkmode parameter
  params.set('darkmode', 'true');
  // Display the overlay
  dmrTrigger();
  // Reload
  setTimeout(() => {
    window.location.search = params;
  }, 620);
}
function reloadLight() {
  const params = new URLSearchParams(window.location.search);
  // Remove the darkmode parameter
  params.delete('darkmode');
  // Display the overlay
  dmrTrigger();
  // Reload
  setTimeout(() => {
    window.location.search = params;
  }, 620);
}
// Overlay diplay function
function dmrTrigger() {
  // Stop the theme script
  clearInterval(theme);
  // Prep the overlay
  document.getElementById('overlay').style.background = '#E8E8E8';
  document.getElementById('overlay').style.display = 'block';
  setTimeout(() => {
    // Fade in the overlay
    fadeIn(document.getElementById('overlay'), 600);
  }, 10);
}