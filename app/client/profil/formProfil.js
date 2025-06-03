'use client'
// import { useState } from "react";

export default function FormProfil (props) {
    // const [volunteers, setVolunteers] = useState(props.currentVolunteers);

    // const handleInputChange = (event) => {

    // const { firstname, firstnameValue } = event.target
    // const { lastname, lastnameValue } = event.target
    // const { location, locationValue } = event.target

    //     setVolunteers({ ...volunteers, 
    //         [firstname]: firstnameValue,
    //         [lastname]: lastnameValue,
    //         [location]: locationValue
    //     })
    // }




    return (
        <div className=" flex flex-col justify-evenly w-110 h-110 m-10">
        <h2 className="text-4xl text-center font-bold">Votre Profil</h2>
        <form   onSubmit={(event) => {
        event.preventDefault()

        props.updateBen(benevole.id, benevole)
      }}

        className="flex flex-col">
                <label className="text-xl">Name</label>
            <input
                type="text"
                name="name"
                // value={volunteers.firstname}
                // onChange={handleInputChange}
            />
            <label className="text-xl">Username</label>
            <input
                type="text"
                name="username"
                // value={benevole.lastname}
                // onChange={handleInputChange}
            />
            <label className="text-xl">Ville</label>
            <input
            type="text"
            name="location"
            // value={benevole.lastname}
            // onChange={handleInputChange}
            />
            <button className="bg-green-600 py-3 px-2 mt-7 rounded-lg shadow-lg">Update user</button>
        </form>
    </div>
    )
}