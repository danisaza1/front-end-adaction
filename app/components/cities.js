const res= await fetch("http://localhost:3001/cities");
const city=  await res.json();
export default function Cities (){


    return(
     <>
     
     <div id="container">
   {city.map((a) => (
     <div key={a.id} >
      
         <strong>{a.city_name}</strong>
      
      
    
     </div>
 )
)
}
</div>
     </>
    )
}