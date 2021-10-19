import React, { useState } from 'react';
import styles from './clock.module.css';

function Clock() {
  let timeToDisplay;
  let currTime = new Date();
  let hours = currTime.getHours();
  let minutes = currTime.getMinutes();

  if (minutes >= 10) timeToDisplay = `${hours}:${minutes}`;
  else timeToDisplay = `${hours}:0${minutes}`;

  if (hours < 10) timeToDisplay = '0' + timeToDisplay;

  return <p className={styles.clock}>{timeToDisplay}</p>;
}

export default Clock;
