import React , {Component} from 'react';
import './App.css';
import Game from './components/Game';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    ties: 0,
    playerx: 0,
    playero: 0,
  };
  render() {
    const {ties, playerx, playero} = this.state;
    return (
    <div>
      <Navbar
      playerx = {playerx}
      playero = {playero}
      ties = {ties}
      />
      <Game 
      />
    </div>
    );
  }
}

export default App;
