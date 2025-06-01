'use client'
import React, { useState } from 'react'

export default function AddUserForm (props){
  const initialFormState = { id: null, firstname: '', lastname: '' }
  const [benevole, setBen] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setBen({ ...benevole, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!benevole.firstname || !benevole.lastname) return

        props.addBen(benevole)
        setBen(initialFormState)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={benevole.firstname}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={benevole.lastname}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  )
}