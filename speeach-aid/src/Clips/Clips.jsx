import React from 'react';
import useSound from 'use-sound';

const bingSound = require("./Binggg.m4a");
const helloSound = require("./hello.mp3")
const bingImage = require('./watch_bing.png');


function Clips() {
  const clips = [{image: bingImage, sound: useSound(bingSound)}, {image: "", sound: useSound(helloSound)}]
  const [play] = clips[0].sound;
  const show = clips[0].image
  
  return (
    <div>
      <button onClick={play}>
        <img src={show} className="bingImage" alt="Bing Bunny" />
      </button>
    </div>
  );
};

export default Clips;
