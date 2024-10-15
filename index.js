// detect button press
$(".piano").click(function () {
  var key = this.id;
  makeSound(key);
  buttonAnimation(key);
});

// detect key press
$(document).on("keypress", function (event) {
  console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "c":
      var c = new Audio("sounds/do.wav");
      c.play();
      break;

    case "d":
      var d = new Audio("sounds/re.wav");
      d.play();
      break;

    case "e":
      var e = new Audio("sounds/mi.wav");
      e.play();
      break;

    case "f":
      var f = new Audio("sounds/fa.wav");
      f.play();
      break;

    case "g":
      var g = new Audio("sounds/sol.wav");
      g.play();
      break;

    case "a":
      var a = new Audio("sounds/la.wav");
      a.play();
      break;

    case "b":
      var b = new Audio("sounds/si.wav");
      b.play();
      break;

    case "z":
      var z = new Audio("sounds/do-high.wav");
      z.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  var selectedButton = "#" + key;
  $(selectedButton).addClass("pressed");

  setTimeout(function () {
    $(selectedButton).removeClass("pressed");
  }, 100);
}
