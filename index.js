let allButtons = 7;

for (var i = 0; i < allButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", buttonClick);

}

function buttonClick() {
  this.style.color = "#fff";
  let buttonInnerText = this.innerHTML;
  switchSound(buttonInnerText);
  buttonAnnimation(buttonInnerText);
}

function switchSound(sound) {
  switch (sound) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "j":
      let tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;
    case "k":
      let tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "l":
      let tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;
    default:
  }
}
document.addEventListener("keydown", function(event) {
  switchSound(event.key);
  buttonAnnimation(event.key);
});

function buttonAnnimation(button) {
  let button_clicked = document.querySelector("." + button);
  button_clicked.classList.add("pressed");
  setTimeout(function() {
    button_clicked.classList.remove("pressed");
  }, 1000);
}
