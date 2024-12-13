console.log("hello")

const userName = prompt("What is your name?");
// const answeredName = document.getElementById("name");
// answeredName.textContent = userName;

const askMeButton = document.getElementById("question_button");
askMeButton.addEventListener("click", startGame)

async function startGame(){
  const data = await fetchData()
  console.log(data)
  const question = document.getElementById("question_text")
  question.textContent = data.results[0].question;

  let answers = []; 
  answers = data.results[0].incorrect_answers;
  answers.push(data.results[0].correct_answer);

  const optionA = document.getElementById("option_a");
  const optionB = document.getElementById("option_b");
  const optionC = document.getElementById("option_c");
  const optionD = document.getElementById("option_d");

  optionA.textContent = answers[0];
  optionB.textContent = answers[1];
  optionC.textContent = answers[2];
  optionD.textContent = answers[3];


//Take users input into text field
//Click and then type
//Use "submit"
  const form = document.querySelector(".answer_input");
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputText = document.querySelector('#answer_input').value;
      checkAnswer(inputText,answers);
  });

  // const answerButton1 = document.getElementById("answerButton1");
  // answerButton1.textContent = answers[0];
  // answerButton1.addEventListener("click", checkAnswer)

  // const answerButton2 = document.getElementById("answerButton2");
  // answerButton2.textContent = answers[1];

  // answerButton2.addEventListener("click", checkAnswer)
}

//create var correct answer?
 function checkAnswer(inputText,answers){
//Register input as variable
    const answer_box = document.getElementById("answer_output");
    if(inputText == 4) {
        answer_box.textContent = `Congratulations ${userName}, you got it right!`
    } else {
        answer_box.textContent = `Unlucky ${userName}, the correct answer is ${answers[3]}!`
    }
//Does the variable = 3 (pushed correct answer) + 1
// Grab the [Sample Answer] element 
//If yes, good message
// if no, bad message


//if statement to check the correct answer- 

//create 
  // if()
 }


async function fetchData() {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.results[0].question)
    // Handle your data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle any errors
  }
}






//Pseudocode:
//HTML UI Section
//Ask user for their username and save response as variable
//Create interactable "Ask me a question" button

//API Request Section
//Create a fetch request to grab one trivia question using API 
//Convert the response to .json format 
//Isolate question, correct answer, incorrect answers
//Insert correct answer into incorrect answer array at random point
//Update question element on HTML and print out potential answers
//User inputs their answer
//Evaluate against correct answer
//Annouce if right or wrong