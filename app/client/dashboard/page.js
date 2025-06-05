"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/card";
import { useState} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import UseWastesData from "./Data.js";
import ConteneurDashboard from '../../components/ConteneurDashboard';
import  NavBar  from "../../components/navbar";

// import { FetchData } from './Data';

export default function DashboardPage() {
    const wastesData = UseWastesData(); 
    const firstname = wastesData.length > 0 ? wastesData[0].firstname : "";

    // const [userData, setUserData] = useState({firstname: "", waste_type: []});

// const[name, setName] = useState (new Name());
const[date, setDate] = useState(new Date());
const month = date.toLocaleString("fr-FR", { month: "long"});
const year = date.getFullYear();
const currentMonthAndYear = `${month} ${year}`;
console.log(currentMonthAndYear);
function previousMonth() {
  const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  setDate(prevMonth);
};
function nextMonth() {
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  // setDate(nextMonth);
  const currentMonth = new Date();
  
  if(nextMonth.getFullYear() > currentMonth.getFullYear() 
    ||(nextMonth.getFullYear() === currentMonth.getFullYear() && nextMonth.getMonth() > currentMonth.getMonth())
  ){
  return;
}
    setDate(nextMonth);
  };



  return (
      <>
              <NavBar role="client"/>
    <div className="flex justify-center w-screen pt-2">
    <Card className="w-full max-w-lg">
      <CardHeader>
           <CardTitle className="flex justify-center">  Bonjour {firstname} ! </CardTitle>
           <div className="flex justify-center">  
            <button onClick={previousMonth} aria-label="Mois précédent"><ChevronLeft /></button>
            <span>{month} {year}</span>
            <button onClick={nextMonth} aria-label="Mois suivant"><ChevronRight /></button>
            </div> 
            </CardHeader>

           <CardContent>
        <ConteneurDashboard wastesData={wastesData}/>

           </CardContent>
  
    </Card>
    </div>
    </>
  );
}
