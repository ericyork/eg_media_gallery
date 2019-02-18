//* Page Scripts
//* Mobile Navigaton Toggle
function navToggle() { //creates a new function named navToggle
  var x = document.getElementById("main-nav"); //creates a variable set to #main-nav
    if (x.className === "topnav") { //if #main-nav has a class of .topnav,
    x.className += " responsive";   // then add a new class
  } else {                          // if it doesn't,
    x.className = "topnav";         // set class to .topnav
  } //closes if-else
} //closes function

//* Slideshow Functions
var slideIndex = 1; //creates the index variable and initializes to 1
showSlides(slideIndex); //passes new variable to the showSlides function as an argument

function plusSlides(n) { //creates function for adding to slide index
  showSlides(slideIndex += n); /*-- sets how much to increase index by --*/
}

function currentSlide(n) { /*-- sets current slide index --*/
  showSlides(slideIndex = n);
}

function showSlides(n) { //slide rotation function
  var i; // creates a basic variable
  var slides = document.getElementsByClassName("slide"); // targets slides
  var indicator = document.getElementsByClassName("indicator"); //targets indicators
  if (n > slides.length) {slideIndex = 1} //if n is greater slides string length, index set to 1
  if (n < 1) {slideIndex = slides.length} //if n is less, set index to slides string length
  for (i = 0; i < slides.length; i++) { //when i=0, and less than slides string length, increment i
      slides[i].style.display = "none"; //then hide that slide with display: none
  }
  for (i = 0; i < indicator.length; i++) { //when i is greater, increment it
      indicator[i].className = indicator[i].className.replace(" active", ""); //and the associated indicator gets the .active class added to it
  }
  slides[slideIndex-1].style.display = "block"; //display slides
  indicator[slideIndex-1].className += " active"; //make indicator active
}

//* New Modal Scripts
// Requires jQuery!!!
$(".button").on("click", function() { //when item with class of button is clicked, fire function
  var modal = $(this).data("modal"); //sets modal var equal to data attribute
  $(modal).show(); //opens up modal (much code hidden here by jQuery)
});
$(".modal").on("click", function(e) { // sets up click function
  var className = e.target.className; // var className set to event target
  if(className === "modal" || className === "close"){ //if conditions are met...
    $(this).closest(".modal").hide(); //then hide the modal
  } //closes if-statement
}); //closes function
