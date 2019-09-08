'#use strict'


const newGame = (size) =>{
  //creates a 2d grid full of 0s

  let grid = new Array (size)

  for (let i=0; i<size; i++){
    grid[i] = new Array(5)
  }

  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      grid[i][j] = 0
    }
  }

  return grid

}


const placeRobot = (grid, x, y, o) =>{

  grid [y][x] = o
  //takes in the location of the bot and marks it with the orientation
  return grid;
}


const moveRobot = (grid) => {
//checks to see if robot can move, if it can moves it and replaces it's old spot with a 0
  const location = findRobot(grid)
  let x = location[0]
  let y = location[1]
  if (canMove(grid)==false){
    console.log('If I Move I\'ll fall off the table\!')
  }
  else {
    let orientation = grid[x][y]
      if(orientation === 1){
        grid[x][y-1] = orientation
      }
      if(orientation === 2){
        grid[x+1][y] = orientation
      }
      if(orientation === 3){
        grid[x][y+1] = orientation
      }
      if(orientation === 4){
        grid[x-1][y] = orientation
      }

    grid[x][y]=0
  }
  return grid
}


const changeOrientation = (grid, o) => {
  let location = findRobot(grid)
  grid[location[0]][location[1]] = o
  //this is replacing my entire array here with just the number
  return grid
  //takes in the grid and changes the orientation
}

const findRobot = (grid) => {
  //takes in the grid and reports the location of the bot
  //returns an array of the location
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] != 0){
        return [i,j]
      }
    }
  }


}

const canMove = (grid) => {
  //checks the location of the bot and returns a boolean determining if the bot can move based on its current orientation
  let location = findRobot(grid)
  let x = location[1]
  let y = location[0]
  let orientation = grid[x][y]
  let canMove = true

  if (orientation === 1 && y === 0){
    canMove = false

  }

  if (orientation === 2 && x === 4){
    canMove = false
  }

  if (orientation === 3 && y === 4){
    canMove = false
  }

  if (orientation ===4 && x === 0){
    canMove = false
  }

  return canMove
}

let grid = newGame(5)
grid = placeRobot(grid, 1,2,1)
grid = changeOrientation(grid, 2)
console.log(`heres my grid before moving`)
console.log(grid)
grid = moveRobot(grid)

console.log(`I moved, heres my grid`)
console.log(grid)
const playGame = (size)=>{
  let grid = newGame(size)

}



//so you have one grid per robot, you must initiate a new game
