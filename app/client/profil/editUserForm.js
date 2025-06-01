'use client'
import React, { useState } from 'react'

export default function EditUserForm (props){
  const [benevole, setBen] = useState(props.currentBen)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setBen({ ...benevole, [name]: value })
  }


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateBen(benevole.id, benevole)
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
      <button>Update user</button>
    </form>
  )
}