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