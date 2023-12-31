import { t } from "i18next";
import Button from "../../components/Button";

const Schools = () => {

    const handleButtonClick = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSc7cTYadP5-PK41Mwbfg0Xt6VXK0SQZZZ3QFGdwMPL87NilLw/viewform?usp=sf_link", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="bg-[url('./assets/bg-1.webp')] bg-repeat-none bg-cover ">
            <div className="h-screen w-screen bg-[url('./assets/donation-bg.webp')] bg-repeat-none bg-cover flex flex-col md:flex-row items-center justify-center p-8 md:p-0 ">
                <div className="bg-white px-6 py-12 text-primary rounded-2xl max-w-3xl text-center flex flex-col items-center gap-3 text-2xl">
                    {
                        t("schools.mainText")
                    }
                    <div> <Button text={t("schools.button")} onClick={handleButtonClick} /></div>

                </div>
            </div>
        </div>
    );
}

export default Schools;
