import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import lazyBg from '../../assets/lazy-bg-1.webp'
import bg from '../../assets/bg-1.webp';
import { t } from 'i18next';

const Hero = () => {
    const [bgImage, setBgImage] = useState(lazyBg);

    const handleImageLoaded = () => {
        setBgImage(bg);
    };

    return (
        <div className={`flex flex-col items-center justify-center w-screen h-[70vh] bg-[#9D8EC1] md:h-[90vh] bg-repeat-none bg-cover gap-4`}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="flex flex-col items-center p-2 md:p-0 text-center text-white">
                <h1 className="font-[300] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{t("heroTitle")}</h1>
                <div className="flex items-center font-[300] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl gap-2 md:gap-4">
                    {t("heroSubtitle")}
                    <h2 className="font-[700]">
                        {t("heroSubtitleExtra")}
                    </h2>
                </div>
            </div>
            <Link to="/donation">
                <Button text={t("donateButton")} size="m" color="primary" />
            </Link>
            <img src={bg} alt="Background" onLoad={handleImageLoaded} className="hidden" />
        </div>
    );
}

export default Hero;