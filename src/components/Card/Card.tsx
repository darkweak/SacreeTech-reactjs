import React from 'react';
import { UserListCard, UserListCardInterface } from './UserListCard';
import { UserItemCard } from './UserItemCard';

export const USER_ITEM_CARD = 'USER_ITEM_CARD';

interface CardInterface {
    type?: string;
}

type CardType = UserListCardInterface & CardInterface;

export const Card = ({type, ...rest}: CardType): JSX.Element => {
  switch (type) {
    case USER_ITEM_CARD:
      return <UserItemCard {...rest} />;
    default:
      return <UserListCard {...rest}/>
  }
};
