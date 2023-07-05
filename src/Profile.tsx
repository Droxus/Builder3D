import { useState, useEffect, createRef } from 'react'
import React from 'react'
import './App.css'
import * as App from './App'
import { Link } from 'react-router-dom';
import * as Home from './Home'

const ProfileInfo = ( )  => {
  return (
    <div className=' px-8 pt-24 max-h-max w-full grid grid-cols-3 gap-8'>
      <div className='grid items-center justify-center'>
        <div className=' w-64 h-64 border-2 border-fourthcolor flex flex-col items-center'>
          <img src="" alt="" className=' w-64 h-64 text-center' />
          <p className=' text-center h-64'>User Photo</p>
        </div>
      </div>
      <div className='grid items-center justify-center text-lg font-medium'>
        <div className=' w-72 h-4/5 grid grid-cols-2 items-center content-evenly'>
          <label className=' flex justify-start'>Nickname:</label>
          <label className=' flex justify-start'>{String(localStorage.getItem('nickName'))}</label>
          <label className=' flex justify-start'>Scene created:</label>
          <label className=' sceneCreatedLbl flex justify-start'>0</label>
          <label className=' flex justify-start'>Average rating:</label>
          <label className=' avgRatingLbl flex justify-start'>0.0</label>
        </div>
      </div>
      <div className=' border-fourthcolor rounded-none border-2 aspect-video'></div>
    </div>
     );
 };

function Profile() {

    return (
      <div onMouseDown={(event: any) => {if (event.shiftKey) { event.preventDefault() }}} className="App h-full w-full z-60" >
        <Home.MenuHeader/>
        <ProfileInfo/>
        <Home.ScenesBlock profilePick={Home.onProfilePick} path={`users/${String(localStorage.getItem('nickName'))}/scenes`}/>
      </div>
    )
  }
  
  export default Profile