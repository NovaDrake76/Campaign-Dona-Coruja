import TextAndImage from "../../components/TextAndImage";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { t } from "i18next";

const CentralContent = () => {
    return (
        <div className="flex flex-col items-center text-black mt-12 gap-12">
            <TextAndImage
                text={t('centralContentText1')}
                image='/images/12.webp'
            />
            <div className="bg-[url('./assets/bg-section.webp')] bg-cover bg-center w-full h-72 flex flex-col items-center justify-center gap-4">
                <Link to="/donation">

                    <Button text={t("centralActionButton")} size="l" color="secondary" />
                </Link>
            </div>
            <TextAndImage
                text={t('centralContentText2')}
                image='/images/3.webp'
                reverse
            />

        </div>
    )
}

export default CentralContent;