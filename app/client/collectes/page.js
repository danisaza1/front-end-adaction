

import { Card, CardContent, CardHeader, CardTitle } from "../../components/card";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { CircleAlert } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "../../components/select"
import { Save } from 'lucide-react';
import { Waste } from "../../components/waste"



export default function Home() {
  return (
   
   <Card>
       <CardHeader>
           <CardTitle className="flex justify-center">  <CircleAlert className="mr-2"/> Enregistrer une collecte    </CardTitle>
           <CardContent>
           <form action="/api/citations"
method="get" className="flex flex-col gap-2">
        
        <div>
        <label> Date * </label></div>
        <Input type="date" className=" " />
       
      
        <div>
          <label  className="flex" >  <MapPin/>Localisation
           </label>
          </div>


       <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sélectionnez une ville" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Paris</SelectItem>
        <SelectItem value="2">Marseille</SelectItem>
        <SelectItem value="3">Lyon</SelectItem>
        <SelectItem value="4">Toulouse</SelectItem>
        <SelectItem value="5">Nice</SelectItem>
        <SelectItem value="6">Nantes</SelectItem>
        <SelectItem value="7">Strasbourg</SelectItem>
        <SelectItem value="8">Montpellier</SelectItem>
        <SelectItem value="9">Bordeaux</SelectItem>
        <SelectItem value="10">Lille</SelectItem>
      </SelectContent>
    </Select>


        <label > Type de déchet * </label>

<Waste emoji="🚬" label="Mégots de cigarette" />
<Waste emoji="🥤" label="Plastique" />
<Waste emoji="🍶" label="Verre" />
<Waste emoji="🥫" label="Métal" />
<Waste emoji="📱" label="Electronique" />
<Waste emoji="❓" label="Autre" />




        <Button type="submit">  <Save />Enregistrer</Button>
           </form>




           </CardContent>
       </CardHeader>
   </Card>

   
    
  );
}
