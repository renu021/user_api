import "./UserStyle.css";
import  { useEffect, useState } from 'react';

function User() {
  const  [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="User-Section">
      <h1>Our Students</h1>
      <table className="User-Table">
        <thead>
          <tr>
            <th>ID</th>
            <th>STUDENT NAME</th>
            <th>PLACED COMPANY NAME</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}



export default User;