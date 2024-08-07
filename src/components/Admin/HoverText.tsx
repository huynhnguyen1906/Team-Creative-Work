import { useState, ReactNode } from 'react';
import Style from '@styles/componentsStyles/Admin/HoverText.module.scss';

interface HoverTextProps {
    icon: ReactNode;
    text: string;
}

const HoverText = ({ icon, text }: HoverTextProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={Style.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={Style.icon}>{icon}</div>
            {isHovered && <div className={Style.text}>{text}</div>}
        </div>
    );
};

export default HoverText;
