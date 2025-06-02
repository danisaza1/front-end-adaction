import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
// import WasteCard from WasteCard;
import { Cigarette, Package, Wine, Trash2, Smartphone, CircleHelp  } from 'lucide-react';
import { Waste } from './waste';
import WasteCard from './WasteCard';

//    <Wine />   <Smartphone /> for elect 
//    <Trash2 /> for metal
// CircleHelp autres
// plastic Package

const icons = {
  cigarette_butts: { bg: 'bg-yellow-400', icon: Cigarette, iconColor: 'text-white', title: 'Mégots de cigarette' },
  plastic: { bg: 'bg-blue-400', icon: Package, iconColor: 'text-white', title: 'Plastique' },
  glass: { bg: 'bg-green-300', icon: Wine, iconColor: 'text-white', title: 'Verre' },
  metal: { bg: 'bg-gray-400', icon: Trash2, iconColor: 'text-white', title: 'Métal' },
  electronic: { bg: 'bg-purple-400', icon: Smartphone, iconColor: 'text-white', title: 'Électronique' },
  others: { bg: 'bg-red-400', icon: CircleHelp, iconColor: 'text-white', title: 'Autre' },
};
export default function ConteneurDashboard ({wastesData}) {
console.log("ConteneurDashboard :", wastesData);
  return (
  <Card style={{ boxShadow: 'none'}}>
      <CardContent className="grid grid-cols gap-2 bg-white">
        {wastesData.map(({ id, type, quantity }) => {
          console.log('type:', type);
          const config = icons[type];
          const IconComponent = config.icon;
          return (
            <WasteCard
              key={id}
              svgIcon={<IconComponent size={26} className={config.iconColor} />}
              waste_type={config.title}  // affiche le titre lisible
              quantity={quantity}
              bgClass={config.bg}/>
          );
        })}
      </CardContent>
    </Card>
);
}

