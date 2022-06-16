
function openMobNav() {
  var element = document.getElementById("mobileSidenav");
    if (element.style.height == "100%"){
        element.style.height = "0px";
        $('#mob-footer').removeClass("fixed");
        $('#site-header').removeClass("fixed");
        
    } else {
        element.style.height = "100%";
        $('#mob-footer').addClass("fixed");
        $('#site-header').addClass("fixed");
        
        
    }
}