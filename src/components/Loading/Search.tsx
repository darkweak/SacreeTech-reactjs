import React, { useMemo } from 'react';

export const SearchLoading = (): JSX.Element => useMemo(() => (
    <>
        {
            [0, 1, 2, 3].map((_, key) => (
                <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={key}>
                    <SearchOneLoading />
                </div>
            ))
        }
    </>
), []);

export const SearchOneLoading = (): JSX.Element => useMemo(() => (
    <div
        className="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
        <div className="flex flex-col flex-grow">
            <div className="pl-4 pr-4 pt-4 mb-4 text-left relative flex-grow">
                <h3 className="text-lg font-bold text-gray-darkest mr-10">
                    <span className="skeleton-box h-5 w-2/3 block mb-2"/>
                    <span className="skeleton-box h-5 w-5/6 block"/>
                </h3>
            </div>
        </div>
    </div>
), []);

export const SearchUserItemLoading = (): JSX.Element => useMemo(() => (
    <div className="rounded-lg border border-gray-200">
        <div className="relative z-10 skeleton-box" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))'}}>
            <div className="w-full rounded-t-lg skeleton-box block h-64 w-full" />
        </div>
        <div className="pt-6 pb-8 px-6 text-gray-600 text-center">
            <span className="border border-gray-200 rounded-lg hover:shadow p-6 hover:bg-blue-100 transition-all duration-200 block">
                <p className="font-bold text-xl text-gray-800 skeleton-box h-5 w-2/3" />
                <div className="m-auto">
                    <span className="text-gray-600 font-bold skeleton-box h-5 w-2/3" />
                    <span className="text-purple-600 font-bold ml-2 skeleton-box h-5 w-2/3" />
                </div>
            </span>
        </div>

        <div className="pb-10 uppercase text-center tracking-wide flex justify-around">
            {
                [0, 1, 2].map((_, key) => (
                    <div key={key}>
                        <p className="text-gray-400 text-sm skeleton-box" />
                        <p className="text-lg font-semibold text-blue-300 skeleton-box" />
                    </div>
                ))
            }
        </div>
    </div>
), []);
