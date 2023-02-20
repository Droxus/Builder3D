import * as THREE from 'three';

import * as ThreeScene from './threeScene'

// import '../textures'

const textureLoader = new THREE.TextureLoader();
// loader.setPath( '../textures' );

const textureCube = textureLoader.load( '../textures/deepslate_diamond_ore.png' );

export function createCube(){
    const cube = new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ map: textureCube}))
    ThreeScene.scene.add( cube );
    // cube.receiveShadow = true
    // cube.castShadow = true
    cube.position.set(0, 0, -5)
  }
// export function addLighting(){
//     const light = new THREE.DirectionalLight( 0xffffff, 1 );
//     light.position.set( 0, 10, 0 );
//     light.castShadow = true;
//     ThreeScene.scene.add( light );
//   }