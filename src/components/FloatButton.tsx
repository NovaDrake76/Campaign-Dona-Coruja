import React from 'react';
import Whatsapp from '../assets/whatsapp.webp';

const FloatButton: React.FC = () => {
    const handleButtonClick = () => {
        window.open(`https://wa.me/5584999720931?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Campanha%20Dona%20Coruja`, '_blank');
    };

    return (
        <button className={`h-12 w-12 md:h-16 md:w-16 rounded-full bottom-10 right-10 fixed bg-white`} onClick={handleButtonClick} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Whatsapp})`,
        }} />
    );
};

export default FloatButton;
