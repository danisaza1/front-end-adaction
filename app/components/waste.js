import { Button } from "./button";
import { Input } from "./input";



function Waste({ emoji, label, quantity, onDecrease, onIncrease, onChange }) {
  return (
    <div className="flex flex-row gap-5 items-center justify-between">
      <Button className="bg-opacity-0 text-grey hover:bg-transparent">
        {emoji} {label}
      </Button>
      <div className="flex items-center justify-center gap-2">
         <Button onClick={onDecrease} className="p-1 rounded-full bg-transparent text-black hover:bg-gray-100"> - </Button>
        <Input 
        min="0" 
        type="number" 
        value={quantity}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
        className="w-16 text-center" />
        <Button onClick={onIncrease} className="p-1 rounded-full bg-transparent text-black hover:bg-gray-100"> + </Button>
      </div>
    </div>
  );
}

export  {Waste}