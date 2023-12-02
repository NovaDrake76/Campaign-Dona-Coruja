import React from 'react';
import Logo from '../assets/coruja.png';
import Button from './Button';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    const isMobile = window.innerWidth < 768;

    const links = [
        { to: "/", text: "Início" },
        ...isMobile ? [] : [
            { to: "/donation", text: "Doação" },
        ]
        // { to: "/schools", text: "Escolas" },
    ];


    return (
        <nav className="absolute flex items-center justify-center bg-transparent py-4 px-6 w-screen">
            <div className='flex items-center justify-between w-full max-w-[1280px]'>
                <div className="flex items-center ">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="h-[75px] w-[75px] object-contain" />
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    {links.map((link, index) => (
                        <Link key={index} to={link.to} className="text-white mx-4 hover:text-gray-50 hover:underline">
                            {link.text}
                        </Link>
                    ))}
                </div>

                <Link to="/donation">
                    <Button text="Doe agora" size="s" color="primary" />
                </Link>

            </div>

        </nav>
    );
};

export default Navbar;