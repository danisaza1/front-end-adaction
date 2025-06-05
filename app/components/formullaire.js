"use client";
import { useState } from "react";

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 039f2d89608a78713d6d717b6d38d8f6f42f8d59
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
  
      const handleChange = async(event) => {
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
                      onChange={handleChange}
                      name="lastname"
                      />
      
                      <label>prenom :</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre nom"
                      value= {formData.firstname  || ""}
                      onChange={handleChange}
                      name="firstname"
                      />
                    
      
                      <label>location:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre adresse"
                      value= {formData.location  || ""}
                      onChange={handleChange}
                      name="location"
                      />
      
                      <label>email:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre adresse"
                      value= {formData.email  || ""}
                      onChange={handleChange}
                      name="email"
                      />
      
                       <label>mot de passe:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre adresse"
                      value= {formData.password  || ""}
                      onChange={handleChange}
                      name="password"
                      />
                      <button type = "submit">envoyer</button>
                  </form>
              </div>
          )
 }

<<<<<<< HEAD


 const res= await fetch("http://localhost:3001/profil");
const toutou=  await res.json();
export default function ListOfVolunteers (){
    return(
     <>
     <div id="container">
   {toutou.map((a) => (
     <div key={a.id} id='case'>
         <p>{a.firstname}</p>
         <p> {a.lastname} </p>
     </div>
    ))}
    </div>
    </>
    )
}  
=======
export default function Form() {

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
  
      const handleChange = async(event) => {
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
                      onChange={handleChange}
                      name="lastname"
                      />
      
                      <label>prenom :</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre nom"
                      value= {formData.firstname  || ""}
                      onChange={handleChange}
                      name="firstname"
                      />
                    
      
                      <label>location:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre adresse"
                      value= {formData.location  || ""}
                      onChange={handleChange}
                      name="location"
                      />
      
                      <label>email:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre adresse"
                      value= {formData.email  || ""}
                      onChange={handleChange}
                      name="email"
                      />
      
                       <label>mot de passe:</label>
                      <input 
                      type = "text"
                      placeholder= "entrez votre adresse"
                      value= {formData.password  || ""}
                      onChange={handleChange}
                      name="password"
                      />
                      <button type = "submit">envoyer</button>
                  </form>
              </div>
          )
 }

=======
>>>>>>> 039f2d89608a78713d6d717b6d38d8f6f42f8d59
                      
         
     
       



  
  
  

   
