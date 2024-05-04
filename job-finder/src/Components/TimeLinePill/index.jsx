import React from 'react'
import style from './index.module.css';

function TimeLinePill() {
    let x = Math.floor((Math.random() * 15) + 2);
  return (
    <div className={`${style.parentContainer}`}>⏳ Posted {x} days ago </div>
    
  )
}

export default TimeLinePill