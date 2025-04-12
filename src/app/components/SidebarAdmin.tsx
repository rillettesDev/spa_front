import Link from 'next/link'

export default function SidebarAdmin() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-4 space-y-4">
      <h2 className="text-lg font-bold">Espace de gestion</h2>
      <ul className="space-y-2">
        <li><Link href="/admin">Adoptions</Link></li>
        <li><Link href="/admin">Animaux</Link></li>
        <li><Link href="/admin">Utilisateurs</Link></li>
        <li><Link href="/admin">Signalements</Link></li>
        <li><Link href="/admin">Parrainages</Link></li>
        <li><Link href="/admin">Suivi vétérinaire</Link></li>
      </ul>
    </aside>
  )
}
