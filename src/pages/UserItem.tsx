import React from 'react';
import { Card, USER_ITEM_CARD } from '../components/Card';
import { SearchUserItemLoading } from '../components/Loading';

export const UserItem: React.FC = () => {
    const user = undefined;
    return (
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 m-auto py-6">
            {
                user ?
                    <Card type={USER_ITEM_CARD} {...user} /> :
                    <SearchUserItemLoading />
            }
        </div>
    );
}
