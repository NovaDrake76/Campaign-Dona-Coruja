import React from 'react';

type ButtonProps = {
    text: string | React.ReactNode;
    onClick?: () => void;
    size?: 's' | 'm' | 'l';
    color?: 'primary' | 'secondary';
    icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, size = 'm', color = 'primary', icon }) => {
    const sizeClasses = size === 's' ? 'px-4 py-2' : size === 'm' ? 'px-6 py-3 text-2xl' : 'px-8 py-4 text-3xl';
    const colorClasses = color === 'primary' ? 'bg-primary' : 'bg-secondary';

    return (
        <button
            className={`text-white ${sizeClasses} ${colorClasses} border-none rounded-full cursor-pointer flex items-center gap-4`}
            onClick={onClick}
        >
            {icon && icon}
            {text}
        </button>
    );
};

export default Button;