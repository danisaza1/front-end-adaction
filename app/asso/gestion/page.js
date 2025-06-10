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
import ListOfVolunteers from "app/components/list-of-volunteers";
import Formulaire from "app/components/formulaire";

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

 <div className=" flex justify-center p-4">
 


<CardContent className="  flex justify-center " >
        <Card>
          <CardHeader>
            <div className="bg-emerald-600 border rounded-lg flex place-content-center p-2 ">
               <Button  type="submit" className="flex gap-2" >
                 <UserPlus className="text-white"/> <p className="text-white normal-case">Ajouter un.e bénévole</p>
              </Button>
              <Formulaire/>
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
         <ListOfVolunteers/>
            
          </CardContent>
         
         </Card>
         </CardContent>

</div>
</>
);
}