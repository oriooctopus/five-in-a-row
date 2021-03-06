import React from 'react';

const ScoresTable = (props) => (
  <div className="gamescore">
    <br></br>
    <h4>Winner Board</h4>
    {props.scores.map(score => 
      <li>{score.player}   ||  Wins: {score.score}</li>
    )}
  </div>
)

export default ScoresTable;
