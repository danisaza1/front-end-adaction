// components/NavBar.js
import Link from 'next/link';

export default function NavBar({ role }) {
 
  return (
    <nav className="p-4 shadow bg-white flex gap-4">
      <Link href="/">Accueil</Link>
      {role === 'client' ? (
        <>
          <Link href="/client/produits">Produits</Link>
          <Link href="/client/commande">Mes Commandes</Link>
        </>
      ) : (
        <>
          <Link href="/asso/dashboard">Dashboard</Link>
          <Link href="/asso/membres">Membres</Link>
        </>
      )}
    </nav>
  );
}
