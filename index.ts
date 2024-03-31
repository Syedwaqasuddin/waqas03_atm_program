#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000; // $ Dolla
let answerPin = 1234;

let atmAnswer = await inquirer.prompt([
  {
    name: "myPin",
    message: "please provide pin code",
    type: "number",
  }
]);



if (atmAnswer.myPin === answerPin) {
  console.log("Dear customer your provided pin code is correct. ");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check balance", "Fast Cash"],
    }
  ]);



  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter you amount",
        type: "number",
      },
    ]);
   if(amountAns.amount <=10000){
   console.log( `your remaining balance is ${mybalance-= amountAns.amount}`);
  }
   else console.log(`Requested amount is high than your account balance Rs. ${mybalance}`);
   }
   
   
  else if (operationAns.operation === "Check balance") {
    console.log(`your remaining balance is Rs. ${mybalance}`);
    } 
  
  else if (operationAns.operation === "Fast Cash") {
    let fastAns = await inquirer.prompt([
      {
        name: "quickCash",
        message: "please select your amount option",
        type: "list",
        choices: ["500", "1000", "3000", "5000"],
      },
    ]);

    if (fastAns.quickCash === "500") {
      mybalance -= fastAns.quickCash;
      console.log(`your remaining balance is ${mybalance}`);
     
    }

      else if (fastAns.quickCash === "1000") {
      mybalance -= fastAns.quickCash;
      console.log(`your remaining balance is ${mybalance}`);

    }
      else if (fastAns.quickCash === "3000") {
      mybalance -= fastAns.quickCash;
      console.log(`your remaining balance is ${mybalance}`);
    } 
      else if (fastAns.quickCash === "5000") {
      mybalance -= fastAns.quickCash;
      console.log(`your remaining balance is ${mybalance}`);
    }
  }
} else {
  console.log(
    "Dear customer your pin code is wrong! please provide correct pin code."
  );
}
