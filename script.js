// DIAPORAMA

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
  showSlides(slideIndex += n);
}

function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('demo');
  var captionText = document.getElementById('caption');

  if (n > slides.length)
  {
    slideIndex = 1;
  }

  if (n < 1)
  {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// MUSIC PLAYER

function myFunction()
{
  var x = document.getElementById('myDIV');
  var y = document.getElementById('myDIV2');

  if ((x.style.display === 'block' && y.style.display === 'block') ||
  (x.style.display === 'block' && y.style.display === 'none'))
  {
    y.style.display = 'none';
    x.style.display = 'none';
    document.getElementById('text').innerHTML = '';
  } else
  {
    y.style.display = 'block';
    setTimeout(function ()
    {
      x.style.display = 'block';
      y.style.display = 'none';
      document.getElementById('text').innerHTML = 'Enjoy the music!';
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
