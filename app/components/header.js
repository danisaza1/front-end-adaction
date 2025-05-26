import { Card } from "./card";
import { Recycle } from "lucide-react";

export  default function Header() {
    return (
        <Card className=" flex items-center p-2 bg-teal-500">
            <h4 className='flex'><Recycle />Adaction</h4>
            <p>Agir pour un environnement plus propre</p>
        </Card>
    );
}