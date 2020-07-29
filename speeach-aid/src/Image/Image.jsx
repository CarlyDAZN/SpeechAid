import React from 'react';

function Image(props) {
  return (
          <img src={props.image} className="bingImage" alt="Bing Bunny" />
        );
}

export default Image;