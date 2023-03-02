import { useState, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import './App.css'
import * as Controls from './controls'
import * as ThreeScene from './threeScene'

export let pickedTexture: any = 'deepslate_diamond_ore.png'

// uncomment to update textures
// updateAllTextures()
function updateAllTextures() {
  fetch('https://api.github.com/repos/Droxus/Builder3D/contents/src/assets/textures').then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      console.log('All textures reloaded')
  })
}
type Item = {
  name: string;
  download_url: string;
};
const AllBlocks = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    // Simulating an API call that returns an array of items
    const fetchData = async () => {
      const response = await import('../textures.json');
      const data = response.default;
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className='grid grid-cols-4 w-full'>
      {items.map((item) => (
        <div key={item.name} onClick={onTexturePick} className='relative basis-1/3 flex flex-wrap justify-center'>
          <img src={item.download_url} alt="block" className='textures w-3/4 h-auto aspect-square select-none pointer-events-none'/>
          <label className='break-words text-sm select-none'>{item.name.slice(0, item.name.length-4).replaceAll('_', ' ')}</label>
        </div>
      ))}
    </div>
  );
};

function onTexturePick(event: any){
  Controls.loadPickedTexture(event.currentTarget.querySelector('img').getAttribute('src'))
}
export let controlsParametersChange: any
function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  if (!inputValue){
    const initialValue = 'My first build';
    setInputValue(initialValue);
  }

  const [scaleValue, setScaleInputValue] = useState("");

  const scaleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setScaleInputValue(String(Math.max(Math.min(Number(event.target.value), Controls.controls.maxDistance), Controls.controls.minDistance)));
      ThreeScene.camera.position.setLength(Number(Math.max(Math.min(Controls.controls.maxDistance - Number(event.target.value) + 0.5, Controls.controls.maxDistance), Controls.controls.minDistance)));
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
    setPositionYInputValue('3');
  }
  if (!positionZValue){
    setPositionZInputValue('8');
  }
  return (
    <div className="App h-full w-full">
      <div className='threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr]'>
        <div className='bg-neutral-400 z-30 grid grid-cols-[14%_25%_1fr_34%] text-black'>
          <div className='flex items-center'>
            <img className='ml-5 aspect-square h-9 w-auto' src="https://raw.githubusercontent.com/Droxus/Builder3D/a416881d778c508fe7211f86fe9d52ef3a6730c1/src/assets/img/logo.svg" alt="" />
            <label className='text-xl ml-4 font-medium'>Builder 3D</label>
          </div>
          <div className='flex items-center'>
            <button className='h-full w-24 '>Undo</button>
            <button className='h-full w-24'>Redo</button>
            <button className=' h-full w-24 '>Create</button>
          </div>
          <div className='flex items-center justify-center'>
            <button className='outline-none'>Droxus228</button>
            <label className=' mx-2'>/</label>
            <input className=' bg-transparent outline-none' type="text" value={inputValue} onChange={handleInputChange} />
          </div>
          <div className='flex items-center justify-end'>
            <button className='h-full w-24 '>Save</button>
            <button className='h-full w-24'>Scene</button>
            <button className=' h-full w-24 '>Import</button>
            <button className='h-full w-24'>Export</button>
            <button className=' h-full w-24 '>Share</button>
          </div>
        </div>
        <div className='leftBlock absolute grid grid-rows-[200px_1fr_200px] h-full w-14% bg-neutral-300'>
          <div className='pt-20 relative z-10'>
            <div className='grid grid-cols-[1fr_40px] border-neutral-500 border-b-2'>
              <input className='bg-transparent px-2 h-10 outline-none text-center text-lg' type="text" placeholder='Find Block' />
              <button className='flex place-content-center items-center'><img className='h-6 w-auto' src="https://raw.githubusercontent.com/Droxus/Builder3D/a416881d778c508fe7211f86fe9d52ef3a6730c1/src/assets/img/search.svg" alt="" /></button>
            </div>
            <div className='mt-2 flex'>
              <button className='flex-1'>Blocks</button>
              <button className='flex-1'>Slabs</button>
              <button className='flex-1'>Stairs</button>
            </div>
            <div className='h-28 bg-gradient-to-b from-neutral-300 to-transparent'></div>
          </div>
          <div className='texturePickBlock relative h-texturePick overflow-scroll overflow-x-hidden z-1 -mt-8 py-16'>
            <AllBlocks />
          </div>
          <div className='z-20 -mt-8'>
            <div className='h-28 bg-gradient-to-t from-neutral-300 to-transparent'></div>
            <div className='pt-4'>
              <label className=' text-lg'>Mods</label>
              <div className='flex mt-2'>
                <button className='flex-1'>Build</button>
                <button className='flex-1'>Inspect</button>
                <button className='flex-1'>Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className=' absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-neutral-500 font-normal'>
          <div className=' h-8 w-40 flex items-center '>
            <label className=' w-12'>Scale</label>
            <input id='scaleInput' className=' w-14 bg-transparent text-right' type="number" value={scaleValue} onChange={scaleInputChange} />
            <label>%</label>
          </div>
          <div className=' h-8 w-80 flex items-center'>
            <label className=' w-24'>Position</label>
            <label>x:</label>
            <input className=' w-16 bg-transparent text-center' type="number" value={positionXValue} onChange={positionXChange} />
            <label>y:</label>
            <input className=' w-16 bg-transparent text-center' type="number" value={positionYValue} onChange={positionYChange}  />
            <label>z:</label>
            <input className=' w-16 bg-transparent text-center' type="number" value={positionZValue} onChange={positionZChange}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

