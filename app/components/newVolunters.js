
export default function NewVolunteers (){


    return(
     <>
     <h1>votre nom</h1>
     <form id="ajoutForm">
    <input type="text" id="element" name="element" placeholder="Nouvel élément" required />
    <button type="submit">Ajouter</button>
  </form>
  
     </>
    )
}









// const ajoutForm = document.getElementById('ajoutForm')
// ajoutForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const element = document.getElementById('element').value;
//     await fetch('/ajouter', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ element }),
//     });
//     element.value = '';
//   }); 