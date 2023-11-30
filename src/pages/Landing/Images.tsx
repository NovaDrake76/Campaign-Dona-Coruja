import LabeledImage from "../../components/LabeledImage";

const Images = () => {

    const Images = [{
        src: '/images/7.jpg',
        alt: 'Crianças sorrindo',
        label: <span><b>+2.700</b> kits escolares doados</span>
    }, {
        src: '/images/9.jpg',
        alt: 'Crianças sorrindo',
        label: <span><b>10 anos</b> beneficiando crianças necessitadas</span>
    }, {
        src: '/images/1.png',
        alt: 'Crianças sorrindo',
        label: <span><b>Inúmeras</b> instituições contempladas (Caicó e região)</span>
    }];

    return (
        <div className="flex w-full justify-center">
            <div className="flex items-center justify-around gap-12 max-w-5xl -mt-24">
                {Images.map((image) => (
                    <LabeledImage src={image.src} alt={image.alt} label={image.label} />
                ))}
            </div>
        </div>
    );
};

export default Images;