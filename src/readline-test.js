const readline = require('readline');
const CONSTANTS = require('./constants.js')
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
    let instructions = CONSTANTS.INSTRUCTIONS
    //if the cmd is allowable close the readstream else ask for a new instruction
    for (cmd in instructions){
      if (arg===cmd){
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

const callasync = async () =>{
  console.log("start")
  let arg = await askForInstruction()
 
  console.log(arg)
}
  
callasync()