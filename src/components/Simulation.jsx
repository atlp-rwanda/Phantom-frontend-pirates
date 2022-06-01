import React, { useState, useRef, useEffect, useContext, useCallback } from 'react';
import { withTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';
import { SocketContext } from '../context/socket';

import 'react-toastify/dist/ReactToastify.css';
import { notifyInfo, notifySuccess } from '../utils/Notifications';
import SkeletonSimulator from './SkeletonSimulator';

const Simulation = ({ t }) => {
    const [busOn, setBusOn] = useState(false);
    const [moving, setMoving] = useState(false);
    const [busRest, setBusRest] = useState(true);
    const [speed, setSpeed] = useState(0)
    const [passenger, setPassenger] = useState(0);
    const [show, setShow] = useState(false);
    const countRef = useRef(null);
    const navigate = useNavigate();
    const [totalSeats, setTotalSeats] = useState(10);
    const [distance, setDistance] = useState(0)
    const socket = useContext(SocketContext);

    const handleStartBus = useCallback(() => {
        setMoving(true);
        socket.emit('START', {
            busId: 'RAA 222F',
            status: 'start'
        });
    }, [])

    const handlePauseBus = useCallback(() => {
        setMoving(false);
        socket.emit('PAUSE', {
            busId: 'RAA 222F',
            status: 'pause'
        });
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 5000)

        return () => clearTimeout(timeout)
    }, [show])

    const toggled = () => {
        setBusOn(value => !value);
        clearInterval(countRef.current);
        setMoving(false);
        setBusRest(true);
        setDistance(0);
    }

    const moveBus = () => {
        if (busOn === true) {
            setMoving(true);
            setBusRest(false);
            setSpeed(6);
            notifySuccess('The Bus is moving...');
            countRef.current = setInterval(() => {
                setDistance((distance) => distance + 1)
            }, 1000)
        }
        else {
            notifyInfo('Please start a bus');
        }

    }

    const stopBus = () => {
        if (busOn === false || moving === false || busRest === true) {
            notifyInfo('The bus is at Rest or Not moving')
        }
        else {
            clearInterval(countRef.current)
            setMoving(false);
            notifySuccess('You stopped the Bus...');
        }
    }

    const increaseSpeed = () => {
        if (moving === true && busRest === false) {
        }
        else {
            notifyInfo('The bus is stopped or rest')
        }
    }

    const decreaseSpeed = () => {
        if (moving === true && busRest === false && speed > 5) {
            
        }
        else {
            notifyInfo('The bus is stopped or rest');
        }
    }

    const addPassenger = () => {
        if (!moving && totalSeats > 0) {
            setPassenger((passenger) => passenger + 1);
            setTotalSeats((seats) => seats - 1);
            notifySuccess('Added a passenger.');
        }
        else if (moving && totalSeats > 0) {
            notifyInfo('Please Stop the car to add passengers!');
        }
        else {
            notifyInfo('Passenger limit reached!');
        }
    }

    const removePassenger = () => {
        if (!moving && passenger > 0) {
            setPassenger((passenger) => passenger - 1);
            notifySuccess('Removed a passenger.');
        }
        else if (moving && passenger > 0) {
            notifyInfo('Please Stop the car to remove passengers!');
        }
        else {
            notifyInfo('No passenger left!')
        }
    }

    const resetAll = () => {
        setBusOn(false);
        clearInterval(countRef.current);
        setMoving(false);
        setBusRest(true);
        setSpeed(0);
        setDistance(0);
    }

    const redirect = () => {
        const resolveAfter3Sec = new Promise(resolve => {
            resetAll()
            setTimeout(resolve, 3500)
        }).then(() => navigate('/', { replace: true }))
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'You are being redirected to HomePage',
                success: 'Resolved',
                error: 'Promise rejected 🤯'
            }
        )
    }

    return (
        <section className="max-w-full md:w-5/6 mx-auto">

            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* greeting part */}
            <div className="flex flex-col items-center m-10 space-y-4 text-center">
                <h1 className="text-3xl font-bold text-purple-900">{t('simulator.h1')}</h1>
                <p className="text-lg fold-semibold md:w-2/3">{t('simulator.p')}
                    <a
                        className="px-6 py-2 text-sm font-semibold text-blue-800"
                        onClick={redirect}
                    >
                        {t('notFound.link')}
                    </a>
                    <Link to='/user-map'
                        className="px-6 py-2 text-sm font-semibold text-blue-800"
                    >
                        Check Map
                    </Link>
                </p>

            </div>
            {!show ?
                <SkeletonSimulator /> :
                <div className="relative overflow-hidden rounded-lg shadow-2xl  lg:pb-0 grid grid-cols-1 gap-2 md:grid-cols-3">

                    <div className=" p-6 bg-gray-100 rounded">
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leading-none lg:text-4xl">RAA 111 B</p>
                            <p className="text-sm sm:text-base">Plate Number</p>
                        </div>

                        <div class="flex justify-start m-2">
                            <div class="w-80">
                                <label for="source" class="block text-sm font-medium text-gray-700">
                                    Source
                                </label>
                                <select
                                    name="source"
                                    id="source"
                                    className="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                                >
                                    <option defaultValue="" selected disabled>Choose Source</option>
                                    <option value="Downtown Bus park">Downtown Bus park</option>
                                    <option value="Nyabugogo Bus park">Nyabugogo Bus park</option>
                                    <option value="Kacyiru Bus Park">Kacyiru Bus Park</option>
                                    <option value="Remera Bus park">Remera Bus park</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex justify-start m-2">
                            <div class="w-80">
                                <label for="destination" class="block text-sm font-medium text-gray-700">
                                    Destination
                                </label>
                                <select
                                    name="destination"
                                    id="destination"
                                    className="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                                >
                                    <option defaultValue="" selected disabled>Choose Destination</option>
                                    <option value="Downtown Bus park">Downtown Bus park</option>
                                    <option value="Nyabugogo Bus park">Nyabugogo Bus park</option>
                                    <option value="Kacyiru Bus Park">Kacyiru Bus Park</option>
                                    <option value="Remera Bus park">Remera Bus park</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Bus section */}
                    <div className="ml-auto text-center w-full sm:p-12 col-span-2">
                        <div className="bg-white rounded-lg shadow">
                            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                                <div className="flex flex-col justify-start m-2 lg:m-6">
                                    <p className="text-4xl font-bold leading-none lg:text-5xl">{distance}M</p>
                                    <p className="text-sm sm:text-base">{t('simulator.plate')}</p>
                                </div>
                                <div className="flex flex-col justify-start m-2 lg:m-6">
                                    <p className="text-4xl font-bold leading-none lg:text-5xl">{speed}KM/H</p>
                                    <p className="text-sm sm:text-base">{t('simulator.speed')}</p>
                                </div>
                                <div className="flex flex-col justify-start m-2 lg:m-6">
                                    <p className="text-4xl font-bold leading-none lg:text-5xl">{passenger}</p>
                                    <p className="text-sm sm:text-base">{t('simulator.passengers')}</p>
                                </div>
                            </div>
                        </div>
                        {/* TODO:: Dropdown of source and destination */}

                        {/* Notifications section */}
                        <div className="flex justify-center space-x-3 m-10">
                            {busOn ? (

                                <div className="bg-green-200 text-green-800 px-3 py-2 uppercase text-xs rounded-full flex items-center space-x-2">

                                    <span className="w-2 h-2 rounded-full block bg-green-500"></span> <span>Online</span>
                                </div>
                            ) : (

                                <div className="bg-gray-200 text-gray-800 px-3 py-2 uppercase text-xs rounded-full flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full block bg-red-800"></span> <span>Offline</span>
                                </div>
                            )}
                        </div>

                        <div className="mt-12 font-medium uppercase">
                            <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer text-gray-800" data-tip="Ignition">
                                <span>OFF</span>
                                <span className="relative">
                                    <input id="Toggle2" type="checkbox" className="hidden peer"
                                        onChange={toggled}
                                    />
                                    <div className="w-10 h-4 rounded-full shadow bg-gray-400 peer-checked:bg-violet-600"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-violet-600"></div>
                                </span>
                                <span>ON</span>
                            </label>

                        </div>

                        <div className="grid grid-cols-1 gap-5 py-5">
                            {/* Controls section */}

                            <div className="flex justify-center space-x-3 m-10">
                                <ReactTooltip />
                                <button
                                    data-tip="Move Bus"
                                    className="bg-yellow-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
                                    onClick={handleStartBus}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                </button>
                                <button
                                    data-tip="Stop Bus"
                                    className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center" onClick={handlePauseBus}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </button>
                                <button
                                    data-tip="Increase Speed"
                                    className="bg-blue-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
                                    onClick={increaseSpeed}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </button>
                                <button
                                    data-tip="Decrease Speed"
                                    className="bg-blue-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
                                    onClick={decreaseSpeed}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button
                                    data-tip="Add passenger"
                                    className="bg-purple-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
                                    onClick={addPassenger}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </button>
                                <button
                                    data-tip="Remove passenger"
                                    className="bg-indigo-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
                                    onClick={removePassenger}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </section >
    )
}

export default withTranslation()(Simulation);