import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import 'tachyons';
import { HornyBuns } from './HornyBuns';

class App extends Component {
constructor() {
  super()
  this.state = {
    HornyBuns: HornyBuns,
    SearchBox: ''
  }
}

onSearchBox = (event) => {
    this.setState({ SearchBox: event.target.value })
} 
  render() {
    const filterHornyBuns =
    this.state.HornyBuns.filter(buns => {
      return buns.name.toLowerCase().includes(this.state.SearchBox.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1>Horny Bunnies</h1>
        <SearchBox onSearchBox={this.onSearchBox}/>
        <Scroll>
          <CardList HornyBuns={filterHornyBuns}/>
        </Scroll>
      </div>

    );
  }
}

export default App;
