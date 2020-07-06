import React from 'react';
import { Input } from '../Input/Input';
import { RiTwitchLine } from 'react-icons/ri';

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <div className="p-5 w-100 bg-green-400">
                <h1 className="text-5xl text-white font-extrabold text-center">Connaissez-vous Twitch Prime ? <RiTwitchLine /></h1>
            </div>
            <Input />
            {children}
        </>
    );
};
