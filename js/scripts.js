// basic javaScript functions ...


//  When user scrolls - execute scrollingFunction
var prevScrollPos = window.pageYOffset;
window.onscroll = function () { scrollingFunction(); };
function scrollingFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollProgressBar").style.width = scrolled + "%";
  // after scrolling 99px, show the toTop icon
  // if (winScroll > 99 || winScroll > 99) {
  //   document.getElementById("scrollToTop").style.display = "block";
  // } else {
  //   document.getElementById("scrollToTop").style.display = "none";
  // }
}


// When user clicks the button, scroll to the top
function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;	}

//var prevScrollPos = window.pageYOffset;
function hideOnScroll () {
  var navbar = document.getElementById('navigate');
  var currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos) {
    navbar.style.top = '.2rem';
  } else {
    navbar.style.top = '-40px';
  }
  prevScrollPos = currentScrollPos;
  /*if(currentScrollPos > 555) {
    navbar.style.backgroundColor = 'grey';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }*/
  if(currentScrollPos > 555) {
    navbar.classList.add("filled");
  } else {
    navbar.classList.remove("filled");
  }
}
window.addEventListener('scroll', hideOnScroll);


var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  //if (slides.length != 3) {
  if (slides.length == 0) {
    // Some weirdness is happening, so bail
    return;
  }
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


jQuery("#scrollToTop").click(function () {
  jQuery("body,html").animate({
    scrollTop: 0
  }, 900);
});
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 222) {
    jQuery("#scrollToTop").addClass("visible");
  } else {
    jQuery("#scrollToTop").removeClass("visible");
  }
});
