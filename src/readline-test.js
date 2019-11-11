const readline = require('readline');
const CONSTANTS = require('./constants.js')

const instructions = CONSTANTS.INSTRUCTIONS
const orientations = CONSTANTS.ORIENTATIONS
// const CONSTANTS = require('./constants.json')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

const askForInstruction = async () =>{
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('What would you like to do? ', (arg) => {
  return new Promise((resolve,reject)=>{
    arg = arg.toLowerCase()
    //if the argument is not allowable ask for a new one
      if (!instructions.includes(arg)){
        reject(console.log(`oops! ${arg} is not valid input, please say place, move, orient or done`))
        .catch((err)=>{
          console.log(err)
        })
        askForInstruction()
      }
      else{
        resolve(arg)
      }
    rl.close();

  })

  });

}

//will need to worry about it being async

// const callasync = async () =>{
//   console.log("start")
//   let arg = await askForInstruction()

//   console.log(arg)
// }
const callAsync = async () =>{
  let ins = await askForInstruction()
  console.log(ins)
    }


callAsync()
