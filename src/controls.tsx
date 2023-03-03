import * as THREE from 'three';
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as ThreeScene from './threeScene'
import * as App from './App'

export let controls: MapControls

const loader = new THREE.TextureLoader()

let isFirstPick = true

let textureCube: any = undefined
loadPickedTexture('https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/deepslate_diamond_ore.png')
export async function loadPickedTexture(newTexture: string){
loader.load( newTexture, (texture) =>  {
  if (texture){
    textureCube = texture
    if (textureCube){
      textureCube.minFilter = THREE.NearestFilter;
      textureCube.magFilter = THREE.NearestFilter;
      hoverBlock.material.map = textureCube
      hoverBlock.material.opacity = 0.5
      hoverBlock.material.transparent = true
      hoverBlock.material.wireframe = false
      hoverBlock.material.needsUpdate = true
    }
    if (isFirstPick){
      createControls()
      createCube(0, 0, 0)
      isFirstPick = false
    }
  }
})
}

function createCube(x: number, y: number, z: number){
    let cube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { map: textureCube } ))
    cube.name = "block"
    ThreeScene.scene.add( cube );
    cube.position.set(x, y, z)
  }

let shiftDown = false; 
let hoverBlock = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { color: 'white', wireframe: true } ))
hoverBlock.name = "hoverBlock"
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
      if (App.mode !== 'Inspect'){
        controls.mouseButtons = {
          LEFT: undefined,
          MIDDLE: 1,
          RIGHT: undefined
        };
      }
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

  document.querySelector('canvas')?.addEventListener('mousemove', showBlockHover)
  ThreeScene.scene.add(hoverBlock)
  
  controls.addEventListener( 'change', () => {App.controlsParametersChange()} )

  document.querySelector('canvas')?.addEventListener('auxclick', blockget)
  document.querySelector('canvas')?.addEventListener('click', blockAdd)
  document.querySelector('canvas')?.addEventListener('contextmenu', blockRemove)
}
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
function findPlace(event: { clientX: number; clientY: number; }){
    pointer.x = ((event.clientX - (window.innerWidth*0.14)) / (window.innerWidth*0.86)  ) * 2 - 1;
    pointer.y = - ( (event.clientY) / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( pointer, ThreeScene.camera );
    let intersects = raycaster.intersectObjects( ThreeScene.scene.children );
    intersects = intersects.filter(e => e.object.name !== "hoverBlock")
    return intersects[0]
}
function blockAdd(event: { clientX: number; clientY: number; }){
  if (!shiftDown && App.mode !== 'Inspect'){
    let placeInfo = findPlace(event)
    if (placeInfo){
      if (placeInfo.object.name == "helpPlane"){
        createCube(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
      } else {
        if (App.mode == 'Build'){
          if (placeInfo.face){
            createCube(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
          }
        } else {
          if (placeInfo.face){
            createCube(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
          }
        }
      }
    }
  }
}
function blockRemove(event: { clientX: number; clientY: number; }){
  if (!shiftDown && App.mode !== 'Inspect'){
    let placeInfo = findPlace(event)
    if (placeInfo){
      if (placeInfo.object.name !== "helpPlane" && placeInfo.object.name !== "hoverBlock"){
        ThreeScene.scene.remove(placeInfo.object)
      }
    }
  }
}
function showBlockHover(event: { clientX: number; clientY: number; }){
  if (!shiftDown && App.mode !== 'Inspect'){
    hoverBlock.material.visible = true
    let placeInfo = findPlace(event)
    if (placeInfo){
      if (placeInfo.object.name == "helpPlane"){
        hoverBlock.position.set(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
      } else {
        if (App.mode == 'Build'){
          hoverBlock.material.map = textureCube
          hoverBlock.material.opacity = 0.5
          hoverBlock.material.transparent = true
          hoverBlock.material.wireframe = false
          hoverBlock.material.needsUpdate = true
          if (placeInfo.face){
            hoverBlock.position.set(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
          }
        } else {
          hoverBlock.material.map = null
          hoverBlock.material.opacity = 1
          hoverBlock.material.transparent = true
          hoverBlock.material.wireframe = true
          hoverBlock.material.needsUpdate = true
          hoverBlock.position.set(Math.round(placeInfo.object.position.x), Math.abs(Math.round(placeInfo.object.position.y+0.001)), Math.round(placeInfo.object.position.z))
        }
      }

    }
  } else {
    hoverBlock.material.visible = false
  }
}
interface MaterialObject3D extends THREE.Object3D {
  material: THREE.Material;
}
interface MappingObject3D extends THREE.Material {
  map: THREE.Mapping
}
function blockget(event: { clientX: number; clientY: number; }){
    let placeInfo = findPlace(event)
    if (placeInfo){
      if (placeInfo.object.name !== "helpPlane" && placeInfo.object.name !== "hoverBlock"){
        const object3D = placeInfo.object
        const materialObject3D = object3D as MaterialObject3D;
        const material = materialObject3D.material;
        const material3D = material as MappingObject3D
        const map = material3D.map 
        textureCube = map
      }
    }
}
export function modeSwitch(){
    switch (App.mode) {
      case 'Build':
        controls.mouseButtons = {
          LEFT: undefined,
          MIDDLE: 1,
          RIGHT: undefined
        };
        document.querySelector('canvas')?.removeEventListener('click', blockAdd)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockRemove)
        document.querySelector('canvas')?.removeEventListener('click', blockRemove)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockAdd)
        document.querySelector('canvas')?.addEventListener('click', blockAdd)
        document.querySelector('canvas')?.addEventListener('contextmenu', blockRemove)
        hoverBlock.material.map = textureCube
        hoverBlock.material.opacity = 0.5
        hoverBlock.material.transparent = true
        hoverBlock.material.wireframe = false
        hoverBlock.material.needsUpdate = true
        break;
      case 'Inspect':
          hoverBlock.material.visible = false
          controls.mouseButtons = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
          };
        break;
      case 'Remove':
        controls.mouseButtons = {
          LEFT: undefined,
          MIDDLE: 1,
          RIGHT: undefined
        };
        document.querySelector('canvas')?.removeEventListener('click', blockAdd)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockRemove)
        document.querySelector('canvas')?.removeEventListener('click', blockRemove)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockAdd)
        document.querySelector('canvas')?.addEventListener('click', blockRemove)
        document.querySelector('canvas')?.addEventListener('contextmenu', blockAdd)
        hoverBlock.material.map = null
        hoverBlock.material.opacity = 1
        hoverBlock.material.transparent = true
        hoverBlock.material.wireframe = true
        hoverBlock.material.needsUpdate = true
        break;
    }
}