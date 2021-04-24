import React from 'react';
import Button from '../Button';
import aws from '../../constants';
import styles from './CardImage.css';

const CardImage = ({
  image,
  arrow,
  button,
  click,
}) => {
  return (
    <>
      <div className={styles.imageBig}>
        <img src={`${aws.root}Full/${image}.png`} alt={image} />
      </div>

      <Button
          color={arrow ? 'primary' : 'secondary'}
          arrow={arrow}
          text={button}
          click={click}
          posBtn="buttonPosition"
        />
    </>
  )
}

export default CardImage;
