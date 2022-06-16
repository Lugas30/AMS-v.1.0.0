var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("site-header").style.opacity = "1";
  } else {
    document.getElementById("site-header").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}