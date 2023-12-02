import { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';

interface TextAndImageProps {
    text: string;
    image: string;
    reverse?: boolean;
}

const TextAndImage = ({ text, image, reverse }: TextAndImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const direction = reverse ? 'flex-row-reverse' : 'flex-row';
    const bgImageTransform = !reverse ? "bg-[url('./assets/bg-2.webp')]" : "bg-[url('./assets/bg-2-reverse.webp')]";

    useEffect(() => {
        setIsLoaded(false);
    }, [image]);

    return (
        <div className={`flex w-full justify-center bg-contain bg-center bg-no-repeat py-20 px-8 md:px-0 transform ${bgImageTransform}`}>
            <div className={`flex flex-col md:flex-row items-center ${direction} gap-20`}>
                <div className="flex flex-col ">
                    <p className="text-2xl text-black max-w-lg text-justify">{text}</p>
                </div>
                <div className="flex relative">
                    {!isLoaded && <div className='w-72 h-72 md:w-[395px] md:h-[395px] flex items-center justify-center z-10'>
                        <FadeLoader color="#ee59b3" />
                    </div>}
                    <img src={image} alt="Imagem" onLoad={() => setIsLoaded(true)} className={`w-72 h-72 md:w-[395px] md:h-[395px] object-cover rounded-[70px] z-10 ${isLoaded ? '' : 'hidden'}`} />
                    <div className="absolute w-[395px] h-[395px] rounded-[70px] bg-secondary-light top-3 left-3 hidden md:flex" />
                </div>
            </div>
        </div>
    )
}

export default TextAndImage;