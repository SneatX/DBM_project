import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import UserInfo from './UserInfo';

export default function Sidebar() {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col justify-between p-4">
            <div>
                <h2 className="text-xl font-semibold mb-6">Mi Dashboard</h2>
                <nav className="space-y-4">
                    <Link
                        to="/"
                        className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg 
                        ${pathname === '/boards' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
                    >
                        <Home className="w-5 h-5" />
                        <span>Mis tableros</span>
                    </Link>

                    <Link
                        to="/search"
                        className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg 
                        ${pathname === '/search' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
                    >
                        <Search className="w-5 h-5" />
                        <span>Buscar tablero</span>
                    </Link>
                </nav>
            </div>
            <UserInfo />
        </aside>
    );
};
