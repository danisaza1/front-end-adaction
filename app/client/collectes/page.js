"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/card";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { CircleAlert, MapPin, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/select";
import { Waste } from "../../components/waste";

export default function Collectes() {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [wasteData, setWasteData] = useState([]);

  // Charger les villes depuis l'API
 useEffect(() => {
  async function fetchCities() {
    try {
      const res = await fetch("http://localhost:3001/cities");
      const data = await res.json();
      setCities(data.cities); // <-- bien récupérer la clé 'cities'
    } catch (err) {
      console.error("Erreur lors du chargement des villes :", err);
    }
  }

  fetchCities();
}, []);


  // Ajouter ou retirer un type de déchet
  const toggleWaste = (label) => {
    setWasteData((prev) => {
      const exists = prev.find((w) => w.label === label);
      return exists
        ? prev.filter((w) => w.label !== label)
        : [...prev, { label, quantity: 1 }];
    });
  };

  // Mise à jour simple de la quantité
  function updateQuantitySimple(label, newQty) {
    if (newQty < 0) newQty = 0;
    const updated = wasteData.map((w) =>
      w.label === label ? { ...w, quantity: newQty } : w
    );
    if (!wasteData.find((w) => w.label === label)) {
      updated.push({ label, quantity: newQty });
    }
    setWasteData(updated);
  }

  // Soumettre les données
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      date,
      city,
      wasteTypes: wasteData,
    };

    const res = await fetch("http://localhost:3001/collectes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    console.log("Réponse du serveur :", json);
  };

  // Rendu d’un élément déchet
  const renderWaste = (emoji, label) => {
    const selected = wasteData.find((w) => w.label === label);
    const quantity = selected?.quantity || 0;

    return (
      <div
        key={label}
        onClick={() => toggleWaste(label)}
        className={`cursor-pointer ${selected ? "" : "opacity-50"}`}
      >
        <Waste
          emoji={emoji}
          label={label}
          quantity={quantity}
          onDecrease={(e) => {
            e.stopPropagation();
            updateQuantitySimple(label, quantity - 1);
          }}
          onIncrease={(e) => {
            e.stopPropagation();
            updateQuantitySimple(label, quantity + 1);
          }}
          onChange={(value) => updateQuantitySimple(label, value)}
        />
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center">
          <CircleAlert className="mr-2" /> Enregistrer une collecte
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label>Date *</label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div>
            <label className="flex items-center gap-1">
              <MapPin />
              Localisation *
            </label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sélectionnez une ville" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((c) => (
                  <SelectItem key={c.id} value={c.id.toString()}>
                    {c.city_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <label>Type de déchet *</label>
          {renderWaste("🚬", "Mégots de cigarette")}
          {renderWaste("🥤", "Plastique")}
          {renderWaste("🍶", "Verre")}
          {renderWaste("🥫", "Métal")}
          {renderWaste("📱", "Electronique")}
          {renderWaste("❓", "Autre")}

          <Button type="submit">
            <Save className="mr-2" />
            Enregistrer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
