import SidebarAdmin from '../components/SidebarAdmin'

export const metadata = {
  title: 'Admin',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <div className="flex-grow p-4">{children}</div>
    </div>
  )
}
