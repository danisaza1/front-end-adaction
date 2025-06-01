
'use client'
import React, { useState } from 'react';
import UserTable from '../tables/userTables';
import AddUserForm from './addUserForm';
import EditUserForm from './editUserForm';

export default function App(){
  const usersData = [
        {id: 1, name: 'Petronela', username: 'delyoara'},
        {id: 2, name: 'Romain', username: 'neo3589'},
        {id: 3, name: 'Renaud', username: 'rerefenec'},
        {id: 4, name: 'Daniela', username: 'danie'},
    ]
  const [editing, setEditing] = useState(false)
  
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const editRow = (user) => {
  setEditing(true)
  setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
  setEditing(false)
  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  } 

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        <div className="flex-large">
            <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        initialFormState
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
          <h2>View users</h2>
          {/* <UserTable users={users} /> */}
        </div>
      </div>
    </div>
  )
}