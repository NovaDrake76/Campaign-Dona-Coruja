interface TextAndImageProps {
    text: string;
    image: string;
    reverse?: boolean;
}

const TextAndImage = ({ text, image, reverse }: TextAndImageProps) => {
    const direction = reverse ? 'flex-row-reverse' : 'flex-row';
    const bgImageTransform = !reverse ? "bg-[url('./assets/bg-2.webp')]" : "bg-[url('./assets/bg-2-reverse.webp')]";

    return (
        <div className={`flex w-full justify-center  bg-contain bg-center bg-no-repeat py-20 transform ${bgImageTransform}`}>
            <div className={`flex items-center ${direction} gap-20`}>
                <div className="flex flex-col ">
                    <p className="text-2xl text-black max-w-lg">{text}</p>
                </div>
                <div className="flex relative">
                    <img src={image} alt="Imagem" className="w-[395px] h-[395px] object-cover rounded-[70px] z-10" />
                    <div className="absolute w-[395px] h-[395px] rounded-[70px] bg-secondary-light top-3 left-3" />
                </div>
            </div>
        </div>
    )
}

export default TextAndImage;