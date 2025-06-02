'use client';
import React, { useState } from 'react';
import UserTable from '../tables/userTables';
import AddUserForm from './addUserForm';
import EditUserForm from './editUserForm';

export default function App(){

// const volunteers = require('./fetchVolunteers')  
console.log('😁😁', volunteers)
  const volunteers = [
        {id: 1, name: 'Petronela', username: 'delyoara'},
        {id: 2, name: 'Romain', username: 'neo3589'},
        {id: 3, name: 'Renaud', username: 'rerefenec'},
        {id: 4, name: 'Daniela', username: 'danie'},
    ]
  const [editing, setEditing] = useState(false)
  
  const initialFormState = { id: null, firstname: '', lastname: '' }
  const [currentBen, setCurrentBen] = useState(initialFormState)
  // const [users, setUsers] = useState(usersData)
  const [benevoles, setBenevoles] = useState(volunteers)


  const addBen = (benevole) => {
    benevole.id = benevoles.length + 1
    setBenevoles([...benevoles, benevole])
  }

  const editRow = (benevole) => {
  setEditing(true)
  setCurrentBen({ id: benevole.id, firstname: benevole.firstname, lastname: benevole.lastname })
  }

  const deleteBen = (id) => {
    setBenevoles(benevoles.filter((benevole) => benevole.id !== id))
  }

  const updateBen = (id, updatedBen) => {
  setEditing(false)
  setBenevoles(benevoles.map((benevole) => (benevole.id === id ? updatedBen : benevole)))
  } 

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <UserTable benevoles={benevoles} editRow={editRow} deleteBen={deleteBen} />
        </div>
        <div className="flex-large">
            <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        initialFormState
        setEditing={setEditing}
        currentBen={currentBen}
        updateBen={updateBen}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addBen={addBen} />
    </div>
  )}
</div>
          <h2>View users</h2>
          {/* <UserTable benevoles={benevoles} /> */}
        </div>
      </div>
    </div>
  )
}