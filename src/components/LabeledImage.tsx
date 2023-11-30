import React from 'react';

interface LabeledImageProps {
    src: string;
    alt: string;
    label: string | JSX.Element;
}

const LabeledImage: React.FC<LabeledImageProps> = ({ src, alt, label }) => {
    return (
        <div className="flex flex-col items-center w-full">
            <img src={src} alt={alt} className="w-80 h-72 object-cover rounded-xl" />
            <div className="text-black text-center h-2 mt-2 text-lg">{label}</div>
        </div>
    );
};

export default LabeledImage;
