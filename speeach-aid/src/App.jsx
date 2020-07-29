import React, { Component } from 'react';
import Image from './Image/Image';
import Audio from './Audio/Audio';

const bingSound = require("./Binggg.m4a");
const bingImage = require('./watch_bing.png');

class App extends Component {
  state = {
    soundClips: [
      {clip: bingSound, image: bingImage} // add this (clip) to the button prop
    ]
  }

  render() {
    return (
      <div className="App">
      <Image image={this.state.soundClips[0].image}/>
      <Audio clip={this.state.soundClips[0].clip} />
      </div>
    );
  }
}

export default App;
