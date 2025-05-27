import { Button } from "./button";
import { Input } from "./input";



function Waste({ emoji, label }) {
  return (
    <div className="flex flex-row gap-5 items-center justify-between">
      <Button className="bg-opacity-0 text-grey hover:bg-transparent">
        {emoji} {label}
      </Button>
      <div className="flex items-center justify-center gap-2">
        <Button className="p-1 rounded-full bg-transparent text-black hover:bg-gray-100"> - </Button>
        <Input min="0" type="number" className="w-16 text-center" />
        <Button className="p-1 rounded-full bg-transparent text-black hover:bg-gray-100"> + </Button>
      </div>
    </div>
  );
}

export  {Waste}