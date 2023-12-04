import { useState } from "react";
import i18n from '../i18n';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e: string) => {
        i18n.changeLanguage(e);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e);
        localStorage.setItem("lang", e);
        window.location.reload();
    }

    return (
        <div className="flex md:flex-col gap-2 text-2xl absolute right-8 top-20 md:top-10">
            <span className={`cursor-pointer ${selectedLanguage === "pt" ? "" : ""}`} onClick={() => chooseLanguage("pt")}>🇧🇷</span>
            <span className={`cursor-pointer ${selectedLanguage === "en" ? "" : ""}`} onClick={() => chooseLanguage("en")}>🇬🇧</span>
        </div>
    );
};

export default LanguageSelector;