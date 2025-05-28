"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/card";
import { Button } from "../../components/button";
import { useState} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function DashboardPage() {
//  const [firstname, setFirstname] = useState('');
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
  }

  return (
    <div className="flex justify-center w-screen">
    <Card className="w-full max-w-sm">
      <CardHeader>
           <CardTitle className="flex justify-center">  Bonjour {} </CardTitle>
           <div className="flex justify-center">  
            <button onClick={previousMonth} aria-label="Mois précédent"><ChevronLeft /></button>
            <span>{month} {year}</span>
            <button onClick={nextMonth} aria-label="Mois suivant"><ChevronRight /></button>
            </div> 
            </CardHeader>

            
           <CardContent>
      <h1></h1>

           </CardContent>
  
    </Card>
    </div>
  );
}
