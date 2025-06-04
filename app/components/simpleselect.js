import { useState } from "react";

export default function SimpleSelect({ options, value, onChange }) {
  return (
    <select
      className="w-full border border-gray-300 rounded-md p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Sélectionnez une ville</option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id.toString()}>
          {opt.city_name}
        </option>
      ))}
    </select>
  );
}
