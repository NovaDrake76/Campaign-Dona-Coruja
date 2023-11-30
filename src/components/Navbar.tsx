import React from 'react';
import Logo from '../assets/coruja.png';
import Button from './Button';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return (
        <nav className="absolute flex items-center justify-center bg-transparent py-4 px-6 w-screen">
            <div className='flex items-center justify-between w-full max-w-[1280px]'>
                <div className="flex items-center ">
                    <img src={Logo} alt="Logo" className="h-[75px] w-[75px]" />
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/" className="text-white mx-4">Início</Link>
                    <Link to="/donation" className="text-white mx-4">Doação</Link>
                    <Link to="/schools" className="text-white mx-4">Escolas</Link>
                </div>
                <div>
                    <Button text="Doe agora" size="s" color="primary" />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
