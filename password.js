// implements javascript in a strict mode.
"use strict";

// when the document is ready
$(document).ready(function () {
  var getRandomNumber = function (max) {
    var random;
    if (!isNaN(max)) {
      //value >= 0.0 and < 1.0
      random = Math.random();
      //value is an integer between 0 and max - 1
      random = Math.floor(random * max);
      //value is an integer between 1 and max
      random = random + 1;
    }
    return random;
  };

  // adding click event listener that removes the previous entry
  $("#generate").click(function () {
    $("#password").val("");

    // creating a chars string that almost has all the characters.
    var chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
    var password = "";
    var start, stop, char;

    // getting the password length entered by the user.
    var num = parseInt($("#num").val());

    // validating the password entered by the user.
    if (isNaN(num)) {
      // giving an alert to the user if it is not a valid number
      alert("Please enter a valid number");
    } else {
      // looping for the number of times entered by the user
      for (var i = 0; i < num; i++) {
        //it will gets the random character from the string chars.
        start = getRandomNumber(chars.length);
        stop = start + 1;
        char = chars.substring(start, stop);

        // password string will be added with the random character.
        password = password += char;
      }
      //    displaying the generated password to the user when loop is done.
      $("#password").val(password);
    }
  });

  // adding the click event listener on the clear
  $("#clear").click(function () {
    $("#num").val("");
    $("#password").val("");
    $("#num").focus();
  });

  // using focus method that brings focus on the initial load
  $("#num").focus();
});
