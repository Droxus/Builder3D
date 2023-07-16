import { useState, useEffect, createRef, useRef, CSSProperties } from 'react'
import React from 'react'
import './App.css'
import * as App from './App'
import * as firebase from './firebase'
import { Link, useNavigate } from 'react-router-dom';
import * as ThreeScene from './threeScene'
import * as Scene from './Scene'
import ScenesToShow from './ScenesToShow'

export const MenuHeader = ( )  => {
    return (
        <header className=' h-16 w-full bg-fourthcolor fixed'>
        <div className=' h-full w-full grid grid-cols-3 gap-8 text-firstcolor'>
            <div>
                    <Link className='h-full flex justify-center items-center mr-12 cursor-pointer' to="/">
                        <img src="https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/whiteLogo.svg" className=' w-12' />
                        <label className=' w-36 text-2xl font-medium cursor-pointer'>Builder 3D</label>
                    </Link>
            </div>
            <div className=' flex items-center justify-evenly px-12'>
                <div className=' flex h-10 w-full border-firstcolor rounded-none border-2'>
                    <button>
                        <img className=' w-7' src="https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/crossScenes.svg"/>
                    </button>
                    <input className=' w-full bg-transparent text-center outline-none' placeholder='Find Scene' type="search" autoComplete='off' name='aslmasf' />
                    <button>
                        <img className=' w-7' src="https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/searchScenes.svg"/>
                    </button>
                </div>
            </div>
            <div className=' flex items-center justify-evenly'>
                <button className=' w-16 h-10 border-firstcolor rounded-none border-2'>
                    <Link className=' flex w-16 h-10 items-center justify-center text-xl font-normal' to="/Builder3D/help">?</Link>
                </button>
                {App.isLogined ? (
                    <button className=' w-40 h-10 border-firstcolor rounded-none border-2' onClick={() => {(document.querySelector('.createSceneBlock') as HTMLDivElement).style.display = 'grid';}}>
                        <label className=' cursor-pointer flex w-40 h-10 items-center justify-center text-lg font-normal'>Create Scene</label>
                    </button>
                ) : (
                    <button className=' w-40 h-10 border-firstcolor rounded-none border-2' onClick={() => {document.querySelector('.regBlock')?.classList.remove('hidden'); document.querySelector('.regBlock')?.classList.add('grid')}}>
                        <label className=' cursor-pointer flex w-40 h-10 items-center justify-center text-lg font-normal'>Create Scene</label>
                    </button>
                )}
                {App.isLogined ? (
                    <button className=' w-40 h-10 border-firstcolor rounded-none border-2'>
                        <Link className=' flex w-40 h-10 items-center justify-center text-lg font-normal' to="/Builder3D/profile">Your Profile</Link>
                    </button>
                ) : (
                    <button className=' w-40 h-10 border-firstcolor rounded-none border-2' onClick={() => {document.querySelector('.regBlock')?.classList.remove('hidden'); document.querySelector('.regBlock')?.classList.add('grid')}}>
                        <label className=' flex w-40 h-10 items-center justify-center text-lg font-normal'>Your Profile</label>
                    </button>
                )}

            </div>
        </div>
        <div className='createSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center'>
            <div className=' bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor'>
              <label className=' h-16 text-center flex justify-center items-center text-fourthcolor text-2xl'>It seems you have an unsaved scene</label>
              <label className=' px-12 text-thirdcolor text-base flex justify-start items-start'>* If you are going to create a new one, all unsaved changes will be deleted</label>
              <div className=' flex justify-around py-8 px-8'>
                <button className=' w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center' onClick={onCreateNewSceneBtn}>
                    <Link className=' flex w-40 h-10 items-center justify-center text-lg font-normal' to="/Builder3D/scene">Create New</Link>
                </button>
                <button className=' w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center' onClick={() => {ThreeScene.setSceneID(String(localStorage.getItem('lastSceneId'))); App.setIsViewOnlyMode(false)}}>
                    <Link className=' flex w-40 h-10 items-center justify-center text-lg font-normal' to="/Builder3D/scene">Resume</Link>
                </button>
                <button className=' w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center' onClick={() => {(document.querySelector('.createSceneBlock') as HTMLDivElement).style.display = 'none'}}>Close</button>
              </div>
            </div>
          </div>
    </header>
    );
  };
  function onCreateNewSceneBtn() {
    ThreeScene.setSceneID(String(Math.floor(Math.random() * Math.pow(10, 8))));
    localStorage.removeItem(String(localStorage.getItem('lastSceneId')));
    localStorage.setItem('lastSceneId', ThreeScene.sceneID)
    App.setIsViewOnlyMode(false)
  }
  function onChangeRegisterBlock() {
    const signInBlock = document.querySelector('.signInBlock')
    const signUpBlock = document.querySelector('.signUpBlock')
    if (signUpBlock?.classList.contains('hidden')) {
        signInBlock?.classList.add('hidden')
        signUpBlock?.classList.remove('hidden')
        signInBlock?.classList.remove('grid')
        signUpBlock?.classList.add('grid')
    } else {
        signUpBlock?.classList.add('hidden')
        signInBlock?.classList.remove('hidden')
        signInBlock?.classList.add('grid')
        signUpBlock?.classList.remove('grid')
    }
}
function onSignInBtn() {
    const login = (document.querySelector('.signInLogin') as HTMLInputElement).value + '@example.com';
    const password = (document.querySelector('.signInPassword') as HTMLInputElement).value;
    firebase.signInUser(login, password).then((result) => {
        if (App.isLogined){
            document.querySelector('.regBlock')?.classList.remove('grid')
            document.querySelector('.regBlock')?.classList.add('hidden')
            location.reload();
        } else {
            onRegisterError(String(result))
        }
    })
}
function onSignUpBtn() {
    const login = (document.querySelector('.signUpLogin') as HTMLInputElement).value + '@example.com';
    const password = (document.querySelector('.signUpPassword') as HTMLInputElement).value;
    firebase.signUpUser(login, password).then((result) => {
        if (App.isLogined){
            document.querySelector('.regBlock')?.classList.remove('grid')
            document.querySelector('.regBlock')?.classList.add('hidden')
            location.reload();
        } else {
            onRegisterError(String(result))
        }
    })
}
function onRegisterError(errorMessage: string) {
    const errorLabels = Array.from(document.querySelectorAll('.errorLabels'))
    const firstIndex = errorMessage.indexOf('/')
    const secondIndex = errorMessage.lastIndexOf(')')
    const error = errorMessage.slice(firstIndex+1, secondIndex)
    errorLabels.forEach((label) => {
        label.textContent = error
    })
}
  export const RegisterBlock = () => {
    return (
        <div className=' regBlock absolute top-0 left-0 z-200 w-full h-full place-content-center bg-firstcolor hidden'>
            <div className=' w-500 h-600 border-4 border-fourthcolor'>
                <div className=' signInBlock w-full h-full grid px-20 '>
                    <label className=' h-16 text-center flex justify-center items-center text-fourthcolor text-2xl'>Sign In</label>
                    <div className=' absolute w-80 h-10 ml-20 px-3 py-2 mt-16 text-red-400'>
                        <label className=' errorLabels w-full h-full'></label>
                    </div>
                    <label className=' px-12 text-thirdcolor text-base flex justify-center items-center'>Login</label>
                    <input type="text" className=' signInLogin border-2 border-fourthcolor h-10' />
                    <label className=' px-12 text-thirdcolor text-base flex justify-center items-center'>Password</label>
                    <input type="password" className=' signInPassword border-2 border-fourthcolor h-10' />
                    <div className=' flex justify-between py-8'>
                        <button className=' w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center' onClick={onChangeRegisterBlock}>Sign Up</button>
                        <button className=' w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center' onClick={onSignInBtn}>Sign In</button>
                    </div>
                </div>
                <div className=' signUpBlock w-full h-full px-20 hidden'>
                    <label className=' h-16 text-center flex justify-center items-center text-fourthcolor text-2xl'>Sign Up</label>
                    <div className=' absolute w-80 h-10 ml-20 px-3 py-2 mt-16 text-red-400'>
                        <label className=' errorLabels w-full h-full'></label>
                    </div>
                    <label className=' px-12 text-thirdcolor text-base flex justify-center items-center'>Login</label>
                    <input type="text" className=' signUpLogin border-2 border-fourthcolor h-10' />
                    <label className=' px-12 text-thirdcolor text-base flex justify-center items-center'>Password</label>
                    <input type="password" className=' signUpPassword border-2 border-fourthcolor h-10' />
                    <div className=' flex justify-between py-8'>
                        <button className=' w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center' onClick={onChangeRegisterBlock}>Sign In</button>
                        <button className=' w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center' onClick={onSignUpBtn}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  interface AllBlocksProps {
    path: string;
    profilePick: (event: any) => void;
  }
  export function onProfilePick(event: any){
    console.log('oap')
  }

  interface Content {
    id: number | string;
    name: string;
    author: string;
    rate: number | string;
  }
export const ScenesBlock = ( {path, profilePick}: AllBlocksProps )  => {
    const [content, setContent] = useState<Content[]>([]);
    const navigate = useNavigate();
    const onScenePick = (event: any) => {
        App.setIsViewOnlyMode(path == 'scenes')
        ThreeScene.setSceneID(event.currentTarget.id)
        navigate('/Builder3D/scene');
    };

    useEffect(() => {
        const fetchData = async () => {
            firebase.readAllData(path).then((result) => {
                path == 'scenes' ? App.setGlobalScenes(result) : App.setLocalScenes(result);
                if (path !== 'scenes') {
                    (document.querySelector('.sceneCreatedLbl') as HTMLLabelElement).innerText = String(App.localScenes.length)
                    let allRates = App.localScenes.map((e: any) => e.rate)
                    allRates.forEach((rate: any, index) => {
                        allRates[index] = rate.map((e: any) => e.number)
                    })
                    let sceneRates: any[] = [];
                    allRates.forEach((e: any) => {
                        if (e.length > 0) {
                            sceneRates.push(e.reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0) / e.length)
                        }
                    })
                    let sumRates = sceneRates.reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0);
                    (document.querySelector('.avgRatingLbl') as HTMLLabelElement).innerText = String((sumRates / sceneRates.length).toFixed(1))
                }
                setContent(result);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            })
        };
        fetchData();
      }, []);
 return (
     <main className=' homePageSceneBlock max-h-max w-full grid grid-cols-3 gap-8 grid-flow-row text-firstcolor py-24 px-8'>
        {content.length > 0 ? (
        content.map((item: any) => (       
            <div key={item.id} className=' border-fourthcolor rounded-none border-2 aspect-video grid'>
                <div className=' toShowCanvasBlock h-full aspect-video bg-secondcolor cursor-pointer' id={item.id} onClick={onScenePick} onLoad={() => console.log(item.id)}>
                    <ScenesToShow sceneContains={item.contains}/>
                </div>
                <div className=' w-full h-11 bg-fourthcolor flex text-lg'>
                    <label className=' h-full w-1/2 flex items-center justify-center text-firstcolor'>{item.name}</label>
                    <label className=' h-full w-1/3 flex items-center justify-center text-thirdcolor cursor-pointer' onClick={profilePick}>{item.author}</label>
                    <label className=' h-full w-1/6 flex items-center justify-center text-red-300'>{item.rate.length > 0 ? Number(item.rate.map((e: any) => e.number).reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0) / item.rate.length).toFixed(1) : '0.0'}</label>
                </div>
            </div>
        ))
      ) : (
        [ 1, 2, 3 ].map((item: any) => (       
            <img key={item} src="https://raw.githubusercontent.com/Droxus/Builder3D/7ba1d995d58b0d5b5e68383ba3713c489af0311e/src/assets/img/loaderScene.svg" className='eager img-importance-high w-32 flex justify-self-center ' />
        ))
      )}
    </main>

    );
};
function Home(){
    useEffect(() => {
        Scene.onSceneClose()
    })
    return (
        <div className=' w-screen h-screen overflow-hidden overflow-y-scroll '>
            <MenuHeader/>
            <RegisterBlock/>
            <ScenesBlock profilePick={onProfilePick} path={'scenes'}/>
        </div>
    )
}
export default Home