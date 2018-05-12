import React, { Component } from 'react';
import cards from '../../cards.json';
import './Game.css';
import Card from '../Card';
import Scoreboard from '../Scoreboard';
import Footer from '../Footer';
class Game extends Component {
  state = {
    chihuahuas: cards,
    score: 0,
    randomNumber: 0,
    tally: 0
  }

  componentDidMount() {
    let random = Math.floor(Math.random() * 6) + 1;
    this.setState({
      randomNumber: random
    });
  }

  cardClickedOn = (id) => {
    if(id === this.state.randomNumber) {
      let random = Math.floor(Math.random() * 6) + 1;
      this.setState({
        score: this.state.score + 1,
        randomNumber: random
      });
    } else {
      this.setState({
        tally: this.state.tally + 1
      });
    }
  };

  
  render() {
    return (
      <div className="container">
          <Scoreboard 
            randomNumber={this.state.randomNumber}
            score = {this.state.score}
            tally = {this.state.tally}
          />
          {this.state.chihuahuas.map(chihuahua => (
           <Card
            key={chihuahua.id} 
            id={chihuahua.id} 
            name={chihuahua.name} 
            image={chihuahua.image}
            cardClickedOn={this.cardClickedOn} />
          ))}
          <Footer />

      </div>
    );
  }
}

export default Game;