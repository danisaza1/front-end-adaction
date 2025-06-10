"use client";
import { useState } from "react";

export default function Formulaire() {
    const [formData, setFormData] = useState({firstname:'',lastname:'',location:'',email:'',password:''})
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch("http://localhost:3001/formulaire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const json = await res.json();
        console.log("Réponse du serveur :", json);
      };
  
      const handleChangeName = async(event) => {
          const {type, name, value} =event.target
          setFormData(prev =>{
          return {
          ...prev,
          [name]: value
          }})}

          const handleChangeFirstname = async(event) => {
            const {type, name, value} =event.target
            setFormData(prev =>{
            return {
            ...prev,
            [name]: value
          }})}

          const handleChangeLocation = async(event) => {
            const {type, name, value} =event.target
            setFormData(prev =>{
            return {
            ...prev,
            [name]: value
            }})}

            const handleChangeEmail = async(event) => {
                const {type, name, value} =event.target
                setFormData(prev =>{
                return {
                ...prev,
                [name]: value
                }})}

                const handleChangePassword = async(event) => {
                    const {type, name, value} =event.target
                    setFormData(prev =>{
                    return {
                    ...prev,
                    [name]: value
                    }})}


          return (
              <div className="Style.form">
                  <form onSubmit = {handleSubmit}>
                      <label>nom :</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre nom"
                      value= {formData.lastname  || ""}
                      onChange={handleChangeName}
                      name="lastname"
                      />
      
                      <label>prenom :</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre prenom"
                      value= {formData.firstname  || ""}
                      onChange={handleChangeFirstname}
                      name="firstname"
                      />
                    
      
                      <label>location:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre adresse"
                      value= {formData.location  || ""}
                      onChange={handleChangeLocation}
                      name="location"
                      />
      
                      <label>email:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre email"
                      value= {formData.email  || ""}
                      onChange={handleChangeEmail}
                      name="email"
                      />
      
                       <label>mot de passe:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez un mot de passe"
                      value= {formData.password  || ""}
                      onChange={handleChangePassword}
                      name="password"
                      />
                      <button type = "submit">envoyer</button>
                  </form>
              </div>
          )
}

