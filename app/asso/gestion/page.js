// profilPage.js
"use client";
import { Button } from "../../components/button";
import { UserPlus, MapPin, Pen, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from "../../components/card";
import SimpleSelect from "../../components/simpleselect";
import { useState, useEffect } from "react";
import NavBar from "../../components/navbar";
import Formulaire from "../../components/formulaire";
import CitiesGet from "./dataFetch.js";
import { Modal } from "../../components/modal";
import ListOfVolunteers from "../../components/listOfVolunteers";
export default function ProfilPage() {
  const cities = CitiesGet();
  const [city, setCity] = useState("");
  const [showForm, setShowForm] = useState(false);
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <NavBar role="asso" />
      <div className="flex justify-center p-4">
        <CardContent className="flex justify-center">
          <Card>
            <CardHeader>
              <div className="flex justify-center">
                {/* Button to open the "Add Volunteer" form modal */}
                <Button
                  type="button"
                  onClick={() => setShowForm(true)}
                //   {/* Set to true to show the form */}
                  className="flex  gap-2  mb-4 p-6 w-80  text-white normal-case bg-emerald-700 hover:bg-emerald-800 transition-colors duration-200"
                >
                  <UserPlus className="text-white" />
                  <p className="text-white normal-case">Ajouter un.e bénévole</p>
                </Button>
              </div>
              {/* Search and filter section */}
              <div className="flex flex-row justify-between w-full items-center mb-6">
                <div className="flex-grow mr-4">
                  <input
                    placeholder="Rechercher un.e bénévole..."
                    type="text"
                    className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-gray-600" />
                  <SimpleSelect options={cities} value={city}  onChange={setCity} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-start">
              <ListOfVolunteers />
            </CardContent>
          </Card>
        </CardContent>
      </div>
      {/* The Modal component that conditionally displays the Formulaire */}
      <Modal isOpen={showForm} onClose={handleCloseForm}>
        {/* Pass the handleCloseForm function to Formulaire so it can close itself */}
        <Formulaire onClose={handleCloseForm} />
      </Modal>
    </>
  );
}