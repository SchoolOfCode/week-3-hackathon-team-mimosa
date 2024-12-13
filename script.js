console.log("hello")

const userName = prompt("What is your name?");
const answeredName = document.getElementById("name");
answeredName.textContent = userName;

const askMeButton = document.getElementById("askMeButton");
askMeButton.addEventListener("click", startGame)



async function startGame(){
  const data = await fetchData()
  const question = document.getElementById("question")
  question.textContent = data.results[0].question;

  let answers = []; 
  answers = data.results[0].incorrect_answers;
  answers.push(data.results[0].correct_answer);

  const answerButton1 = document.getElementById("answerButton1");
  answerButton1.textContent = answers[0];
  answerButton1.addEventListener("click", checkAnswer)

  const answerButton2 = document.getElementById("answerButton2");
  answerButton2.textContent = answers[1];

  answerButton2.addEventListener("click", checkAnswer)
}

//create var correct answer?
 function checkAnswer(){
    
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