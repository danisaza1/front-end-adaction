import React from "react";
import App from './app';
import FormProfil from "./formProfil";
import FetchVolunteers from "./fetchVolunteers";
import AddUserForm from "./addUserForm";


export default async function Profile() {
  return (
    <div>
      {/* <App /> */}
      <FormProfil />
      <FetchVolunteers />
      {/* <AddUserForm /> */}
    </div>
  );
}