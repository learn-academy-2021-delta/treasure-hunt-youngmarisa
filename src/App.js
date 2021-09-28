import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random()*this.state.board.length)
    let bomb = Math.floor(Math.random()*this.state.board.length)
    this.setState({treasureLocation: treasure, bombLocation: bomb})
  }

  handleGamePlay = (index) => {
    const {board, treasureLocation, bombLocation} = this.state
    if (treasureLocation === index){
      board[index] = "💎"
      this.setState({board: board})
    } else if (bombLocation === index) {
      board[index] = "💣"
      this.setState({board: board})
    } else {board[index] = "🌴"
      this.setState({board: board})
    }
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className = "gameboard">
        {this.state.board.map((value, index) => {
          return (
            <Square
              value = {value}
              index = {index}
              key = {index}
              handleGamePlay = {this.handleGamePlay}
            />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
