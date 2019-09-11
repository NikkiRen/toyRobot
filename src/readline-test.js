const readline = require('readline');
//const CONSTANTS = require('./constants.json')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//   rl.close();
// });
let instructions = ["move", "place", "done", "orient"]

const askForInstruction = async () =>{
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What would you like to do? ', (arg) => {
    arg = arg.toLowerCase()
    console.log(typeof arg)
    //if the cmd is allowable close the readstream else ask for a new instruction
    for (cmd in instructions){
      if (arg==="move"){
        console.log(`matching argument is ${arg}`)
        rl.close()
        return arg;
      }

        console.log(`oops! ${arg} is not valid input, please say place, move, orient or done`)
        askForInstruction()
    }

    rl.close();
  });

}

//will need to worry about it being async
 console.log(askForInstruction())
 console.log("order")
