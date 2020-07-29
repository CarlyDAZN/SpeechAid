import React, { Component } from 'react';
import Image from './Image/Image';
import Audio from './Audio/Audio';

const bing = require("./Binggg.m4a");

class App extends Component {
  state = {
    soundClips: [
      {clip: bing} // add this (clip) to the button prop
    ]
  }

  render() {
    return (
      <div className="App">
      <Image />
      <Audio clip={this.state.soundClips[0].clip} />
      </div>
    );
  }
}

export default App;
