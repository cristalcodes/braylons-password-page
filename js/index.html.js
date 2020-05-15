document.addEventListener("DOMContentLoaded", () => {
  getTheTime();
})

function getTheTime() {
  let currentTime = new Date();
  let hour = addZero(currentTime.getHours());
  let minutes = addZero(currentTime.getMinutes());
  document.getElementById('time').innerHTML = `${hour} : ${minutes}`
  setInterval(getTheTime, 1000);
}

function addZero(i) {
  if (i < 10 ) {
    i = "0" + i;
  }
  return i;
}
