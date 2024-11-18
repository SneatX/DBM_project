import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Dashboard from '../components/Dashboard.jsx'
export default function Home() {

    return (
        <main className='flex min-h-screen bg-white text-gray-800'>
            <Sidebar />
            <section className='flex-1 p-8 bg-white'>
                <Header />
                <Dashboard />
            </section>
        </main>
    )
}