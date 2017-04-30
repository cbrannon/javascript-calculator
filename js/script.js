$(document).ready(function() {
  var sum = '';
  var operators = ['+', '-', '*', '/', '=', '%'];
  var currentContent = '';
  var currentOperator = '';
  
  function operaterInArray() {
    for (var i = 0; i < operators.length - 1; i++) {
      if (sum.indexOf(operators[i]) > - 1) {
        sum = eval(sum).toString();
      }
    }
  }
  
  function removeEquals() {
    if (sum.slice(-1) == '=') {
      sum = sum.replace("=", "");
    }
    currentContent = '';
    currentOperator = '';
  }
  
  function endsWithOperator() {
    if (operators.includes(sum.slice(-1))) {
      $('#display').empty();
    }
  }

  $("#ac").click(function() {
    sum = '';
    $('#display').empty();
  });

  $("#ce").click(function() {
    var currentContent = $('#display').text();
    sum = sum.slice(0, -currentContent.length);
    $('#display').empty();
  });

  $("#divide").click(function() {
    removeEquals();
    operaterInArray();
    sum+='/';
  });

  $("#multiply").click(function() {
    removeEquals();
    operaterInArray();
    sum+='*';
  });
  
  $("#minus").click(function() {
    removeEquals();
    operaterInArray();
    sum+='-';
  });

  /* multiply and divide sum to increase point precision */
  $("#equal").click(function() {
    if (currentContent == '' && currentOperator == '') {
      currentContent = $('#display').text();
      currentOperator = sum.charAt(sum.length-(currentContent.length+1));
    }
    
    if (sum.slice(-1) == '=') {
      sum = sum.replace("=", currentOperator + currentContent);
    }
    
    $('#display').empty();
    $('#display').append(((eval(sum)*10)/10).toString());
    sum+='=';
  });

  $(".add").click(function() {
    removeEquals();
    operaterInArray();
    sum+='+';
  });
  
  $("#percent").click(function() {
    $('#display').empty();
    sum = (eval(sum) * 100).toString() + "%";
    $('#display').append(sum);
  });
  
  $("#point").click(function() {
    var currentContent = $('#display').text();
    endsWithOperator();
    if (currentContent.indexOf('.') == -1) {
      if ($('#display').text() == '') {
        sum+='0.';
        $('#display').append('0.');
      } else {
        sum+='.';
        $('#display').append('.');
      }
    }
  });

  $("#zero").click(function() {
    endsWithOperator();
    if (!$('#display').is(':empty')) {
      $('#display').append('0');
      sum+='0';
    }
  });

  $("#one").click(function() {
    endsWithOperator();
    sum+='1';
    $('#display').append('1');
  });

  $("#two").click(function() {
    endsWithOperator();
    sum+='2';
    $('#display').append('2');
  });

  $("#three").click(function() {
    endsWithOperator();
    sum+='3';
    $('#display').append('3');
  });

  $("#four").click(function() {
    endsWithOperator();
    sum+='4';
    $('#display').append('4');
  });

  $("#five").click(function() {
    endsWithOperator();
    sum+='5';
    $('#display').append('5');
  });

  $("#six").click(function() {
    endsWithOperator();
    sum+='6';
    $('#display').append('6');
  });

  $("#seven").click(function() {
    endsWithOperator();
    sum+='7';
    $('#display').append('7');
  });

  $("#eight").click(function() {
    endsWithOperator();
    sum+='8';
    $('#display').append('8');
  });

  $("#nine").click(function() {
    endsWithOperator();
    sum+='9';
    $('#display').append('9');
  });
});