import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


export default function MyTypeWriter() {
  return (
    <Typewriter
    words={['Python Programmer', 'ReactJS Developer', 'CTF Player', 'Writer', 'AI/ML Enthusiast']}
    loop={9}
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    // onLoopDone={handleDone}
    // onType={handleType}
  />
  );
}