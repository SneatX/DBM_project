import React from 'react';
import { User } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

const UserInfo = () => {
    const { user } = useLoaderData();

    return (
        <div>
            <div className="flex items-center gap-2 p-4 border-t border-gray-700">
                <div>
                    {user.img ? 
                    <img src={user.img} className='w-10 h-10 rounded-full' alt="avatar" /> : 
                    <User className="w-10 h-10 rounded-full bg-gray-700 p-2 text-gray-300" />}
                </div>
                <div>
                    <p className="font-medium">{user.username}</p>
                    <p className="text-gray-400 text-sm truncate">{user.email}</p>
                </div>
            </div>
            <button 
                onClick={()=>{window.location.href = 'http://localhost:3000/login/logout'}} 
                className='font-medium text-gray-400 text-sm text-center w-full'
            >
                Cerrar sesión
            </button>
        </div>
    );
};

export default UserInfo;
