// DIAPORAMA
var intervalPhoto;
var slideImg;

function changeImage()
{
  var random = Math.floor((Math.random() * 6) + 1);
  var slides = 'images/pano-' + String(random) + '.jpg';

  slideImg = document.getElementById('slideImg');
  slideImg.style.display = 'block';

  while (slides == slideImg.src.substr(slideImg.src.length - 17))
  {
    random = Math.floor((Math.random() * 6) + 1);
    slides = 'images/pano-' + String(random) + '.jpg';
  }

  slideImg.src = slides;
}

function myDiapo()
{
  var buttonOn = document.getElementById('diapo-on');
  var buttonOff = document.getElementById('diapo-off');

  buttonOn.style.display = 'none';
  buttonOff.style.display = 'block';

  changeImage();
  intervalPhoto = setInterval(changeImage, 3000);
}

function stopDiapo()
{
  var buttonOn = document.getElementById('diapo-on');
  var buttonOff = document.getElementById('diapo-off');

  slideImg.style.display = 'none';

  buttonOn.style.display = 'block';
  buttonOff.style.display = 'none';

  clearInterval(intervalPhoto);
}

// MUSIC PLAYER

function loadMusic()
{
  var x = document.getElementById('myDIV');
  var y = document.getElementById('myDIV2');
  var z = document.getElementById('text');

  y.style.fontSize = '20px';
  y.style.fontFamily = 'Lustria';

  z.style.fontSize = '20px';
  z.style.fontFamily = 'Lustria';

  if ((x.style.display === 'block' && y.style.display === 'block') ||
  (x.style.display === 'block' && y.style.display === 'none'))
  {
    y.style.display = 'none';
    x.style.display = 'none';
    z.innerHTML = '';
  } else
  {
    y.style.display = 'block';
    setTimeout(function ()
    {
      x.style.display = 'block';
      y.style.display = 'none';
      z.innerHTML = 'Enjoy the music!';
    }, 1000);
  }
}

// BIRDS SHEETS

function bigImg(x)
{
  x.style.height = '400px';
  x.style.width = '400px';
}

function normalImg(x)
{
  x.style.height = '200px';
  x.style.width = '200px';
}
