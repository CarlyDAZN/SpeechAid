import React from 'react';
import useSound from 'use-sound';
import Clip from './Clip';

const bingSound = require("./Binggg.m4a");
const helloSound = require("./hello.mp3")
const bingImage = require('./watch_bing.png');


function Clips() {
  const clips = [{image: bingImage, sound: bingSound}, {image: "", sound: helloSound}]
  
  return (
    <div>
      {clips.map(clip => <Clip image={clip.image} sound={clip.sound}/>)}
    </div>
  );
};

export default Clips;
