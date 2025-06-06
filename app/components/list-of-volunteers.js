// import { Button } from "@mui/material";

// import { Pen } from 'lucide-react';
// import { Trash2 } from 'lucide-react';
// import { CardContent } from "../../components/card";




const res= await fetch("http://localhost:3001/profil");
const toutou=  await res.json();

export default function ListOfVolunteers (){
  return(
    <>
      <div id="container">
        <h1>list des volontaires</h1>
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

 {/* <CardContent className="flex flex-col items-start">

            <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-120 justify-between ">
                <div className="flex flex-row gap-4">
                    <h3>Monica Geller</h3> <p className="text-gray-400"> Paris</p>
                </div>
                <div className="flex ">
                    <Button className="p-6 items-center">
                         <Pen  className="text-blue-500 bg-blue-200 rounded-md  "/>
                    </Button>
                    <Button>
                        <Trash2 className="text-red-400 bg-rose-200 rounded-md" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-120 justify-between ">
                <div className="flex flex-row gap-4">
                    <h3>Phoebe Buffay </h3> <p className="text-gray-400"> Nantes</p>
                </div>
                <div className="flex ">
                    <Button className="p-6 items-center">
                         <Pen  className="text-blue-500 bg-blue-200 rounded-md  "/>
                    </Button>
                    <Button>
                        <Trash2 className="text-red-400 bg-rose-200 rounded-md" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-120 justify-between ">
                <div className="flex flex-row gap-4">
                    <h3>Rachel Green</h3> <p className="text-gray-400"> Paris</p>
                </div>
                <div className="flex items-center">
                    <Button className="p-6">
                         <Pen  className="text-blue-500 bg-blue-200 rounded-md  "/>
                    </Button>
                    <Button>
                        <Trash2 className="text-red-400 bg-rose-200 rounded-md" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-120 justify-between ">
                <div className="flex flex-row gap-4">
                    <h3>Joey Tribbiani </h3> <p className="text-gray-400"> Nantes</p>
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


            <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-120 justify-between ">
                <div className="flex flex-row gap-4">
                    <h3>Chandler Bing  </h3> <p className="text-gray-400"> Lyon</p>
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


            <div className="flex flex-row gap-32 border rounded-md p-2 m-2 w-120 justify-between ">
                <div className="flex flex-row gap-4">
                    <h3>Ross Geller </h3> <p className="text-gray-400"> Bordeaux</p>
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



            
          </CardContent> */}




