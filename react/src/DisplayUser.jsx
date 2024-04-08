import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
    <>
      <div>Firstname: {username && username.first ? username.first : "No user selected"}</div>
      <div>Lastname: {username && username.last ? username.last : "No user selected"}</div>
      <button onClick={() => setUsername({first: '', last: ''})}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
