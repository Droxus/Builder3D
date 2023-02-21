import * as THREE from 'three';
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as ThreeScene from './threeScene'

// import texturePath from './textures/deepslate_diamond_ore.png'

export let controls: MapControls

const textureLoader = new THREE.TextureLoader();

const textureCube = textureLoader.load( `${window.location}/textures/deepslate_diamond_ore.png` );
// const textureCube = textureLoader.load( texturePath );

textureCube.minFilter = THREE.NearestFilter;
textureCube.magFilter = THREE.NearestFilter;

export function createCube(){
    const cube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({ map: textureCube}))
    ThreeScene.scene.add( cube );
    cube.position.set(0, 0, 0)
  }
// export function addLighting(){
//     const light = new THREE.DirectionalLight( 0xffffff, 1 );
//     light.position.set( 0, 10, 0 );
//     light.castShadow = true;
//     ThreeScene.scene.add( light );
//   }
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
  controls.maxDistance = 100
}