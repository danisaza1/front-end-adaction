
// import Cities from "./cities";
import Formulaire from "./formullaire";
// import Form from "./imput";
import ListOfVolunteers from "./list-of-volunteers";
import NewVolunteers from "./newVolunters";
import Test from "./test";
//  const newBenevole = document.querySelector('#newBenevole')

export default function Volonters (){


    return(            
     <>
     <h1>page de titre</h1>
     <button id="newBenevole">ajouter un ou plusieurs bénévoles</button>
     <NewVolunteers/>
     <div id="2buttons">
      <button>rechercher un benevole</button>
      <button>toutes les villes</button>
     </div>
      <ListOfVolunteers/>


     
        < Test/>
        <Formulaire/>
    {/* <Cities/> */}
     </>
    )
}

