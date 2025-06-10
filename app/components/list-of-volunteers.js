import { Button } from "@mui/material";
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
                    <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-120 justify-between ">
                         <div className="flex flex-row gap-4">
                             <h3>{a.firstname} {a.lastname}</h3> <p className="text-gray-400"> {a.location}</p>
                        </div>
                        <div>
                            <Button className="p-6">
                                <Pen  className="text-blue-500 bg-blue-200 rounded-md  "/>
                            </Button>
                            <Button>
                                <Trash2 className="text-red-400 bg-rose-200 rounded-md" />
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}   
