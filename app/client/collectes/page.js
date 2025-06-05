"use client"; //Ceci est conçu pour fonctionner dans le navigateur, pas seulement sur le serveur.

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/card";
import { Button } from "../../components/button";
import { CircleAlert, MapPin, Save } from "lucide-react";
import { Waste } from "../../components/waste";
import SimpleSelect from "../../components/simpleselect";

export default function Collectes() {
  const [date, setDate] = useState(""); //Usestate pour garder des valeurs. Vide pour enregistrer les données du client. SetDate change la valeur.
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]); //Ici, nous faisons appel à un tableau que nous avons prédéfini.
  const [wasteData, setWaste] = useState([]);

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
  const changeWaste = (label) => {
    //label equivaut au type de déchet
    setWaste((prev) => {
      //prev c'est la liste d'avant.
      const exists = prev.find((waste) => waste.label === label);
      return exists
        ? prev.filter((waste) => waste.label !== label) // ? est egale a true
        : [...prev, { label, quantity: 1 }]; // : est egale a false  ...il prend tout ce qu’il y a dans prev et le met dans un nouveau tableau.
    });
  };

  // Mise à jour simple de la quantité
  function updateQuantity(label, newQuantity) {
    if (newQuantity < 0) newQuantity = 0; //pas des numeros negatifs.
    const updated = wasteData.map((waste) =>
      waste.label === label ? { ...waste, quantity: newQuantity } : waste
    );
    if (!wasteData.find((waste) => waste.label === label)) {
      updated.push({ label, quantity: newQuantity });
    }
    setWaste(updated);
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
    const selected = wasteData.find((waste) => waste.label === label);
    const quantity = selected?.quantity || 0; // Si selected existe, je prends sa quantité, sinon je mets 0.

    return (
      <div key={label} onClick={() => changeWaste(label)}>
        <Waste
          emoji={emoji}
          label={label}
          quantity={quantity}
          onDecrease={(e) => {
            e.stopPropagation(); // function JS il entend que le click et n'envoie rien aux parents pour declancher des autres choses.
            updateQuantity(label, quantity - 1);
          }}
          onIncrease={(e) => {
            e.stopPropagation();
            updateQuantity(label, quantity + 1);
          }}
          onChange={(value) => updateQuantity(label, value)}
        />
      </div>
    );
  };

  return (
      <>
              <NavBar role="client"/>
    <div className="p-9">
      <CardContent className="bg-white-200 w-full sm:w-[80%] md:w-[60%] lg:w-[35%] mx-auto shadow-lg rounded-lg p-4 border">
        <Card className=" shadow-lg">
          <CardHeader>
            <CardTitle className="flex justify-center">
              <CircleAlert className="mr-2" /> Enregistrer une collecte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
              <div>
                <label className="p-2 ">Date *</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="flex items-center gap-1 mb-2">
                  <MapPin />
                  Localisation *
                </label>
                 <SimpleSelect options={cities} value={city} onChange={setCity} />
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
      </CardContent>
    </div>
    </>
  );
}
