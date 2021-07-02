// Declare variables
let timeNow = moment().format('hh:mm:ss a');
let hourNow = moment().format('h');
let hourNow24 = parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

var hour1 = $('#time1').text();
var hour2 = $('#time2').text();
var hour3 = $('#time3').text();
var hour4 = $('#time4').text();
var hour5 = $('#time5').text();
var hour6 = $('#time6').text();
var hour7 = $('#time7').text();
var hour8 = $('#time8').text();
var hour9 = $('#time9').text();

var hour1Int = parseInt(hour1);
var hour2Int = parseInt(hour2);
var hour3Int = parseInt(hour3);
var hour4Int = parseInt(hour4);
var hour5Int = parseInt(hour5);
var hour6Int = parseInt(hour6);
var hour7Int = parseInt(hour7);
var hour8Int = parseInt(hour8);
var hour9Int = parseInt(hour9);

// Store user input in local Storage
$('#btn1').click(function () {
  if ($('#text1').val()) {
    localStorage.removeItem('text1');
  }
  var hour1String = JSON.stringify(hour1);
  localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function () {
  if ($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  var hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#text2').val());
});

$('#btn3').click(function () {
  if ($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  var hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#text3').val());
});

$('#btn4').click(function () {
  if ($('#text4').val()) {
    localStorage.removeItem('text4');
  }

  var hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#text4').val());
});

$('#btn5').click(function () {
  if ($('#text5').val()) {
    localStorage.removeItem('text5');
  }

  var hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#text5').val());
});

$('#btn6').click(function () {
  if ($('#text6').val()) {
    localStorage.removeItem('text6');
  }

  var hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#text6').val());
});

$('#btn7').click(function () {
  if ($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  var hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#text7').val());
})

$('#btn8').click(function () {
  if ($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  var hour8String = JSON.stringify(hour8);

  localStorage.setItem(hour8, $('#text8').val());
})

$('#btn9').click(function () {
  if ($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  var hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#text9').val());
})

// Display the time using moment.js

$('#currentDay').append(timeNow);

// Color coding to  show the past, the present or the future 

colorCoding();

function colorCoding() {
  TIMER = setInterval(colorCoding, 1000);

  // Test check: hourNow24 <= 5pm;
  if (hourNow24 >= 9 && hourNow24 <= 17) {

    for (let i = 1; i <= 9; i++) {
      let hourInInt = parseInt($('#time' + i).text());
      if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
      }
      //Check it is now
      if (hourInInt == hourNow24) {
        $('#text' + i).css('background-color', '#FB8F78');
        continue;
      }
      //Check it was pass Time
      if (hourInInt < hourNow24) {
        $('#text' + i).css('background-color', 'lightgray');
      }
      // or it is future Time
      else {
        $('#text' + i).css('background-color', 'lightgreen');
      }
    }
    // it's not in the valid period
  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'pink');
  }
  //Try pull information from Local Storage
  $("#text1 .description").val(localStorage.getItem("9 A.M."));
  $("#text2 .description").val(localStorage.getItem("10 A.M."));
  $("#text3 .description").val(localStorage.getItem("11 A.M."));
  $("#text4 .description").val(localStorage.getItem("12 P.M."));
  $("#text5 .description").val(localStorage.getItem("1 P.M."));
  $("#text6 .description").val(localStorage.getItem("2 P.M."));
  $("#text7 .description").val(localStorage.getItem("3 P.M."));
  $("#text8 .description").val(localStorage.getItem("4 P.M."));
  $("#text9 .description").val(localStorage.getItem("5 P.M."));
}
