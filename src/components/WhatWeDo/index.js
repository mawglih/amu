import React from 'react';
import Text from '../../constants';
import styles from './whatwedo.css';

const WhatWeDo = ({
  text
}) => {
  const displayText = num => {
    switch (num) {
      case 1:
        return <h3>{Text.About3}</h3>
      default:
        return <h3>Hi</h3>
    }
  }
  return (
    <div className={styles.container}>
      <h1>What we can do for you</h1>
      {displayText(text)}
    </div>
  );
}

export default WhatWeDo;
