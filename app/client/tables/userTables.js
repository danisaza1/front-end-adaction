import React from 'react'

export default function UserTable (props){
 return (
 <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
        <tbody>
      {props.benevoles.length > 0 ? (
        props.benevoles.map((benevole) => (
          <tr key={benevole.id}>
            <td>{benevole.firstname}</td>
            <td>{benevole.lastname}</td>
            <td>
              <button
                onClick={() => props.deleteBen(benevole.id)}
                className="button muted-button">Delete</button>
                <button
                onClick={() => {props.editRow(benevole)}}
                className="button muted-button">Edit</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)
}