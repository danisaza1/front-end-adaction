'use client'
import { useEffect, useState } from 'react';
import { useAuth } from './../../context/authContext';

export default function UseWastesData() {
  const [data, setData] = useState([]);
  const { user } = useAuth(); // récupère le token depuis le contexte

  useEffect(() => {
    async function fetchData() {
      if (!user?.token) return;

      try {
        const response = await fetch('http://localhost:3001/dashboard', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          }
        });

        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (err) {
        console.error('Erreur dans fetchData:', err);
      }
    }

    fetchData();
  }, [user]);

  return data;
}





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