import '@/styles/globals.scss'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <aside>aside</aside>
      {children}
    </main>
  )
}
