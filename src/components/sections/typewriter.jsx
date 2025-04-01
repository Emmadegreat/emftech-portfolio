import { Cursor, useTypewriter } from 'react-simple-typewriter';

import React from 'react';

const TypewriterComponent = () => {
  const { text } = useTypewriter({
    words: ['I am', 'Emmanuel Mkpurunchi', 'Web Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <h1 style={{ margin: '50px' }}>
      Hi,
      <span style={{ fontWeight: 'bold', color: 'green' }}>{text}</span>
      <span style={{ color: 'red' }}>
        <Cursor cursorStyle='/' />
      </span>
    </h1>
  );
};

export default TypewriterComponent;
