// This file is a Server Component by default, no "use client"; here.
import CollectesForm from './collectes-form';

/**
 * Fetches the list of cities from the API.
 * This function runs on the server.
 *
 * @returns {Promise<Array<string>>} A promise that resolves to an array of city names.
 * Returns an empty array if fetching fails.
 */
async function getCities() {
    try {
        // Fetch data from your local API endpoint.
        // 'no-store' ensures the data is always fresh, not cached.
        const res = await fetch("http://localhost:3001/cities", { cache: 'no-store' });

        // Check if the response was successful.
        if (!res.ok) {
            // If not, throw an error with the status message.
            throw new Error(`Failed to fetch cities: ${res.statusText}`);
        }

        // Parse the JSON response.
        const data = await res.json();

        // Return the 'cities' array from the response data, or an empty array if it's missing.
        return data.cities || [];
    } catch (err) {
        // Log any errors that occur during fetching.
        console.error("Error fetching cities on the server:", err);
        // Return an empty array to prevent application crashes.
        return [];
    }
}

/**
 * This is the main page component for the /collectes route.
 * It's a Server Component by default, so it runs on the server.
 *
 * @returns {JSX.Element} The rendered Client Component with initial data.
 */
export default async function CollectesPage() {
    // Fetch the initial cities data on the server before rendering.
    const initialCities = await getCities();

    // Render the CollectesForm Client Component, passing the fetched cities
    // as a prop. This ensures the client component receives consistent
    // data for hydration.
    return (
        <CollectesForm initialCities={initialCities} />
    );
}





