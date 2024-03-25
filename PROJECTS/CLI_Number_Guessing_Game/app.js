import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! Its correct.");
}
else {
    console.log("You guessed the wrong number");
}
