//* Page Scripts
//* Mobile Navigaton Toggle
function navToggle() {
  var x = document.getElementById("main-nav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
  }
}
//* New Modal Scripts
$(".button").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).show();
});
$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
  }
});
