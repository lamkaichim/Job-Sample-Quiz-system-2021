
(function(){
  

//quiz 1
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    //image array
    var ar = [];
    ar.push("sample.PNG");
    ar.push("sample.PNG");
    ar.push("sample.PNG");

    i = -1;

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        i++;

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){
  
         // ...add an HTML radio button
          answers.push(
            `<label >
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
            
          );
        }

          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} <br><small>Tips :</small> 
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Sampleimage">tips</button>
            </div>
            <div class="answers" > ${answers.join('')} </div>`
          ); 
         

      }
    );
       


    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
//quiz 2
  function buildQuiz2(){
    // variable to store the HTML output
    const output2 = [];

    //image array
    var ar = [];
    ar.push("sample.PNG");
    ar.push("sample.PNG");
    ar.push("sample.PNG");


    i = -1;

    // for each question...
    myQuestions2.forEach(
      (currentQuestion2, questionNumber2) => {

        i++;
        // variable to store the list of possible answers
        const answers2 = [];

        // and for each available answer...
        for(letter2 in currentQuestion2.answers2){

          // ...add an HTML radio button
          answers2.push(
            `<label>
              <input type="radio" name="question2${questionNumber2}" value="${letter2}" required>
              ${currentQuestion2.answers2[letter2]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output2.push(
          `<div class="question"> ${currentQuestion2.question2} <br><small>Tips :</small> 
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Sampleimage">tips</button></div>
          <div class="answers"> ${answers2.join('')} </div>`
        );
        
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer2.innerHTML = output2.join('');
  }
//quiz 3
  function buildQuiz3(){
    // variable to store the HTML output
    const output3 = [];

    //image array
    var ar = [];
    ar.push("sample.PNG");
    ar.push("sample.PNG");
    ar.push("sample.PNG");


    i = -1;

    // for each question...
    myQuestions3.forEach(
      (currentQuestion3, questionNumber3) => {
        i++;
        // variable to store the list of possible answers
        const answers3 = [];

        // and for each available answer...
        for(letter3 in currentQuestion3.answers3){

          // ...add an HTML radio button
          answers3.push(
            `<label>
              <input type="radio" name="question3${questionNumber3}" value="${letter3}" required>
              ${currentQuestion3.answers3[letter3]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output3.push(
          `<div class="question"> ${currentQuestion3.question3} <br><small>Tips :</small> 
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Sampleimage">tips</button></div>
          <div class="answers"> ${answers3.join('')} </div>`

        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer3.innerHTML = output3.join('');

 
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const answerContainers2 = quizContainer2.querySelectorAll('.answers');
    const answerContainers3 = quizContainer3.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
    var answersum = []; //save for JSON

    // for each question // quiz 1
        myQuestions.forEach( (currentQuestion, questionNumber) => {

          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
          
          // if answer is correct
          if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;

            // // color the answers green
            // answerContainers[questionNumber].style.color = 'lightgreen';
            answerContainers[questionNumber].style.color = '#333';
            
          }
          // if answer is wrong or blank
          else if ($("input[type=radio]:checked").length == 9){
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
            
          }
          answersum.push(userAnswer);

        });
 
        // for each question //quiz 2
        myQuestions2.forEach( (currentQuestion2, questionNumber2) => {

          // find selected answer
          const answerContainer2 = answerContainers2[questionNumber2];
          const selector2 = `input[name=question2${questionNumber2}]:checked`;
          const userAnswer2 = (answerContainer2.querySelector(selector2) || {}).value;
          
          // if answer is correct
          if(userAnswer2 === currentQuestion2.correctAnswer){
            // add to the number of correct answers
            numCorrect+=1;
    
            // // color the answers green
            answerContainers2[questionNumber2].style.color = '#333';
          }
          // if answer is wrong or blank
          else if ($("input[type=radio]:checked").length == 9){
            // color the answers red
            answerContainers2[questionNumber2].style.color = 'red';
          }

          answersum.push(userAnswer2);
        });

         // for each question //quiz 3
         myQuestions3.forEach( (currentQuestion3, questionNumber3) => {

          // find selected answer
          const answerContainer3 = answerContainers3[questionNumber3];
          const selector3 = `input[name=question3${questionNumber3}]:checked`;
          const userAnswer3 = (answerContainer3.querySelector(selector3) || {}).value;
    
          // if answer is correct
          if(userAnswer3 === currentQuestion3.correctAnswer){
            // add to the number of correct answers
            numCorrect+=1;
    
            // // color the answers green
            answerContainers3[questionNumber3].style.color = '#333';
          }
          // if answer is wrong or blank
          else if ($("input[type=radio]:checked").length == 9){
            // color the answers red
            answerContainers3[questionNumber3].style.color = 'red';
          }

          answersum.push(userAnswer3);
        });    


    //score alert
    if ($("input[type=radio]:checked").length < 9&&numCorrect<=5){

      Swal.fire({
        title: 'Sure?',
        text: "You can not change later",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Submit'
      }).then((result) => {
        if (result.isConfirmed) {
          let timerInterval
          Swal.fire({
            icon: 'error',
            title:`Score${numCorrect}，Under average，Please quiz again`,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                  const b = content.querySelector('b')
                  if (b) {
                    b.textContent = Swal.getTimerLeft()
                  }
                }
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              // console.log('I was closed by the timer')
              location.href = "transition.html";
            }
          })
        }
      })
      //not shown answer if not fulfilled entorely
      
      
    } 
    else if($("input[type=radio]:checked").length < 9&&numCorrect>5){
      Swal.fire({
        title: 'Sure?',
        text: "You can not change later",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Submit'
      }).then((result) => {
        if (result.isConfirmed) {
          $("input[type=radio]:checked").length = 9;
          
          Swal.fire({
            title: `Score{numCorrect}，Passed`,
            icon: 'success',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'Confirm'

          })
          
        }
      })

    }
  
    else if (numCorrect<=5&&$("input[type=radio]:checked").length == 9){
      // alert("尚未達到要求 (result <6), 重做");
      
      Swal.fire({
        title: `Score${numCorrect}，Under average，Plase quiz again`,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Restart'
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = "transition.html";
        }
        location.href = "transition.html";
      })

      
    } 
    else if (numCorrect>5&&$("input[type=radio]:checked").length == 9) {

       // show number of correct answers out of total

       Swal.fire({
        title: `Score${numCorrect}，Passes`,
        icon: 'success',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Confirm'
      })
    }

    //////////////////////Send value to php //////////////////////////////
     var NumCorrect = JSON.stringify(numCorrect);
     var Answerstring = JSON.stringify(answersum);

      $.post(
        "http://localhost/abc/submit.php",
        {NumCorrect:NumCorrect, Answerstring:Answerstring},
        function(data, status){ console.log(data + "status: " + status);
      });

  }
  
  //quiz 1
  const quizContainer = document.getElementById('quiz');
  //quiz 2
  const quizContainer2 = document.getElementById('quiz2');
  //quiz 3
  const quizContainer3 = document.getElementById('quiz3');

  const submitButton = document.getElementById('submit');


  //quiz 1 var question + answer = correctAnswer
  const myQuestions = [
    {
      question: "Question 1: 1 + 1 = ?",
      answers: {
        a: "1",
        b: "2"
      },
      correctAnswer: "b"
    },
    {
      question: "Question 2: 2 + 2 = ?",
      answers: {
        a: "4",
        b: "5"
      },
      correctAnswer: "a"
    },
    {
      question: "Question 3: 3 + 3 = ?",
      answers: {
        a: "6",
        b: "7"
      },
      correctAnswer: "a"
    }
    
  ];
  //quiz 2
  const myQuestions2 = [
    {
      question2: "Question 1: 1 + 1 = ?",
      answers2: {
        a: "1",
        b: "2"
      },
      correctAnswer: "a"
    },
    {
      question2: "Question 2: 2 + 2 = ?",
      answers2: {
        a: "4",
        b: "5"
      },
      correctAnswer: "a"
    },
    {
      question2: "Question 3: 3 + 3 = ?",
      answers2: {
        a: "6",
        b: "7"
      },
      correctAnswer: "a"
    }
          
  ];
  //quiz 3
  const myQuestions3 = [
    {
      question3: "Question 1: 1 + 1 = ?",
      answers3: {
        a: "1",
        b: "2"
      },
      correctAnswer: "a"
    },
    {
      question3: "Question 2: 2 + 2 = ?",
      answers3: {
        a: "4",
        b: "5"
      },
      correctAnswer: "a"
    },
    {
      question3: "Question 3: 3 + 3 = ?",
      answers3: {
        a: "6",
        b: "7"
      },
      correctAnswer: "a"
    }
    
  ];

  // Kick things off
  buildQuiz();
  buildQuiz2();
  buildQuiz3();

 
  // Event listeners
  submitButton.addEventListener('click', showResults);

})();