import React from 'react';
import { Card, CardContent, CardHeader, Box} from '@mui/material';
import { CardFooter } from './card';
import { Button } from './button';

export default function DonationCard ({ emoji, title, description }) {
  return (

    <Box className="flex flex-col items-center justify-center min-h-scree">
      <Card
      className="flex flex-col p-2 pl-6 ">
        <h3 className=" flex text-left text-lg font-bold text-gray-800 h-10"> <span className="text-2xl mr-3 inline-block -mt-1.5">🌊</span> Ocean Cleanup</h3>
        <p className="text-gray-600">Association dédiée au nettoyage des océans et à la protection de la vie marine.</p>
      <hr className="my-4 w-full border-gray-300" />
      </Card>
      <CardFooter className="flex flex-row"> 
  <Button className="bg-emerald-600" variant="default" size="default" onClick={() => alert("Merci pour votre don !")}>
          Faire un don
        </Button>
      </CardFooter>
      </Box>
  );
}

//  <div className={`waste-label flex items-center justify-center w-10 h-10 border rounded-sm rounded mr-2 ${bgClass}`}>
//         {svgIcon}
//       </div>
//       <div className="flex flex-col justify-center"></div>