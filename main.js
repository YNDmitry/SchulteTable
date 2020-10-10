$(document).ready(function() {


  let set = new Set();
  let recordArr = [];


restartTable();
checkBlock();
Timer();

function reloadRecord() {
  let sortedRecord = recordArr.sort( (a, b) => a - b );
  $(".n1").html((sortedRecord[0]) ? (sortedRecord[0]/100 + " сек.") : " ");
  $(".n2").html((sortedRecord[1]) ? (sortedRecord[1]/100 + " сек.") : " ");
  $(".n3").html((sortedRecord[2]) ? (sortedRecord[2]/100 + " сек.") : " ");
}

function Timer() {
  $(".start").click(function () {
    initTimer()
  })
  $(".stop").click(function () {
    stopTimer()
  })
}

function restartTable() {

  set.clear();

  set.add("1");

  stopTimer();

  reloadRecord();

  $(".timer").html(sec + " секунд");

  $(".block").animate({
      opacity: 1,
    }, 1000);

  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  function mixArr(arr) {
    let result =  arr.sort(function() {
      return Math.random() - 0.5;
    })
    return result;
  }

  let mixedArr = mixArr(arr);

  let counter = 1;
  for (let i of mixedArr) {
    $(".b" + counter).html(i);
    counter += 1;
  }
}

$(".mix").click(function() { restartTable() });
$(".okbtn").click(function() { restartTable() });


function checkBlock() {

  $(".block").click(function() {

  let clicked = $(this).html();

  if (clicked == 1)  initTimer();

  if (set.has(clicked)) {
    $(this).html(" ");
    $(this).animate({
        opacity: 0.3,
      }, 500);
    set.add(String(+clicked + 1));
  }

  if (set.has("26")) {
    recordArr.push(sec);
    record = Math.min.apply(null, recordArr);
    showPopup();
    stopTimer();
    reloadRecord();
    }

  });
}

$(".okbtn").click(function() { hidePopup() });

function showPopup() {
  let sortedRecord = recordArr.sort( (a, b) => a - b );
  $(".currentresult").html("Ваш результат - " + sec/100);
  $(".recordresult").html((sortedRecord[0]) ? ("Ваш рекорд - " + sortedRecord[0]/100 + " сек.") : " ");
  $(".popup").css("display", "block");
}

function hidePopup() {
  $(".popup").css("display", "none")
}




});
