var playing = false;
var score;
var trialsleft;
var fruits = [
  "apple",
  "ypear",
  "banana",
  "cherry",
  "grapes",
  "mango",
  "orange",
  "peach",
  "pear",
  "pineapple",
  "strawberry",
  "eggplant",
  "dragon fruit",
  "watermelon",
];
$(function () {
  // click on start or reset button
  $("#startreset").click(function () {
    // are we playing?
    if (playing == true) {
      // reload page
      location.reload;
    } else {
      // not playing
      playing = true;
      // set score to 0
      score = 0;
      $("#scoreValue").html(score);

      // show trial left
      $("#trialsleft").show();
      trialsleft = 3;
      addHearts();
      // change button text to reset game
      $("#startreset").html("Reset Game");
    }
  });
});
function addHearts() {
  for (i = 0; i < trialsleft; i++) {
    $("#trialsleft").append('<img src="images/heart.png" class="life">');
  }
}
function startAction() {
  $("#fruit1").show();
  chooseFruit();
}

function chooseFruit() {
  $("#fruit1").attr("src", "images/apple.jpeg", 'class = "apple');
}
// yew
// 1.create a random fruit
// define a random step
// 2.move fruit down one step every 30sec
// check if fruit is too low
// if no repeat no.2
// yes-> any trials left?
// yes?
// remove one heart and repeat no.1
// no?
// show game over and change button text to start game

// if slice fruit
// play sound in th background
// explode fruit
