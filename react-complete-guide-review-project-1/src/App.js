import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";

const DUMMYUSERS = [
  {
    name: "Default User1",
    age: "45",
  },
  {
    name: "Default User2",
    age: "80",
  },
];

function App() {
  const [users, setUsers] = useState(DUMMYUSERS);
  console.log(users);

  const addUserObject = (user) => {
    setUsers((prev) => {
      return [user, ...prev];
    });
  };

  return (
    <div>
      <AddUser addUserObject={addUserObject} />
    </div>
  );
}

export default App;
