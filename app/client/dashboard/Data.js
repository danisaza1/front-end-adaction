import { useEffect, useState } from 'react';

export default function UseWastesData () {
  const [data, setData] = useState([]);

    async function fetchData() {
      const response = await fetch('http://localhost:3001/dashboard');
      const json = await response.json();
    console.log(json);
      setData(json);
    }
 useEffect(() => {
    fetchData();
    
  }, []);
return data;
// return (
//   <div>
//     {data.map(item => (
//         <div className="card" key={item.id}>
//         {/* <div>{item.id}</div> */}
//         <p>{item.type} <br />Quntité : {item.quantity}</p>
//       </div>
//     ))}
//   </div>
// );
}
