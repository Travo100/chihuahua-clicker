import React from 'react';

const Scoreboard = props => (
    <header>
        <h1>Scoreboard</h1>
        <p>Random Number: {props.randomNumber}</p>
        <p>Score: {props.score}</p>
        <p>Tally: {props.tally}</p>
    </header>
); 

export default Scoreboard;