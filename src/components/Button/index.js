import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import styles from './button.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const StyledButton = ({
  text,
  arrow,
  color,
  click,
  posBtn,
}) => {
  const classes = useStyles();

  return (
    <div className={styles[posBtn]}>
      {!!text &&
      (<Button
        variant="contained"
        color={color}
        className={classes.button}
        startIcon={!arrow && <ArrowBackIosOutlinedIcon/>}
        endIcon={arrow && <ArrowForwardIosOutlinedIcon/>}
        onClick={click}
      >
        {text}
      </Button>)}
    </div>
  );
}

export default StyledButton;
