import React from 'react';
import { UserOutterInterface } from '../../serializers';
import { LinkIcon } from '../Icon/LinkIcon';
import { RiGlobalLine, RiTwitterLine } from 'react-icons/ri';

export interface UserListCardInterface extends UserOutterInterface {}

export const UserListCard: React.FC<UserListCardInterface> = ({ avatar, twitter, username, website }) => {
    return (
        <a href={`/user/${username}`} className="md:flex bg-white rounded-lg p-6 border border-gray-200 rounded hover:shadow-lg transition-all duration-200">
            <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={avatar} alt={`${ username } avatar`} />
            <div className="text-center md:text-left my-auto pt-3 md:pt-0">
              <h2 className="text-lg">{ username }</h2>
              <div className="text-gray-600">
                  <LinkIcon Icon={RiTwitterLine} link={twitter}/>
                  <LinkIcon Icon={RiGlobalLine} link={website}/>
              </div>
            </div>
        </a>
    );
}
