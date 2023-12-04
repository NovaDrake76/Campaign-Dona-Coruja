import { useTranslation } from "react-i18next";
import LabeledImage from "../../components/LabeledImage";

const Images = () => {
    const { t } = useTranslation();

    const Images = [{
        src: '/images/14.webp',
        alt: '2 crianças recebendo kits escolares',
        label: <span><b>+2.700</b> {t("imageLabel1")}</span>
    }, {
        src: '/images/9.webp',
        alt: '2 jovens recebendo kits escolares',
        label: <span><b>{t("imageLabel2")}</b> {t("imageLabel2Extra")}</span>
    }, {
        src: '/images/1.webp',
        alt: 'Grupo de crianças recebendo kits escolares',
        label: <span><b>{t("imageLabel3")}</b> {t("imageLabel3Extra")}</span>
    }];

    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col md:flex-row items-center justify-around gap-12 max-w-5xl -mt-24">
                {Images.map((image, index) => (
                    <LabeledImage key={index} src={image.src} alt={image.alt} label={image.label} />
                ))}
            </div>
        </div>
    );
};

export default Images;