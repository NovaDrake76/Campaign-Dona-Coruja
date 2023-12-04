import React, { useState } from 'react';
import Logo from '../assets/coruja.png';
import Button from './Button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import LanguageSelector from './LanguageSelector';

const Navbar: React.FC = () => {
    const [isLogoLoaded, setIsLogoLoaded] = useState(false);
    const isMobile = window.innerWidth < 768;

    const links = [
        ...isMobile ? [] : [
            { to: "/", text: t("navbar.home") },
            { to: "/donation", text: t("navbar.donate") },
        ],
        { to: "/schools", text: t("navbar.schools") },
    ];

    const handleLogoLoad = () => {
        setIsLogoLoaded(true);
    };

    return (
        <nav className="absolute flex items-center justify-center bg-transparent py-4 px-6 w-screen">
            <div className='flex items-center justify-between w-full max-w-[1280px]'>
                <div className="flex items-center ">
                    <LanguageSelector />

                    <Link to="/">
                        {!isLogoLoaded && <div className='h-[75px] w-[75px]'></div>}
                        <img src={Logo} alt="Logo" className="h-[75px] w-[75px] object-contain" onLoad={handleLogoLoad} style={{ display: isLogoLoaded ? 'block' : 'none' }} />
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
                    <Button text={t("navbar.donateButton")} size="s" color="primary" />
                </Link>

            </div>

        </nav>
    );
};

export default Navbar;