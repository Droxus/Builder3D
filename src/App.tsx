import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import './App.css'
import * as Controls from './controls'

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
    <div className='grid grid-cols-4'>
      {items.map((item) => (
        <div key={item.name} onClick={onTexturePick} className='relative basis-1/3 flex flex-wrap justify-center'>
          {/* <img src={item.path} alt="block" className='w-12 h-12 object-cover rounded-lg' /> */}
          <img src={item.download_url} alt="block" className='w-12 h-12 select-none'/>
          <label className='break-words text-sm select-none'>{item.name.slice(0, item.name.length-4).replaceAll('_', ' ')}</label>
        </div>
      ))}
    </div>
  );
};

function onTexturePick(event: any){
  pickedTexture = event.currentTarget.querySelector('label').innerText
  let startOfTextureName = event.currentTarget.querySelector('img').getAttribute('src').lastIndexOf('/')
  pickedTexture = event.currentTarget.querySelector('img').getAttribute('src').slice(startOfTextureName)
  Controls.loadPickedTexture(pickedTexture)
}

function App() {
  return (
    <div className="App h-full w-full">
      <div className='leftBlock relative h-full w-14% bg-gray-300 overflow-scroll overflow-x-hidden'>
        <AllBlocks />
      </div>
    </div>
  )
}

export default App
