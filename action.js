var OngoingTest = document.getElementById("text-2");
var CompletedTest = document.getElementById("text-1");
var skillbox = document.getElementById("skill-asst-box");
var bkmark = document.getElementsByClassName("bookmark");
var subText = document.getElementsByClassName("submitted-text");

function underline() {
    OngoingTest.style.borderBottom = "4px solid rgb(123,204,237)";
    CompletedTest.style.borderBottom = "4px solid rgb(255,255,255)";
    OngoingTest.style.color="black"
    skillbox.style.display = "none";
   

    for (var i = 0; i < bkmark.length; i++) {
        bkmark[i].style.display = "none";
    }

$(".submitted-text").html("Submit Before: 17th Aug 2022");
$(".button").html("View Details");



}

function underline1() {
    OngoingTest.style.borderBottom = "4px solid rgb(255,255,255)";
    CompletedTest.style.borderBottom = "4px solid rgb(123,204,237)";
    skillbox.style.display = "block";

  
    for (var i = 0; i < bkmark.length; i++) {
        bkmark[i].style.display = "block";


    }

    $(".submitted-text").html("Submitted on: 27th July 2022"); 
    $(".button").html("View Results"); 
}

function hello(){
    console.log("hello world")
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener("click", function(){
    modal.style.display = "block";
});
  


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}