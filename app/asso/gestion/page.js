"use client";

import { Button } from "@mui/material";
import { UserPlus } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Pen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/card";
import { Input } from "../../components/input";
import SimpleSelect from "../../components/simpleselect";
import { useState, useEffect } from "react";
import NavBar from "../../components/navbar";








export default function profilPage() {

      const [cities, setCities] = useState([]); //Ici, nous faisons appel à un tableau que nous avons prédéfini.
      const [city, setCity] = useState("");


  // Charger les villes depuis l'API
  useEffect(() => {
    async function fetchCities() {
      try {
        const res = await fetch("http://localhost:3001/cities");
        const data = await res.json();
        setCities(data.cities); // <-- bien récupérer la clé 'cities'
      } catch (err) {
        console.error("Erreur lors du chargement des villes :", err);
      }
    }

    fetchCities();
  }, []);


return (
    <>
          <NavBar role="asso"/>

 <form className=" flex justify-center p-4">
 


<CardContent className="  flex justify-center " >
        <Card>
          <CardHeader>
            <div className="bg-emerald-600 border rounded-lg flex place-content-center p-2 ">
               <Button  type="submit" className="flex gap-2" >
                 <UserPlus className="text-white"/> <p className="text-white normal-case">Ajouter un.e bénévole</p>
              </Button>
            </div>
           <div className="flex flex-row justify-between w-full items-center">
    <div>
        <Input placeholder="Rechercher un.e bénévole..." type="text"></Input>
    </div>
    <div className="flex items-center"> 
        <MapPin />
        <SimpleSelect options={cities} value={city} onChange={setCity} />
    </div>
</div>
          </CardHeader>
          <CardContent className="flex flex-col items-start">

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



            
          </CardContent>
         
         
         </Card>
         </CardContent>

</form>
</>
);
}