"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { Card } from "../../components/card";
import NavBar from "app/components/navbar";

export default function FormProfil() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Contrôler l'affichage des mots de passe
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const { user, logout } = useAuth();

  async function fetchData() {
    if (!user?.token || !user?.id) return;

    try {
      const res = await fetch(`http://localhost:3001/profil/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      if (!res.ok) throw new Error("Erreur lors de la récupération du profil");

      const data = await res.json();
      setFirstName(data.firstname || "");
      setLastName(data.lastname || "");
      setLocation(data.location || "");
      setEmail(data.email || "");
    } catch (error) {
      console.error("Erreur lors du chargement du profil :", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const body = { firstname, lastname, location, email };

      if (newPassword && currentPassword) {
        body.currentPassword = currentPassword;
        body.newPassword = newPassword;
      }

      const res = await fetch(`http://localhost:3001/updateProfil/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        alert("Profil mis à jour !");
        setCurrentPassword("");
        setNewPassword("");
      } else {
        const errData = await res.json();
        alert("Erreur lors de la mise à jour : " + (errData.message || ""));
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Erreur réseau");
    }
  };

  const handleLogout = async () => {
    await fetch("http://localhost:3001/logout", {
      method: "POST",
      credentials: "include", // ⚠️ TRÈS IMPORTANT
    });
    logout();
    alert("Déconnecté avec succès !");
  };

  return (
    <>
      <NavBar role="client" />

      {user && (
        <div className="flex justify-end mb-4 px-4 md:px-16">
          <button
            onClick={() => {
              logout();
              alert("Déconnecté avec succès !");
            }}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition-colors"
          >
            Déconnexion
          </button>
        </div>
      )}

      <form className="flex justify-center" onSubmit={handleSubmitUpdate}>
        <Card className="w-full max-w-2xl p-8 m-4 shadow-lg border rounded-lg">
          <h2 className="text-4xl text-center font-bold mb-6">Votre Profil</h2>

          {/* Prénom + Nom */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="firstname" className="text-lg mb-1">
                Prénom
              </label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="border p-2 rounded"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="lastname" className="text-lg mb-1">
                Nom
              </label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          </div>

          {/* Ville + Email */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="location" className="text-lg mb-1">
                Ville
              </label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border p-2 rounded"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="text-lg mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          </div>

          {/* Mot de passe actuel + nouveau */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 flex flex-col relative">
              <label htmlFor="currentPassword" className="text-lg mb-1">
                Mot de passe actuel
              </label>
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Laisser vide si pas de changement"
                className="border p-2 rounded pr-10"
              />
              <span
                className="absolute right-2 top-9 cursor-pointer text-gray-500"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-closed-icon lucide-eye-closed"
                  >
                    <path d="m15 18-.722-3.25" />
                    <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                    <path d="m20 15-1.726-2.05" />
                    <path d="m4 15 1.726-2.05" />
                    <path d="m9 18 .722-3.25" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-icon lucide-eye"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </span>
            </div>

            <div className="flex-1 flex flex-col relative">
              <label htmlFor="newPassword" className="text-lg mb-1">
                Nouveau mot de passe
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Laisser vide si pas de changement"
                className="border p-2 rounded pr-10"
              />
              <span
                className="absolute right-2 top-9 cursor-pointer text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-eye-closed-icon lucide-eye-closed"
                  >
                    <path d="m15 18-.722-3.25" />
                    <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                    <path d="m20 15-1.726-2.05" />
                    <path d="m4 15 1.726-2.05" />
                    <path d="m9 18 .722-3.25" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-eye-icon lucide-eye"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 py-3 px-2 rounded-lg shadow-lg text-white hover:bg-emerald-700 transition-colors w-full"
          >
            Mettre à jour
          </button>
        </Card>
      </form>
    </>
  );
}
