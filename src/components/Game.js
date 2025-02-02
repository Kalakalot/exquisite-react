import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    // game state stores current line (pushed up from player submission form), submitted lines get added to final poem array, and display poem controls whether or not finished poem is visible

    this.state = {
      currentLine: '',
      finalPoem: [], 
      displayPoem: false, 
    } }

    // the newly submitted line becomes the current line and gets added to the final poem array
  addLine = (line) => {
    const {finalPoem} = this.state;
    finalPoem.push(line);
    this.setState({
      currentLine: line,
      finalPoem,
    })
  }

  revealPoem = () => {
    this.setState({
      displayPoem: true
    })
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

if (this.state.displayPoem === true) {
  return (
      <FinalPoem finalPoem={this.state.finalPoem} displayPoem={this.state.displayPoem} revealPoemCallback={this.revealPoem} />
  )

} else {
    return (

      <div className="Game">
      <h2>Game</h2>
  
      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>
  
      <p>Please follow the following format for your poetry submission:</p>
  
      <p className="Game__format-example">
        { exampleFormat }
      </p>
        
        <div>
        <RecentSubmission recentSubmission={this.state.currentLine}/>

        <PlayerSubmissionForm addLine={(line) => {this.addLine(line)}}/>

        <FinalPoem finalPoem={this.state.finalPoem} displayPoem={this.state.displayPoem} revealPoemCallback={this.revealPoem} />
        </div>
        </div>

    );
  };
};
};

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];


export default Game;
