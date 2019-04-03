// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.getElementById("topBtn").style.display = "none";
    document.querySelector(".navbar").classList.remove("scrolled");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}