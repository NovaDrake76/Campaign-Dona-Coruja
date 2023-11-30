import React from 'react';

interface LabeledImageProps {
    src: string;
    alt: string;
    label: string;
}

const LabeledImage: React.FC<LabeledImageProps> = ({ src, alt, label }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={src} alt={alt} className="w-80 h-72 object-cover rounded-xl" />
            <div className="text-black">{label}</div>
        </div>
    );
};

export default LabeledImage;
