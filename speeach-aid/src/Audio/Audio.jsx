import React from 'react';

function Audio(props) {
  return <audio src={props.clip} controls />;
};

export default Audio;
