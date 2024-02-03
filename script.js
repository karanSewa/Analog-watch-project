let hours, mins, secs;
function timeShow() {
  const today = new Date();
  hours = today.getHours();
  mins = today.getMinutes();
  secs = today.getSeconds();

  document.querySelector(".hours").style.transform = `rotate(${
    hours * 30 + mins * 0.5
  }deg)`;
  document.querySelector(".mins").style.transform = `rotate(${
    mins * 6 + secs * 0.1
  }deg)`;
  document.querySelector(".secs").style.transform = `rotate(${secs * 6}deg)`;
}

setInterval(timeShow, 1000);
