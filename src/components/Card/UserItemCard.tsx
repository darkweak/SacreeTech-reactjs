import React from 'react';
import { UserOutterInterface } from '../../serializers';
import { LinkIcon } from '../Icon/LinkIcon';
import { RiGithubLine } from 'react-icons/ri';

export interface UserListCardInterface extends UserOutterInterface {}

export const UserItemCard = ({ avatar, username, countFollowers, countPullRequest, countRepositories, popularRepository }: UserListCardInterface): JSX.Element => {
    return (
        <div className="rounded-lg border border-gray-200">
            <div className="relative z-10" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))'}}>
                <img className="w-full rounded-t-lg" src={avatar} alt="Profile avatar"/>
                <div className="text-center absolute w-full" style={{bottom: '4rem'}}>
                    <p className="text-gray-400 text-sm">@{username}</p>
                </div>
            </div>
            <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                <button
                    className="ml-auto p-4 bg-red-600 rounded-full h-16 w-16 hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
                    <LinkIcon Icon={RiGithubLine} link={`https://github.com/${username}`} className="text-2xl text-white hover:text-white" />
                </button>
            </div>
            <div className="pt-6 pb-8 px-6 text-gray-600 text-center">
                <a href={popularRepository?.url} className="border border-gray-200 rounded-lg hover:shadow p-6 hover:bg-blue-100 transition-all duration-200 block">
                    <p className="font-bold text-xl text-gray-800">Popular repository</p>
                    <div className="m-auto">
                        <span className="text-gray-600 font-bold">{popularRepository?.name}</span>
                        <span className="text-purple-600 font-bold ml-2">{popularRepository?.stars} stars</span>
                    </div>
                </a>
            </div>

            <div className="pb-10 uppercase text-center tracking-wide flex justify-around">
                <div className="posts">
                    <p className="text-gray-400 text-sm">Repositories</p>
                    <p className="text-lg font-semibold text-blue-300">{countRepositories}</p>
                </div>
                <div className="followers">
                    <p className="text-gray-400 text-sm">Followers</p>
                    <p className="text-lg font-semibold text-blue-300">{countFollowers}</p>
                </div>
                <div className="following">
                    <p className="text-gray-400 text-sm">Pull requests</p>
                    <p className="text-lg font-semibold text-blue-300">{countPullRequest}</p>
                </div>
            </div>
        </div>
    );
};
