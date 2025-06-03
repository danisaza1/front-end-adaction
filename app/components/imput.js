"use client";
import { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({})

    const handleChange = async(event) => {
const {type, name, value} =event.target
setFormData(prev =>{
    return {
        ...prev,
        [name]: value
    }
})
    }

  
  
  
  
    const handleSubmit = (event) => {
    event.preventDefault()
    console.log("rere")
    console.log("formulaire",formData)
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