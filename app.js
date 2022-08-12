// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


const submit = document.getElementById('submit');
const questionContainer = document.getElementById('question-container');
const fortuneContainer = document.getElementById('fortune');
const result = document.getElementById('result');
const questionInput = document.getElementById('question-input');
const answers = [
    'It is certain',
    'Without a doubt',
    'You may rely on it',
    'Yes definitely',
    'It is decidedly so',
    'As I see it, yes',
    'Most likely',
    'Yes',
    'Outlook good',
    'Signs point to yes',
    'Neutral Answers',
    'Reply hazy try again',
    'Better not tell you now',
    'Ask again later',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'Outlook not so good',
    'My sources say no',
    'Very doubtful',
    'My reply is no'
];


submit.addEventListener('click', handleSubmit);
questionInput.addEventListener('keypress', (event) => {
    console.log(event.key);
    if (event.key === 'Enter') {
        handleSubmit();
    }
});


function handleSubmit() {
    questionContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    const randNum = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randNum];
    console.log(randomAnswer);
    result.textContent = randomAnswer;
}



