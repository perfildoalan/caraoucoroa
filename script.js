const moeda = document.getElementById("moeda");
const cara = document.getElementById("cara");
const coroa = document.getElementById("coroa");
const sortear = document.querySelector("button");

sortear.addEventListener("click", function () {
  cara.style.transition = "opacity 0s ease-in"
  coroa.style.transition = "opacity 0s ease-in"
  cara.style.opacity = "0";
  coroa.style.opacity = "0";
  const keyframes = [
    { transform: "rotateY(0deg)" },
    { transform: "rotateY(360deg)" }
  ];
  const options = {
    duration: 400,
    iterations: 3,
    easing: "linear"
  };
  const animation = moeda.animate(keyframes, options);

  animation.onfinish = function () {
    cara.style.transition = "opacity 1s ease-in"
    coroa.style.transition = "opacity 1s ease-in"
    var sorte = Math.random();
    sorte = Math.round(sorte);
    if (sorte == 0) {
      cara.style.opacity = "1";
    }
    else {
      coroa.style.opacity = "1";
    }
  };
});