import { UserList } from './UserList';
import { UserItem } from './UserItem';

export const routes = [
    {
        component: UserItem,
        path: '/user/:username',
    },
    {
        component: UserList,
        path: '/',
    },
];
