import React from 'react';

// styles
import classes from './UsersList.module.css';

// components
import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          let random = Math.random().toString();
          return (
            <li key={random}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
