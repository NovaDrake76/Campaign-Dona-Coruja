import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';

interface LabeledImageProps {
    src: string;
    alt: string;
    label: string | JSX.Element;
}

const LabeledImage: React.FC<LabeledImageProps> = ({ src, alt, label }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
    }, [src]);

    return (
        <div className="flex flex-col items-center w-full">
            {!isLoaded && <div className='w-72 h-72 flex items-center justify-center'>
                <FadeLoader color="#ee59b3" />
            </div>}
            <img src={src} alt={alt} onLoad={() => setIsLoaded(true)} className={`w-72 h-72 md:w-80 md:h-72 object-cover rounded-xl ${isLoaded ? '' : 'hidden'}`} />
            <div className="text-black text-center h-2 mt-2 text-lg">{label}</div>
        </div>
    );
};

export default LabeledImage;