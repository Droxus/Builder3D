import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import './App.css'

export let allTextures: any = []
let blockNames

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
  id: number;
  name: string;
  url: string;
  path: string;
};
const AllBlocks = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Simulating an API call that returns an array of items
    const fetchData = async () => {
      const response = await fetch('../src/textures.json');
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.name}>
          <img src={item.path} alt="block" width="32px" />
          <label>{item.name}</label>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App h-full w-full">
      <div className='leftBlock h-full w-14% bg-gray-400 overflow-scroll overflow-x-hidden'>
        <AllBlocks />
      </div>
    </div>
  )
}

export default App
