// @refresh false
import { useState, useEffect, createRef } from 'react'
import React from 'react'
import './App.css'
import * as App from './App'
import * as Controls from './controls'
import * as ThreeScene from './threeScene'
import { Link } from 'react-router-dom';
import { Material, MaterialParameters, Mesh, MeshBasicMaterial, Object3D } from 'three'

export let pickedTexture: string = 'debug.png'
export let noCubeBlocks: any = []
export let allTextures: any = []
export let isSceneLoaded: boolean = false
export let indexOfHistoryScene: number = 0

let isNeedToCreateScene: boolean = false
let isTextureLoaded: boolean = false
let loadedTexturesCounter = 0
let allFilteredTextures: any = []
let recentlyUsedBlocks: any = []

type Item = {
    name: string;
    download_url: string;
  };
  let filteredData: any[]
  interface AllBlocksProps {
    items: Item[];
    texturePick: (event: any) => void;
  }
  function onLoadTexture(){
    loadedTexturesCounter++;
    if (loadedTexturesCounter > filteredData.length-2) {
      loadedTexturesCounter = 0  
      if (isNeedToCreateScene) {
        ThreeScene.createScene()
      } else {
        isTextureLoaded = true
      }
    }
  }
  const AllBlocks = ( { items, texturePick } : AllBlocksProps)  => {
    return (
      <div className='grid grid-cols-4 w-full allBlocksDiv'>
        {items.map((item) => (
          <div key={item.name} onClick={texturePick} className='relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2 '>
            <div className='w-full h-14 flex justify-center'>
              <img src={item.download_url} id={item.name} alt="block" onLoad={onLoadTexture} className='textures object-cover w-14 h-14 aspect-square select-none pointer-events-none'/>
            </div>
            <label id={item.name.slice(0, item.name.length-4).replaceAll('_', ' ')} className='break-words text-sm select-none'>{item.name.slice(0, item.name.length-4).replaceAll('_', ' ').replaceAll('side', '').replaceAll('log', '').replaceAll('front', '').replaceAll('end', '') }</label>
          </div>
        ))}
      </div>
    );
  };

