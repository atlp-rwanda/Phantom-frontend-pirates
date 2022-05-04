import React from 'react';

const SkeletonSimulator = () => {
    return (
        <section className="max-w-full md:w-5/6 mx-auto">

            <div className="flex flex-col items-center m-10 space-y-4 text-center">
                <h1 className="text-3xl font-bold text-purple-900"></h1>
                <p className="text-lg fold-semibold md:w-2/3"></p>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-2xl  lg:pb-0">

                <div className="ml-auto text-center w-full sm:p-12">
                    <div className="bg-white rounded-lg shadow">
                        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                            <div className="flex flex-col justify-start m-2 lg:m-6">
                                <div className="w-full bg-gray-300 animate-pulse h-8 rounded-md ">
                                </div>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 bg-gray-300 animate-pulse rounded-md">
                                <p className="text-4xl font-bold leading-none lg:text-5xl"></p>
                                <p className="text-sm sm:text-base"></p>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 bg-gray-300 animate-pulse rounded-md">
                                <p className="text-4xl font-bold leading-none lg:text-5xl"></p>
                                <p className="text-sm sm:text-base"></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-3 m-10">
                        <div className="bg-gray-300 animate-pulse text-green-800 px-3 py-2 uppercase text-xs rounded-full flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full block"></span><span></span>
                        </div>

                    </div>

                    <div className="mt-12 font-medium uppercase">
                        <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer bg-gray-300 animate-pulse">
                            <span></span>
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer"

                                />
                                <div className="w-10 h-4 bg-gray-400 "></div>
                                <div className="absolute left-0 w-6 h-6 -inset-y-1"></div>
                            </span>
                            <span></span>
                        </label>

                    </div>

                    <div className="grid grid-cols-1 gap-5 py-5">

                        <div className="flex justify-center space-x-3 m-10">
                            <button
                                className="bg-gray-300 animate-pulse border-none w-10 h-10 rounded-full flex justify-center items-center"
                            >
                            </button>
                            <button
                                className="bg-gray-300 animate-pulse border-none w-10 h-10 rounded-full flex justify-center items-center"
                            >
                            </button>
                            <button
                                className="bg-gray-300 animate-pulse border-none w-10 h-10 rounded-full flex justify-center items-center"
                            >
                            </button>
                            <button
                                className="bg-gray-300 animate-pulse border-none w-10 h-10 rounded-full flex justify-center items-center"
                            >
                            </button>
                            <button
                                className="bg-gray-300 animate-pulse border-none w-10 h-10 rounded-full flex justify-center items-center"
                            >
                            </button>
                            <button
                                className="bg-gray-300 animate-pulse border-none w-10 h-10 rounded-full flex justify-center items-center"
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkeletonSimulator;