"use client";
import { useEffect, useState } from "react";
import { Card } from "./card";
import { useParams } from "next/navigation";

export default function FormProfil() {
  const params = useParams();
  const userId = params?.id;

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
     if (!userId) console.log('😀😀')
      return;

    async function fetchData() {
      try {
        console.log("👀", userId)
        const res = await fetch(`http://localhost:3001/profil/${userId}`);
        const data = await res.json();
        console.log("📥 Données récupérées :", data);

        setFirstName(data.firstname || "");
        setLastName(data.lastname || "");
        setLocation(data.location || "");

      } catch (err) {
        console.error("Erreur lors du chargement du profil :", err);
      }
    }

    fetchData();
  }, [userId]);

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/updateProfil/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          location,
        }),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("✅ Mise à jour réussie :", result);
        alert("Profil mis à jour !");
      } else {
        console.error("❌ Échec de la mise à jour");
        alert("Erreur lors de la mise à jour");
      }
    } catch (err) {
      console.error("❌ Erreur réseau :", err);
    }
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmitUpdate}>
      <Card className="flex justify-center border shadow-lg w-96 p-9 m-4">
        <div className="flex flex-col">
          <h2 className="text-4xl text-center font-bold">Votre Profil</h2>

          <label className="text-xl">Prénom</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="text-xl">Nom</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="text-xl">Ville</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button
            type="submit"
            className="bg-green-600 py-3 px-2 mt-7 rounded-lg shadow-lg text-white"
          >
            Mettre à jour
          </button>
        </div>
      </Card>
    </form>
  );
}
