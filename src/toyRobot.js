'#use strict'


const newGame = (rows,cols) =>{
  //creates a 2d grid full of 0s

  let grid = new Array (cols)
  console.log(grid)

  for (let i=0; i<cols; i++){
    grid[i] = new Array(rows)
  }

  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      grid[i][j] = 0
    }
  }

  return grid

}

const map = (grid,x,y) =>{

}


const placeRobot = (grid, x, y, o) =>{
  const rows = grid.length
  const cols = grid[0].length
  console.log(`rows ${rows}`)
  console.log(`cols ${cols}`)

  grid[y-rows][x-rows] = o
  //grid [y][x] = o
  //takes in the location of the bot and marks it with the orientation
  return grid
}


const moveRobot = (grid) => {
//checks to see if robot can move, if it can moves it and replaces it's old spot with a 0
  const location = findRobot(grid)
  let x = location[0]
  let y = location[1]
  console.log(canMove(grid))
  if (canMove(grid)===false){
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
  //takes in the grid and changes the orientation of the bot
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
  const location = findRobot(grid)
  const x = location[1]
  const y = location[0]
  const orientation = grid[x][y]
  let canMove = true

  if (orientation === 1 && y === 0){
    canMove = false

  }

  if (orientation === 2 && x === grid.length){
    canMove = false
  }

  if (orientation === 3 && y === grid.length){
    canMove = false
  }

  if (orientation === 4 && x === 0){
    canMove = false
  }

  return canMove
}

const resolveIndex = (grid) => {



}

let grid = newGame(5,6)
console.log(grid)
grid = placeRobot(grid, 0,0,1)
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
