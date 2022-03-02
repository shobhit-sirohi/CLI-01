const chalk = require("chalk");
var readlineSync = require("readline-sync");
var figlet = require("figlet");
const gradient = require("gradient-string");

console.log(
  gradient.pastel(
    figlet.textSync("WELCOME !", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  )
);
var userName = readlineSync.question("What is your name? ");
let userNameUpper = userName.toUpperCase();
console.log(
  chalk.blue(
    "Welcome " +
      gradient.morning(userNameUpper) +
      " to DO YOU KNOW SHOBHIT"
  )
);

let score = 0;
let questions = [
  (questionOne = {
    question: "Where do I Live? ",
    answer: "MEERUT",
  }),
  (questionTwo = {
    question: "What is my Surname? ",
    answer: "SIROHI",
  }),
  (questionThree = {
    question: "What is my Favourite City? ",
    answer: "MUMBAI",
  }),
  (questionFour = {
    question: chalk
      .hex("#ff6700")
      .bold("What is my Favourite Color? ( ͠• ͜ʖ ͡•) "),
    answer: "ORANGE",
  }),
];

for (let i = 0; i < questions.length; i++) {
  let userAnswer = readlineSync.question(
    questions[i].question
  );
  let userAnswerUpper = userAnswer.toUpperCase();
  if (userAnswerUpper === questions[i].answer) {
    console.log(
      chalk.hex("#26eb17")("You are Right! ( ͡❛ ͜ʖ ͡❛)")
    );
    score++;
    console.log("score: " + score);
  } else {
    console.log(
      chalk.hex("#ff0000")("You are Wrong! (`▭´)ﾉ")
    );
    console.log("score: " + score);
  }
  console.log(
    gradient.pastel("------------------------------------")
  );
}
console.log(chalk.magentaBright("FINAL SCORE: " + score));
