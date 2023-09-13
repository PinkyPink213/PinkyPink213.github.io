var scrollToTopBtn = document.getElementById("up-button");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);


scrollToTopBtn.style.display = "none";//by default should be hidden
document.querySelector('body').onscroll = function(){//whenever they scroll
  if (window.scrollY > 150)//if scroll is 150px from top
    scrollToTopBtn.style.display = "block";//if they scroll down, show
  else
  scrollToTopBtn.style.display = "none";//if they scroll up, hide
};
