import React, { useState, useEffect } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
    const [searchBox, setSearchBox] = useState("")

  function fetchData() {
    return new Promise((resolve, reject) => {
      try {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed API response");
            }
            return response.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error); 
          });
      } catch (error) {
        reject(error); 
      }
    });
  }

  useEffect(() => {
    fetchData()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);


const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchBox.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Hello React.</h1>
        <input
        type="text"
        placeholder="Search user by name"
        value={searchBox}
        onChange={(e) => setSearchBox(e.target.value)}
        style={{
          padding: '8px',
          marginBottom: '16px',
          width: '100%',
          maxWidth: '300px'
        }}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}