"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/card";
import { Button } from "../../components/button";
import { Gift } from "lucide-react";
import DonationCard from "../../components/DonationCard";

import { useState } from 'react';

export default function Dons() {
const [asso_name, setAsso_name] = useState("");
const [points, setPoints] = useState("");

// const data = { asso_name, points, volunteer_id}

  
 
  // let dataDons = { asso_name, points, volunteer_id};
 const fetchD = async (e) => {
  e.preventDefault()
  const response = await fetch("http://localhost:3001/donations", {
    
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
     asso_name : "assoName", points : parseInt("12"), volunteerId : 2
  }),
  });
  const json = await response.json();
  console.log("Donation envoyée avec succès !", json);
  };
  
  

  // return data;
  
  return (
    <form onSubmit={fetchD}>
       <Card className="pt-2">
    <Card className="flex justify-center w-full max-w-md mx-auto p-3">
      <CardHeader className="w-full">
        <CardTitle className="flex font-bold justify-center text-xl">
          Faire un don
        </CardTitle>
        <div className="flex justify-center color text-emerald-700">
          <Gift />
          Points collectés :
        </div>
      </CardHeader>

      <DonationCard 
      emoji="🌊"
       assoName="Ocean Cleanup"
       desc="Association dédiée au nettoyage des océans et à la protection de la vie marine."
       points="100"
      />
         <DonationCard 
      emoji="🌳"
       assoName="Forest Guardians"
       desc="Protection des forêts et reforestation à travers le monde."
       points="150"
      />
         <DonationCard 
      emoji="🦁"
       assoName="Wildlife Protectors"
       desc="Protection des espèces menacées et préservation de leur habitat."
       points="200"
      />
         <DonationCard 
      emoji="🌬️"
       assoName="Clean Air Initiative"
       desc="Lutte contre la pollution de l'air et promotion des énergies propres."
       points="120"
      />
      </Card>
    </Card>
    </form>
  );

}