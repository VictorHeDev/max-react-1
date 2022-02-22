import React from 'react';

// styles
import classes from './ErrorModal.module.css';

// components
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.action}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
