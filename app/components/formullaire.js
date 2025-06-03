"use client";
import { useState } from "react";

export default function Formulaire() {

    const [formData, setFormData] = useState({})

    const handleChange = async(event) => {

        const handleSubmit = async (e) => {
            e.preventDefault();
        
            const data = {
              firstname,
              lastname
              
            };
        
            const res = await fetch("http://localhost:3001/profil", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
        console.log("dede")
            const json = await res.json();
            console.log("Réponse du serveur :", json);
          };
}

  
  
  
  
    const handleSubmit = (event) => {
    event.preventDefault()
    console.log("rere")
    console.log("formulaire",formData)
    console.log(data)
   }
   
    return (
        <div className="Style.form">
            <form onSubmit = {handleSubmit}>
                <label>nom :</label>
                <input 
                type = "text"
                placeholder= "entrez votre nom"
                value= {formData.nom  || ""}
                onChange={handleChange}
                name="nom"
                />

                <label>prenom :</label>
                <input 
                type = "text"
                placeholder= "entrez votre nom"
                value= {formData.prenom  || ""}
                onChange={handleChange}
                name="prenom"
                />
                <button type = "submit">envoyer</button>
            </form>
        </div>
    )
}