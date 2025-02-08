import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") setSelect(0);
        if (path === "/quiz") setSelect(1);
        if (path === "/organisms") setSelect(2);
    }, [location]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const signOut = () => {
        navigate("/login");
    };

    return (
        <div className="relative h-screen">
           <button
    className="lg:hidden absolute top-4 left-4 p-2 rounded-full bg-gray-900 text-white z-20"
    onClick={toggleSidebar}
>
    <i className='fa fa-bars'></i>
</button>

            {/* Sidebar */}
            <div
                className={`w-[250px] h-full bg-gray-900 fixed top-0 left-0 z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 border-r border-gray-700`}
            >
                <div className="absolute top-20 left-5 flex flex-col space-y-8">
                    {/* Dashboard */}
                    <div onClick={() => { setSelect(0); navigate("/"); }}
                        className={`flex items-center cursor-pointer p-3 rounded ${select === 0 ? 'bg-blue-500 text-black' : 'text-white'}`}>
                        <i className={`fas fa-home fa-2x mr-4 ${select === 0 ? 'text-black' : 'text-gray-400'}`}></i>
                        <h2 className={`text-2xl ${select === 0 ? 'font-bold' : ''}`}>Dashboard</h2>
                    </div>
                    {/* Quiz */}
                    <div onClick={() => { setSelect(1); navigate("/quiz"); }}
                        className={`flex items-center cursor-pointer p-3 rounded ${select === 1 ? 'bg-green-500 text-black' : 'text-white'}`}>
                        <i className={`fas fa-question-circle fa-2x mr-4 ${select === 1 ? 'text-black' : 'text-gray-400'}`}></i>
                        <h2 className={`text-2xl ${select === 1 ? 'font-bold' : ''}`}>Quiz</h2>
                    </div>
                    {/* Organisms */}
                    <div onClick={() => { setSelect(2); navigate("/organisms"); }}
                        className={`flex items-center cursor-pointer p-3 rounded ${select === 2 ? 'bg-green-500 text-black' : 'text-white'}`}>
                        <i className={`fas fa-leaf fa-2x mr-4 ${select === 2 ? 'text-black' : 'text-gray-400'}`}></i>
                        <h2 className={`text-2xl ${select === 2 ? 'font-bold' : ''}`}>Organisms</h2>
                    </div>
                    {/* Signout */}
                    <div onClick={signOut}
                        className={`flex items-center cursor-pointer p-3 rounded ${select === 3 ? 'bg-red-500 text-black' : 'text-white'}`}>
                        <i className={`fas fa-sign-out-alt fa-2x mr-4 ${select === 3 ? 'text-black' : 'text-gray-400'}`}></i>
                        <h2 className={`text-2xl ${select === 3 ? 'font-bold' : ''}`}>Signout</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
