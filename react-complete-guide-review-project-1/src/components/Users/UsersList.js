import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const deleteUserHandler = (event) => {
    const selectedUserId = event.target.id;
    props.onDelete(selectedUserId);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users && props.users.map((user) => (
          <li key={user.id} id={user.id} onClick={deleteUserHandler}>
            {user.name}, ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
