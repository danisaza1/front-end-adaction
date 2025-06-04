'use client'
import { useEffect, useState } from "react";

export default function FormProfil () { 
    const [ firstname, setFirstName ] = useState()
    const [ lastname, setLastName ] = useState()
    const [ location, setLocation ] = useState()
    
        async function fetchData(){
            const res = await fetch('http://localhost:3001/profil')
            const volunteers = await res.json()
            console.log('😵‍💫😵‍💫',volunteers)
            
            setFirstName(volunteers.firstname)
            setLastName(volunteers.lastname)
            setLocation(volunteers.location)            
        }
        useEffect(() =>{
            fetchData()
    }, [])

    const handleChangeFirstname = (e) => {
        setFirstName(e.target.value)
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleChangeLocation = (e) => {
        setLocation(e.target.value)
    }

    return (
        <div className=" flex flex-col justify-evenly w-110 h-110 m-10">
        <h2 className="text-4xl text-center font-bold">Votre Profil</h2>
        <form   
        className="flex flex-col">
                <label className="text-xl">Name</label>
            <input 
                type="text"
                name="name"
                value={firstname}
                onChange={handleChangeFirstname}
            />
            <label className="text-xl">Username</label>
            <input
                type="text"
                name="username"
                value={lastname}
                onChange={handleChangeLastName}
            />
            <label className="text-xl">Ville</label>
            <input
            type="text"
            name="location"
            value={location}
            onChange={handleChangeLocation}
            />
            <button className="bg-green-600 py-3 px-2 mt-7 rounded-lg shadow-lg">Update user</button>
        </form>
    </div>
    )
}