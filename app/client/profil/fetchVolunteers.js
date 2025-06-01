export default async function FetchVolunteers () {
    const res = await fetch('http://localhost:3001/profil')
    const volunteers = await res.json()
    return(
        <pre>{JSON.stringify(volunteers, null, 2)}</pre>
    )     
}