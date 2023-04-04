import { useState, useEffect, createRef } from 'react'
import React from 'react'
import './App.css'
import * as App from './App'
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className=' w-screen h-screen'>
            <Link to="/Builder3D/scene">Create Scene</Link>
            <label className=' text-5xl flex'>Hello Home</label>
        </div>
    )
}
export default Home