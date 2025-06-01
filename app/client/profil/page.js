import React from "react";
import ReactDom from 'react-dom';
import UserTable from "../tables/userTables";
import App from './app';
import AddUserForm from "./addUserForm";


export default async function Profile() {
  // const res = await fetch('http://localhost:3001/profil');
  // const volunteers = await res.json();
  return (
    <div>
      <App />
      {/* <UserTable /> */}
      {/* <h1>Affichage des Volontaires</h1> */}
      {/* <pre>{JSON.stringify(volunteers, null, 2)}</pre> */}
    </div>
  );
}