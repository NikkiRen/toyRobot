'#use strict'

const toyRobot = require('./src/toyRobot.js')


describe('toyRobot tests', ()=> {
    describe('new Game tests', ()=>{
        it('should return a 2d array when passed two paramaters')
        it('should throw an error when passed anything other than two integers')
    })
    describe('place robot tests', ()=>{
        it('should successfully place a robot when the co-ordinates are within bounds')
        it('should throw an error when co-ordinates are out of bounds')
    })
    describe('move robot tests', ()=>{
        it('should move the robot to a new location when the robot will not go out of bounds')
        it('should throw an error if the move is illegal')
    })
    describe('find robot tests', ()=>{
        it('should return the location of the robot')
        it('should throw an error if there is no robot')
    })
    describe('ask for instructions tests', ()=>{
        it('should not resolve if given incorrect input')
        it('should return the instruction if it is a valid inital instruction')
        it('should return the instruction if it is a orientation')
        it('should return the instruction if it is valid co-ordinates')
    })
    describe('change orientation tests', ()=>{
        it('should change the orientation when passed a valid orientation')
    })
    describe('resolve index tests', ()=>{
        it('should map the "real" index to the desired index')
    })
    describe('play game tests', ()=>{
        it('should continue untill passed done')
    })
})

