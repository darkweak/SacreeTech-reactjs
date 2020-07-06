import React from 'react';
import { SearchLoading } from '../components/Loading';
import { Card } from '../components/Card';
import { UserOutterInterface } from '../serializers';

export const UserList: React.FC = () => {
    const users: UserOutterInterface[] = [];
    return (
        <div className="flex flex-wrap p-16">
            {
                users.length ?
                    users.map((user, key) => (
                        <div className="w-full md:w-1/4 p-2">
                            <Card key={key} {...user} />
                        </div>
                    )) :
                    <SearchLoading />
            }
        </div>
    );
};
