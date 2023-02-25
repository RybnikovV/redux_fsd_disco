import React from 'react'
import classes from './test.module.scss';

export default function Test() {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      {counter}
      <button
        onClick={() => setCounter(counter + 1)}
        className={classes.button_green}
        >
        increment
      </button>
    </>
  )
}
