"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/card";
import { Button } from "../../components/button";
import { Gift } from 'lucide-react';
import DonationCard from "../../components/DonationCard"

export default function Dons () {
           return (
            <div className="flex justify-center w-screen pt-2">
                <CardHeader className="w-full max-w-lg">

           <CardTitle className="flex font-bold justify-center text-xl">Faire un don</CardTitle>
           <div className="flex justify-center color text-emerald-700"><Gift />Points collectés :</div>

            
            <DonationCard />
     </CardHeader>
            </div>
 )
};