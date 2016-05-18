var result;

   function check() {
      var question;
      var value1;
      var value2;
      var value3;
      var value4;
      var answer;
      var youranswer;
   
      question = 1;
      value1 = 0;
      value2 = 0;
      value3 = 0;
      value4 = 0;
      value5 = 0;
      result = "";
      answer = 1;
      var choice;

      for (question = 1; question <= 10; question++) {

        var q = document.forms['quiz'].elements['q'+question];
            for (var i = 0; i < q.length; i++) {
               if (q[i].checked) {
                  choice = q[i].value;
               }
            }

            if (choice == "value1") {
               value1++;
            }
            if (choice == "value2") {
               value2++;
            }
            if (choice == "value3") {
               value3++;
            }
            if (choice == "value4") {
               value4++;
            }
            if (choice == "value5") {
               value5++;
            }
         }

      if (value1 >= value2 && value1 >= value3 && value1 >= value4 && value1 >= value5 && value1 > 0) {
      // value1 is the highest
      result = "metal";
      }
      else if (value2 > value1 && value2 >= value3 && value2 >= value4 && value2 >= value5 && value2 > 0) {
         // value2 is the highest
         result = "wood";
      }
      else if (value3 > value1 && value3 > value2 && value3 >= value4 && value3 >= value5 && value3 > 0) {
         // value3 is the highest
         result = "water";
      }
      else if (value4 > value1 && value4 > value2 && value4 > value3 && value4 >= value5 && value4 > 0) {
         // value4 is the highest
         result = "fire";
      }
      else if (value5 > value1 && value5 > value2 && value5 > value3 && value5 > value4 && value5 > 0) {
         // value5 is the highest
         result = "earth";
      }
      else {
         result = "index";
      }
      window.location = result + ".html";
   }