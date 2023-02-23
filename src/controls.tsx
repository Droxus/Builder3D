import * as THREE from 'three';
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as ThreeScene from './threeScene'

import texturesData from './texturePath.json';

// import texture from './textures/deepslate_diamond_ore.png';

// import * as textures from 'textures/deepslate_diamond_ore.png'

// import texturePath from './textures/deepslate_diamond_ore.png'


export let controls: MapControls
// // console.log(textures)
// let textureCube: any = new THREE.TextureLoader().load(texture)


let textures: any = {};

for (const textureData of texturesData.textures) {
  const texture = new THREE.TextureLoader().load(textureData.path);
  textures[textureData.name] = texture;
}

console.log(textures)

function createCube(x: number, y: number, z: number){
  let textureCube: any = textures.texture1
  console.log(textureCube)
    let cube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { map: textureCube } ))
    ThreeScene.scene.add( cube );
    cube.position.set(x, y, z)
    if (textureCube){
      textureCube.minFilter = THREE.NearestFilter;
      textureCube.magFilter = THREE.NearestFilter;

    }
  }

let shiftDown = false;
export function createControls(){
  controls = new OrbitControls( ThreeScene.camera, ThreeScene.renderer.domElement );
  controls.target.set(0, 0, 0)
  controls.update()
  controls.autoRotate = false
  controls.autoRotateSpeed = 1
  controls.enableDamping = true
  controls.dampingFactor = .05
  controls.enablePan = true;

  document.addEventListener('keydown', event => {
    if (event.keyCode === 16) {
      shiftDown = true;
      controls.mouseButtons = {
        LEFT: 2,
        MIDDLE: 1,
        RIGHT: 0
      };
    }
  });
  document.addEventListener('keyup', event => {
    if (event.keyCode === 16) {
      shiftDown = false;
      controls.mouseButtons = {
        LEFT: undefined,
        MIDDLE: 1,
        RIGHT: undefined
      };
    }
  });
  controls.mouseButtons = {
    LEFT: undefined,
    MIDDLE: 1,
    RIGHT: undefined
  };
  controls.touches = {
    ONE: undefined,
    TWO: undefined
  };
  controls.screenSpacePanning = false
  controls.minDistance = 1
  controls.maxDistance = 200

  document.querySelector('canvas')?.addEventListener('click', blockAdd)
  document.querySelector('canvas')?.addEventListener('contextmenu', blockRemove)
  createCube(0, 0, 0)
}
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
function findPlace(event: { clientX: number; clientY: number; }){
  pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera( pointer, ThreeScene.camera );
  let intersects = raycaster.intersectObjects( ThreeScene.scene.children );
  return intersects[0]
}
function blockAdd(event: { clientX: number; clientY: number; }){
  if (!shiftDown){
    let placeInfo = findPlace(event)
    if (placeInfo){
      createCube(Math.round(placeInfo.point.x), Math.ceil(placeInfo.point.y), Math.round(placeInfo.point.z))
    }
  }
}
function blockRemove(event: { clientX: number; clientY: number; }){
  if (!shiftDown){
    let placeInfo = findPlace(event)
    if (placeInfo){
      if (placeInfo.object.name !== "helpPlane"){
        ThreeScene.scene.remove(placeInfo.object)
      }
    }
  }
}