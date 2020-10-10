let sec = 0;
let timerID = 0;

function changeTimer() {
  sec++;
  $(".timer").html(sec/100 + " секунд");
}

function initTimer() {
  timerID = setInterval(changeTimer, 10);
}

function stopTimer() {
  clearInterval(timerID);
  sec = 0;
}