import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className = "gameboard">
        {this.state.board.map(value => {
          return <Square value = {value} />
        })}
        </div>
      </>
    )
  }
}
export default App
