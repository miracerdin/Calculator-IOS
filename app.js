const container = document.querySelector(".container");
const screen = document.querySelector(".screen");
const calc = document.querySelector(".calc");

container.addEventListener("click", (e) => {
  let tus = e.target.innerHTML;
  if (tus == "AC") {
    calc.style.fontSize = "2rem";
    e.target.parentElement.previousElementSibling.innerHTML = "0";
    e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML =
      " ";
  } else if (tus == "±") {
    let sonuc = e.target.parentElement.previousElementSibling.innerHTML;
    e.target.parentElement.previousElementSibling.innerHTML = sonuc * -1;
  } else if (e.target.parentElement.classList.contains("main")) {
    null;
  } else if (tus == "%") {
    let sonuc = e.target.parentElement.previousElementSibling.innerHTML;
    e.target.parentElement.previousElementSibling.innerHTML = sonuc * 0.01;
  } else if (e.target.innerHTML == "+") {
    screen.innerHTML = calc.innerHTML + "+";
    calc.innerHTML = "";
  } else if (e.target.innerHTML == "-") {
    screen.innerHTML = calc.innerHTML + "-";
    calc.innerHTML = "";
  } else if (e.target.innerHTML == "X") {
    screen.innerHTML = calc.innerHTML + "X";
    calc.innerHTML = "";
  } else if (e.target.innerHTML == "÷") {
    screen.innerHTML = calc.innerHTML + "÷";
    calc.innerHTML = "";
  } else if (e.target.innerHTML == ".") {
    if (calc.innerHTML.includes(".")) {
      calc.innerHTML += "";
    } else {
      calc.innerHTML += ".";
    }
  } else if (e.target.innerHTML == "=") {
    if (screen.innerHTML.slice(screen.innerHTML.length - 1) == "+") {
      let sonuc =
        Number(screen.innerHTML.slice(0, screen.innerHTML.length - 1)) +
        Number(calc.innerHTML);
      calc.innerHTML = sonuc;
      screen.innerHTML = "";
    } else if (screen.innerHTML.slice(screen.innerHTML.length - 1) == "-") {
      let sonuc =
        Number(screen.innerHTML.slice(0, screen.innerHTML.length - 1)) -
        Number(calc.innerHTML);
      calc.innerHTML = sonuc;
      screen.innerHTML = "";
    } else if (screen.innerHTML.slice(screen.innerHTML.length - 1) == "X") {
      let sonuc =
        Number(screen.innerHTML.slice(0, screen.innerHTML.length - 1)) *
        Number(calc.innerHTML);
      calc.innerHTML = sonuc;
      screen.innerHTML = "";
    } else if (screen.innerHTML.slice(screen.innerHTML.length - 1) == "÷") {
      let sonuc =
        Number(screen.innerHTML.slice(0, screen.innerHTML.length - 1)) /
        Number(calc.innerHTML);
      calc.innerHTML = sonuc;
      screen.innerHTML = "";
    }
  } else {
    if (calc.innerHTML == "0") {
      calc.innerHTML = "";
    }

    calc.innerHTML += tus;
    if (calc.innerHTML.length > 16) {
      calc.style.fontSize = "1rem";
      screen.style.fontSize = "1.2rem";
    } else {
      calc.style.fontSize = "2rem";
      screen.style.fontSize = "2rem";
    }
  }
});
