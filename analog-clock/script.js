const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const displayTime = () => {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let secRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${secRotation}deg)`;
};
setInterval(displayTime, 1000);
