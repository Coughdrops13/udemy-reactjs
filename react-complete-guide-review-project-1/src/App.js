import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMYUSERS = [
  // {
  //   id: 11111,
  //   name: "Default User1",
  //   age: "45",
  // },
  // {
  //   id: 2,
  //   name: "Default User2",
  //   age: "80",
  // },
];

function App() {

  const [usersList, setUsersList] = useState(DUMMYUSERS);
  console.log(usersList);

  const addUserObject = (user) => {
    setUsersList((prev) => {
      return [user, ...prev];
    });
  };

  const deleteUserObject = (userId) => {
    const newUsersArray = usersList.filter(user => user.id.toString() !== userId);
    setUsersList(newUsersArray);
  }

  return (
    <div>
      <AddUser addUserObject={addUserObject} />
      <UsersList users={usersList} onDelete={deleteUserObject} />
    </div>
  );
}

export default App;
