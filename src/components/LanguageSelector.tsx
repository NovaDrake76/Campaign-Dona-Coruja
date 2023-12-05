import { useState } from "react";
import i18n from '../i18n';
import BR from "../assets/br.webp"
import US from "../assets/us.webp"

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e: string) => {
        i18n.changeLanguage(e);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e);
        console.log(selectedLanguage)
        localStorage.setItem("lang", e);
        window.location.reload();
    }

    return (
        <div className="flex md:flex-col gap-2  absolute right-8 top-20 md:top-24 2xl:top-10">
            <img src={BR} alt="change language to pt" className="w-8" onClick={() => chooseLanguage("pt")} />
            <img src={US} alt="change language to en" className="w-8 " onClick={() => chooseLanguage("en")} />
        </div>
    );
};

export default LanguageSelector;