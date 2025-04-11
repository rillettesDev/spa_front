'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-orange-500 px-4 py-2 flex justify-between items-center text-black relative z-50">
      <h1 className="text-xl font-bold">SPA</h1>
      <div className="space-x-4 flex items-center">
        <Link href="/" className="hover:underline">Accueil</Link>

        {/* Menu déroulant pour Adopter */}
        <div className="relative group">
          <span className="cursor-pointer hover:underline">Adopter</span>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white text-black mt-2 shadow-lg rounded z-50 min-w-[120px]">
            <Link
              href="/adoption/chat"
              className="px-4 py-2 hover:bg-orange-100 whitespace-nowrap"
            >
              Chats
            </Link>
            <Link
              href="/adoption/chien"
              className="px-4 py-2 hover:bg-orange-100 whitespace-nowrap"
            >
              Chiens
            </Link>
          </div>
        </div>

        <Link href="/" className="hover:underline">Aider</Link>
        <Link href="/" className="hover:underline">Contact</Link>
        <Link href="/admin" className="hover:underline">Espace Admin</Link>
      </div>
    </nav>
  );
}