const RecentlyUsedBlocks = ( {items, texturePick}: AllBlocksProps ) => {
    items = recentlyUsedBlocks
      return (
        <div>
         <div hidden={items.length < 1} className='grid grid-cols-4 w-full'>
           {items.map((item: any) => (
             <div key={item.name} onClick={texturePick} className='relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2'>
               <div className='w-full h-14 flex justify-center'>
                 <img src={item.download_url} id={item.name} alt="block" className='textures object-cover w-14 h-14 aspect-square select-none pointer-events-none'/>
               </div>
               <label id={item.name.slice(0, item.name.length-4).replaceAll('_', ' ')} className='break-words text-sm select-none'>{item.name.slice(0, item.name.length-4).replaceAll('_', ' ').replaceAll('side', '').replaceAll('log', '').replaceAll('front', '').replaceAll('end', '') }</label>
             </div>
           ))}
         </div>
         <h1 hidden={items.length > 0} className='opacity-60'>No blocks here</h1>
       </div>
  );
  };
  export function setNewPickedTexture(newTexture: string){
    pickedTexture = newTexture
  
    let thisTexture = pickedTexture
    if (thisTexture.slice(-4) !== '.png'){
      thisTexture = pickedTexture.replaceAll(' ', '_').concat('.png')
    }
    let textureElement 
    document.querySelectorAll('.blocks').forEach(e => {
      if (e.querySelectorAll('label')[0].id == pickedTexture){
        textureElement = e
        return e
      }
    })
    document.querySelectorAll('.blocks').forEach(e => e.classList.remove('opacity-40'));
    if (textureElement){
      (textureElement as HTMLDivElement).classList.add('opacity-40');
      (textureElement as HTMLDivElement).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }
  export function setBlockType(type: string){
    blockType = type
  }
  export function setNewBlockType(blockType: string){
      switch (blockType) {
        case 'slabs':
          (document.querySelector('.slabsType') as HTMLButtonElement).click()
          break;
        case 'stairs':
          (document.querySelector('.stairsType') as HTMLButtonElement).click()
          break;
        case 'block':
          (document.querySelector('.blocksType') as HTMLButtonElement).click()
          break;
      }
  }
  export function setPickedTexture(newTexture: string){
    pickedTexture = newTexture
  }
  export function setIsSceneLoaded(value: boolean){
    isSceneLoaded = value;
    if (loaderSceneDiv.current) {
      loaderSceneDiv.current.style.display = 'none'
    }
    Controls.createControls()
  }
  export let mode: string = 'Build'
  export let controlsParametersChange: any
  export let blockType: string = 'Blocks'


  function onExitFromScene(){
    (document.querySelector('#root') as HTMLDivElement).style.pointerEvents = 'all'
    // console.log('Exit')
  }
  export function setProgressSceneLoadingValue(value: number){
    if (progressBarLoaderScene.current) {
      progressBarLoaderScene.current.value = value;
    }
  }
  const progressBarLoaderScene = createRef<HTMLProgressElement>();
  export const loaderSceneDiv = createRef<HTMLDivElement>()
  class LoaderScene extends React.Component {
  render () {
    return (
      <div ref={loaderSceneDiv} className='sceneLoader h-full w-full overflow-hidden absolute top-0 left-0 z-200 bg-white grid pointer-events-none' id='sceneLoader'>
        <div className=' h-full w-96 place-self-center grid grid-rows-[40%_20%_5%_20%_20%]'>
          <div></div>
          <img src="https://raw.githubusercontent.com/Droxus/Builder3D/7ba1d995d58b0d5b5e68383ba3713c489af0311e/src/assets/img/loaderScene.svg" className='eager img-importance-high w-32 flex justify-self-center ' />
          <label className=' text-xl text-fourthcolor'>Scene Loading</label>
          <progress ref={progressBarLoaderScene} max="100" value={0} id="sceneProgressBar" className=' superProgress w-60 flex justify-self-center appearance-none h-5'></progress>
          <div className='flex items-center justify-center'>
            <img className='eager img-importance-high aspect-square h-12 w-auto' src="https://raw.githubusercontent.com/Droxus/Builder3D/9ff281164d1c9ed9c617cf49285f033e79674502/src/assets/img/logo.svg" />
            <label className='text-xl ml-4 font-medium text-fourthcolor'>Builder 3D</label>
          </div>
        </div>
      </div>
    )
  }
  }
 export function onSceneClose(){
  ThreeScene.sceneClear()
  onExitFromScene()
  }
  export const sceneNameValue = createRef<HTMLInputElement>()
  export let isSceneWasCreated = false
  export function setSceneName(value: string){
    if (sceneNameValue.current) {
      sceneNameValue.current.value = value
    }
  }
  export default function Scene(){
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSceneName(event.target.value)
        ThreeScene.thisSceneLocal.name = String(event.target.value)
        localStorage.setItem(ThreeScene.thisSceneLocal.id, JSON.stringify(ThreeScene.thisSceneLocal))
      };
      if (sceneNameValue.current) {
        if (!sceneNameValue.current.value){
          if (isTextureLoaded){
            ThreeScene.createScene()
          } else {
            isNeedToCreateScene = true
          }
        }
      }

      const [scaleValue, setScaleInputValue] = useState("");
      const scaleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setScaleInputValue(String(Math.max(Math.min(Number(event.target.value), Controls.controls.maxDistance), Controls.controls.minDistance)));
          ThreeScene.camera?.position.setLength(Number(Math.max(Math.min(Controls.controls.maxDistance - Number(event.target.value) + 0.5, Controls.controls.maxDistance), Controls.controls.minDistance)));
      };
      controlsParametersChange = function(){
        setScaleInputValue(String(Math.round(Controls.controls.maxDistance - Controls.controls.getDistance() + 0.5)));
        setPositionXInputValue(String(Math.round(Controls.controls.target.x)));
        setPositionYInputValue(String(Math.round(Controls.controls.target.y)));
        setPositionZInputValue(String(Math.round(Controls.controls.target.z)));
      }
      if (!scaleValue){
        setScaleInputValue('192');
      }
    
      const [positionXValue, setPositionXInputValue] = useState("");
      const [positionYValue, setPositionYInputValue] = useState("");
      const [positionZValue, setPositionZInputValue] = useState("");
    
      const positionXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPositionXInputValue(String(Math.max(Math.min(Number(event.target.value), 10000), -10000)));
        Controls.controls.target.set(Number(Math.max(Math.min(Number(event.target.value), 10000), -10000)), Controls.controls.target.y, Controls.controls.target.z);
        Controls.controls.update()
      };
      const positionYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPositionYInputValue(String(Math.max(Math.min(Number(event.target.value), 10000), -10000)));
          Controls.controls.target.set(Controls.controls.target.x, Number(Math.max(Math.min(Number(event.target.value), 10000), -10000)), Controls.controls.target.z);
          Controls.controls.update()
      };
      const positionZChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPositionZInputValue(String(Math.max(Math.min(Number(event.target.value), 10000), -10000)));
          Controls.controls.target.set(Controls.controls.target.x, Controls.controls.target.y, Number(Math.max(Math.min(Number(event.target.value), 10000), -10000)));
          Controls.controls.update()
      };
      if (!positionXValue){
        setPositionXInputValue('0');
      }
      if (!positionYValue){
        setPositionYInputValue('0');
      }
      if (!positionZValue){
        setPositionZInputValue('0');
      }
      const [selectedModeBtn, setSelectedModeBtn] = useState('');
      if (!selectedModeBtn){
        setSelectedModeBtn('Build')
      }
      function onModeSwitch(event: any){
        setSelectedModeBtn(event.currentTarget.querySelector('label').innerText)
        mode = event.currentTarget.querySelector('label').innerText
        Controls.modeSwitch()
      }
      const [blockTypeBtn, setBlockTypeBtn] = useState('');
      if (!blockTypeBtn){
        setBlockTypeBtn('Blocks')
      }
      function onBlockTypeSwitch(event: any){
        setBlockTypeBtn(event.target.innerText)
        blockType = event.target.innerText
        Controls.blockTypeSwich()
      }
      function onBlockFind(event: any){
        setQuery(event.target.value)
      }
      function onBlockFindFocus(){
        Controls.controls.keys = {
          LEFT: null,
          UP: null, 
          RIGHT: null, 
          BOTTOM: null
      };
      }
      function onBlockFindBlur(){
        Controls.controls.keys = {
          LEFT: 'KeyA',
          UP: 'KeyW', 
          RIGHT: 'KeyD', 
          BOTTOM: 'KeyS'
      };
      }

      const [query, setQuery] = useState('');
      const [items, setItems] = useState<Item[]>([]);
          useEffect(() => {
              const fetchData = async () => {
                const response = await import('../textures.json');
                let data = response.default;
                data = data.filter(e => e.name.slice(-7) !== '.mcmeta')
                allTextures = data
                data = data.filter((e: any) => !e.name.includes('top') && !e.name.includes('bottom') && !e.name.includes('anvil') && !e.name.includes('bell') && !e.name.includes('candle')  && !e.name.includes('redstone_dust')
                 && !e.name.includes('bamboo_singleleaf') && !e.name.includes('big_dripleaf_side') && !e.name.includes('chain') && !e.name.includes('lightning_rod') && !e.name.includes('grindstone') && !e.name.includes('small_dripleaf'))
                const noCubeBlocksResponse = await import('../noCubeBlocks.json');
                noCubeBlocks = noCubeBlocksResponse.default
                allFilteredTextures = data
                filteredData = data
                setItems(filteredData);
              };
              if (allTextures.length < 1){
                fetchData();
              } else if (query !== undefined || query !== null) {
                if (query == ''){
                  filteredData = allFilteredTextures
                } else {
                  filteredData = allFilteredTextures.filter((e: any) => String(e.name).toLowerCase().includes(String(query).toLowerCase()))
                }
                if (filteredData.length > 0){
                    setItems(filteredData)
                }
              }
          }, [query]);
    const [inputBlockSearchValue, inputBlockSearch] = useState('');
    
    function inputBlockSearchClear(){
      inputBlockSearch('')
      setQuery('')
    }
    function onInputBlockSearch(event: any){
      inputBlockSearch(event.target.value)
    }
    const [recentlyUsedBlocksThis, setRecentlyUsedBlocks] = useState<Item[]>([]);
        useEffect(() => {
          setRecentlyUsedBlocks(recentlyUsedBlocks)
        }, []);
    
        function onTexturePick(event: any){
          Controls.loadPickedTexture(event.currentTarget.querySelector('img').getAttribute('id'))
          pickedTexture = event.currentTarget.querySelector('label').getAttribute('id')
         
        
          if (pickedTexture.slice(-4) !== '.png'){
            recentlyUsedBlocks.push(allTextures.filter((e: any) => e.name == pickedTexture.replaceAll(' ', '_').concat('.png'))[0])
          } else {
            recentlyUsedBlocks.push(allTextures.filter((e: any) => e.name == pickedTexture)[0])
          }
          recentlyUsedBlocks = Array.from(new Set(recentlyUsedBlocks))
          recentlyUsedBlocks = recentlyUsedBlocks.slice(-8)
          setRecentlyUsedBlocks(recentlyUsedBlocks)
          document.querySelectorAll('.blocks').forEach(e => e.classList.remove('opacity-40'));
          event.currentTarget.classList.add('opacity-40')
        }
        let undoArr: any[] = []
        function onUndoBtn(event: any){
            const undoneOperation = Controls.historyOfScene.pop();
            if (undoneOperation){
              undoArr.push(undoneOperation)
              const { action, blockInfo: element } = undoneOperation
              if (action == 'remove'){
                Controls.onTextureSwitch(element.textureName).then(() => {
                  Controls.createCube(element.position.x, element.position.y, element.position.z, element.textureName, element.blockType, element.rotation._x, element.rotation._y, element.rotation._z)
                  Controls.historyOfScene.pop();
                })
              } else if (action == 'create'){
                let object: any = ThreeScene.scene?.children.filter((e: any) => e.position.x == element.position.x && e.position.y == element.position.y
                 && e.position.z == element.position.z)[0]
                Controls.removeCube(object)
                Controls.historyOfScene.pop();
              }
            }
          event.target.blur()
        }
  
        function onRedoBtn(event: any){
            const redoneOperation = undoArr.pop()
            if (redoneOperation){
                const { action, blockInfo: element } = redoneOperation
                if (action == 'create'){
                  Controls.onTextureSwitch(element.textureName).then(() => {
                    Controls.createCube(element.position.x, element.position.y, element.position.z, element.textureName, element.blockType, element.rotation._x, element.rotation._y, element.rotation._z)
                  })
                } else if (action == 'remove'){
                  let object: any = ThreeScene.scene?.children.filter((e: any) => e.position.x == element.position.x && e.position.y == element.position.y
                   && e.position.z == element.position.z)[0]
                  Controls.removeCube(object)
                }
            }
          event.target.blur()
        }
      return (
        <div className='threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr] z-100'>
          <LoaderScene />
          <div className=' bg-fourthcolor z-60 grid grid-cols-[300px_25%_1fr_35%] text-secondcolor' onFocus={onBlockFindFocus} onBlur={onBlockFindBlur}>
          <Link to="/" className='flex items-center cursor-pointer' onClick={onSceneClose}>
              <img className='ml-8 aspect-square h-9 w-auto' src="https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/whiteLogo.svg" />
              <label className='text-xl ml-4 font-medium text-firstcolor cursor-pointer'>Builder 3D</label>
          </Link>
            <div className='flex items-center shadow-forTopBlock'>
              <button onClick={onUndoBtn} className='h-full w-24 focus:outline-none hover:border-0 transition-none'>Undo</button>
              <button onClick={onRedoBtn} className='h-full w-24 focus:outline-none hover:border-0 transition-none'>Redo</button>
              <button className=' h-full w-24'>Create</button>
            </div>
            <div className='flex items-center justify-center text-firstcolor shadow-forTopBlock'>
              <button className='outline-none'>Droxus228</button>
              <label className=' mx-2'>/</label>
              <input className='sceneName bg-transparent outline-none' type="text" ref={sceneNameValue} onChange={handleInputChange} />
            </div>
            <div className='flex items-center justify-end shadow-forTopBlock'>
              <button className='h-full w-24 '>Save</button>
              <button className='h-full w-24'>Scene</button>
              <button className=' h-full w-24 '>Import</button>
              <button className='h-full w-24'>Export</button>
              <button className=' h-full w-24 '>Share</button>
            </div>
          </div>
          <div className='leftBlock absolute grid grid-rows-[185px_1fr_135px] h-full w-300  bg-firstcolor text-fourthcolor' onFocus={onBlockFindFocus} onBlur={onBlockFindBlur}>
            <div className='pt-20 relative z-30 shadow-forLeftBlockTwo bg-firstcolor'>
              <div className='grid grid-cols-[40px_1fr_40px] '>
                <button className='flex place-content-center items-center focus:outline-none hover:border-0 transition-none'><img className='h-5 w-auto' src="https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/crossBlocks.svg" onClick={() => {inputBlockSearchClear()}}/></button>
                <input className='bg-transparent px-2 h-10 outline-none text-center text-lg border-fourthcolor border-b-2 bg-firstcolor focus:outline-none hover:border-b-2 transition-none'  type="text" placeholder='Find Block' value={inputBlockSearchValue} onChange={onInputBlockSearch} onInput={onBlockFind}/>
                <button className='flex place-content-center items-center focus:outline-none hover:border-0 transition-none'><img className='h-6 w-auto' src="https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/searchBlocks.svg" /></button>
              </div>
              <div className='mt-2 flex'>
                <button className={` flex-1 focus:outline-none hover:border-0 transition-none blocksType ${blockTypeBtn == 'Blocks' ? ' opacity-100' : 'opacity-40'}`} onClick={onBlockTypeSwitch}>Blocks</button>
                <button className={` flex-1 focus:outline-none hover:border-0 transition-none slabsType ${blockTypeBtn == 'Slabs' ? ' opacity-100' : 'opacity-40'}`} onClick={onBlockTypeSwitch}>Slabs</button>
                <button className={` flex-1 focus:outline-none hover:border-0 transition-none stairsType ${blockTypeBtn == 'Stairs' ? ' opacity-100' : 'opacity-40'}`} onClick={onBlockTypeSwitch}>Stairs</button>
              </div>
            </div>
            <div className='texturePickBlock relative h-full overflow-scroll overflow-x-hidden z-10 mt-0 py-24 shadow-forLeftBlockThree'>
              <div className=' grid grid-cols-[180px_1fr] items-center'>
                <label className=' font-semibold'>Recently Used Blocks</label>
                <hr className=' h-0.5 mr-2  bg-fourthcolor my-10'/>
              </div>
              <RecentlyUsedBlocks texturePick={onTexturePick} items={recentlyUsedBlocks} />
              <div className=' grid grid-cols-[100px_1fr] items-center'>
                <label className=' font-semibold'>All Blocks</label>
                <hr className=' h-0.5 mr-2  bg-fourthcolor my-10'/>
              </div>
              <AllBlocks texturePick={onTexturePick} items={items} />
            </div>
            <div className='z-30 -mt-0 bg-firstcolor shadow-forLeftBlockTwo'>
              <div className=' pt-4 h-21'>
                <label className=' text-lg font-medium'>Mods</label>
                <div className='flex mt-2 h-full'>
                  <button className={` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${selectedModeBtn == 'Build' ? ' opacity-100' : 'opacity-40'}`} onClick={onModeSwitch}>
                    <div className='w-full flex justify-center'>
                      <img className='w-10 h-10 select-none pointer-events-none' src="https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/build.svg" />
                    </div>
                    <label>Build</label>
                  </button>
                  <button className={` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${selectedModeBtn == 'Inspect' ? ' opacity-100' : 'opacity-40'}`} onClick={onModeSwitch}>
                    <div className='w-full flex justify-center'>
                      <img className='w-10 h-10 select-none pointer-events-none' src="https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/inspect.svg" />
                    </div>
                    <label>Inspect</label>
                  </button>
                  <button className={` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${selectedModeBtn == 'Remove' ? ' opacity-100' : 'opacity-40'}`} onClick={onModeSwitch}>
                    <div className='w-full flex justify-center'>
                      <img className='w-10 h-10 select-none pointer-events-none' src="https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/remove.svg" />
                    </div>
                    <label>Remove</label>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=' absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-fourthcolor font-normal'>
            <div className=' h-8 w-40 flex items-center '>
              <label className=' w-12'>Scale</label>
              <input id='scaleInput' className=' w-14 bg-transparent text-right' type="number" value={scaleValue} onChange={scaleInputChange} />
              <label>%</label>
            </div>
            <div className=' h-8 w-80 flex items-center'>
              <label className=' w-24'>Position</label>
              <label>x:</label>
              <input className='modsButton w-16 bg-transparent text-center' type="number" value={positionXValue} onChange={positionXChange} />
              <label>y:</label>
              <input className=' w-16 bg-transparent text-center' type="number" value={positionYValue} onChange={positionYChange}  />
              <label>z:</label>
              <input className=' w-16 bg-transparent text-center' type="number" value={positionZValue} onChange={positionZChange}  />
            </div>
          </div>
        </div>
      )
}