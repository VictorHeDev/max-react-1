import React, { useState } from 'react';

// components
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
