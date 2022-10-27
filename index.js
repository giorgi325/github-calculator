let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C": {
        display.innerText = "";
        break;
      }
      case "←": {
        display.innerText = display.innerText.length - 1;
        if (display.innerText <= 0) {
          display.innerText = "";
        }
        break;
      }
      case "=": {
        display.innerText = eval(display.innerText);
        break;
      }

      default:
        display.innerText += e.target.innerText;
    }
  });
});

console.log("clicked");
