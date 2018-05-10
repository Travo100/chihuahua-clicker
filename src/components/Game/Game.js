import React, { Component } from 'react';
import cards from '../../cards.json';
import './Game.css';
import Card from '../Card';
class Game extends Component {
  state = {
    chihuahuas: cards,
    score: 0,
    randomNumber: 0
  }

  componentDidMount() {
    let random = Math.floor(Math.random() * 6) + 1;
    this.setState({
      randomNumber: random
    });
  }

  cardClickedOn = (id) => {
    if(id === this.state.randomNumber) {
      this.setState({
        score: this.state.score + 1
      });
    } 
  };

  
  render() {
    return (
      <div className="container">
          <p>Random Number: {this.state.randomNumber}</p>
          <p>Score: {this.state.score}</p>
          {this.state.chihuahuas.map(chihuahua => (
           <Card
            key={chihuahua.id} 
            id={chihuahua.id} 
            name={chihuahua.name} 
            image={chihuahua.image}
            cardClickedOn={this.cardClickedOn} />
          ))} 
      </div>
    );
  }
}

export default Game;