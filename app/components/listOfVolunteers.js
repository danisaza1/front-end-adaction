import { Pen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
const res= await fetch("http://localhost:3001/profil");
const toutou=  await res.json();
export default function ListOfVolunteers (){
  return(
    <>
        <div id="container">
            {toutou.map((a) => (
                <div key={a.id} id='case'>
                    <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-160 justify-between ">
                         <div className="flex flex-row gap-4">
                             <h3>{a.firstname} {a.lastname}</h3> <p className="text-gray-400"> {a.location}</p>
                        </div>
                        <div className='flex flex-row'>
                           <button className="p-2 g-2 min-w-0 bg-blue-100 hover:bg-blue-200 rounded-md flex items-center justify-center transition-colors duration-200"> {/* Styled button */}
                      <Pen className="text-blue-500 size-4" />
                    </button>
                    <button className="p-2 min-w-0 bg-rose-100 hover:bg-rose-200 rounded-md flex items-center justify-center transition-colors duration-200"> {/* Styled button */}
                      <Trash2 className="text-red-400 size-4" />
                    </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}






