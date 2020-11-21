import React from 'react';
import useSound from 'use-sound';

function Clip(props) {
  const [play] = useSound(props.sound);
  
  return (
    <div>
      <button onClick={play}>
        <img src={props.image} className="bingImage" alt="Bing Bunny" />
      </button>
    </div>
  );
};

export default Clip;
