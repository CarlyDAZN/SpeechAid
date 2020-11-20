import React from 'react';
import App from '../App';

function Audio(props) {
  return <audio src={props.clip} controls />;
};

export default Audio;


// Clips.jsx
// const [play] = useSound(props.play);
// new App.jsx
// state = {
//   clips: [
//     [
//       { image: bingImage, sound: bingSound },
//       { image: "", sound: helloSound }]
//   ]
// }
// const bingSound = require("./Clips/Binggg.m4a");
// const helloSound = require("./Clips/hello.mp3")
// const bingImage = require('./Clips/watch_bing.png');
// src={show} className="bingImage" alt="Bing Bunny"


// Old App.jsx code
// import React, { Component } from 'react';
// // import Image from './Image/Image';
// import Audio from './Audio/Audio';

// const bingSound = require("./Binggg.m4a");
// const bingImage = require('./watch_bing.png');
// // const bingClip = src={bingSound}

// class App extends Component {
//   state = {
//     soundClips: [
//       // { image: bingImage, clip: null } // add this (clip) to the button prop
//       { clip: bingSound, image: bingImage } // add this (clip) to the button prop
//     ]
//   }

//   changeClipHandler = () => {
//     console.log('I was clicked!')
//     this.setState({
//       soundClips: [
//         { clip: bingSound, image: bingImage }
//       ]
//     });
//       // bingSound.play();

//   }

//   render() {
//     return (
//       <div className="App">
//       <button onClick={this.changeClipHandler}>Hello</button>
//       {/* <Image image={this.state.soundClips[0].image} /> */}
//        <button onClick={() => this.setState({soundClips: [{ clip: bingSound, image: bingImage }]})}>
//           <Audio clip={this.state.soundClips[0].clip} />
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
