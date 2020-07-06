import React from 'react';
import { IconType } from 'react-icons';

interface IconInterface {
    className?: string;
    Icon: IconType;
    link?: string;
}

export const LinkIcon = ({ className, Icon, link }: IconInterface): JSX.Element => {
    return (
        link ?
            <a href={link} target="_blank" rel="noopener noreferrer" className={`hover:text-gray-800 ${className || ''}`}>
                <Icon />
            </a> :
            <Icon className={`text-gray-400 ${className || ''}`} />
    );
}
