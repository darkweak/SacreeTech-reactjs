import React from 'react';

export const Input = (): JSX.Element => (
    <div className="bg-gray-200">
        <div className="container py-6 mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Search a github user by username
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" onChange={e => console.log(e)} value={''} placeholder="darkweak"/>
        </div>
    </div>
);
