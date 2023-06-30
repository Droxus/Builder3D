import { useState, useEffect, createRef } from 'react'
import React from 'react'
import './App.css'
import * as App from './App'
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className=' w-screen h-screen overflow-hidden overflow-y-scroll '>
            <header className=' h-16 w-full bg-fourthcolor fixed'>
                <div className=' h-full w-full grid grid-cols-3 gap-8 text-firstcolor'>
                    <div>
                        <div className='h-full flex justify-center items-center mr-12'>
                            <img src="https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/whiteLogo.svg" className=' w-12' />
                            <label className=' w-36 text-2xl font-medium'>Builder 3D</label>
                        </div>
                    </div>
                    <div className=' flex items-center justify-evenly px-12'>
                        <div className=' flex h-10 w-full border-firstcolor rounded-none border-2'>
                            <button>
                                <img className=' w-7' src="https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/crossScenes.svg"/>
                            </button>
                            <input className=' w-full bg-transparent text-center outline-none' placeholder='Find Scene' type="text" />
                            <button>
                                <img className=' w-7' src="https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/searchScenes.svg"/>
                            </button>
                        </div>
                    </div>
                    <div className=' flex items-center justify-evenly'>
                        <button className=' w-16 h-10 border-firstcolor rounded-none border-2'>
                            <Link className=' w-full h-full text-xl font-normal' to="/Builder3D/help">?</Link>
                        </button>
                        <button className=' w-40 h-10 border-firstcolor rounded-none border-2'>
                            <Link className=' w-full h-full text-lg font-normal' to="/Builder3D/scene">Create Scene</Link>
                        </button>
                        <button className=' w-40 h-10 border-firstcolor rounded-none border-2'>
                            <Link className=' w-full h-full text-lg font-normal' to="/Builder3D/profile">Your Profile</Link>
                        </button>
                    </div>
                </div>
            </header>
            <main className=' max-h-max w-full grid grid-cols-3 gap-8 grid-flow-row text-firstcolor py-24 px-8'>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
                <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
            </main>
        </div>
    )
}
export default Home