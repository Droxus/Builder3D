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
    texture.format = THREE.RGBAFormat
    if (textureCube){
      textureCube.minFilter = THREE.NearestFilter;
      textureCube.magFilter = THREE.NearestFilter;

      textureCube.wrapS = THREE.RepeatWrapping;
      textureCube.wrapT = THREE.RepeatWrapping;
      const geometryWidth = 16; 
      const geometryHeight = 16; 
      const textureWidth = textureCube.image.width;
      const textureHeight = textureCube.image.height;
      const textureAspect = textureWidth / textureHeight;
      const geometryAspect = geometryWidth / geometryHeight; 
      if (textureAspect > geometryAspect) {
        textureCube.repeat.set(geometryWidth / textureWidth, 1);
      } else {
        textureCube.repeat.set(1, geometryHeight / textureHeight);
      }
      setHoverTextures()
    }
    if (isFirstPick){
      createControls()
      createCube(0, 0, 0)
      isFirstPick = false
    }
  }
})
}
function isFullBlock(): boolean{
  let isCube: boolean = true
  App.noCubeBlocks.forEach((item: string) => {
      if (App.pickedTexture.includes(item) && !App.pickedTexture.includes('block')) {
        return isCube = false
      }
  })
  return isCube
}
function setHoverTextures(){
  let materials = new THREE.MeshBasicMaterial({
    wireframe: false,
    opacity: 0.5,
    transparent: true,
    map: textureCube,
    depthWrite: false,
    side: THREE.DoubleSide,
    alphaTest: 0.5
  });
  if (isFullBlock()){
    hoverBlock.material.visible = false
    hoverBlock.visible = true
    hoverHalfBlock.visible = false
    hoverHalfBlock.children.forEach(e => (e as MaterialObject3D).material.visible = false)
  } else {
      hoverHalfBlock.visible = false
      hoverHalfBlock.children.forEach(e => (e as MaterialObject3D).material.visible = false)
      hoverBlock.material.visible = false
      hoverBlock.visible = true
  }
  hoverBlock.material = materials
  hoverHalfBlock.children.forEach(e => (e as MaterialObject3D).material = materials);
  (hoverHalfBlock.children[2] as MaterialObject3D).material = new THREE.MeshBasicMaterial({
    wireframe: false,
    opacity: 0,
    transparent: true,
    map: textureCube,
    depthWrite: false
  });
  if (App.mode == 'Remove'){
    hoverHalfBlock.children.forEach(e => (e as MaterialObject3D).material.visible = false)
    hoverHalfBlock.visible = false
    hoverBlock.material = new THREE.MeshBasicMaterial({
      wireframe: true,
      opacity: 1,
      transparent: true,
      map: null
    });
    hoverBlock.visible = true
  }
}
function createCube(x: number, y: number, z: number){
  let cube: any
    if (isFullBlock()){
      cube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true } ))
    } else {
      let firstPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
      let secondPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
      let helpedCube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { map: textureCube, opacity: 0, transparent: true, depthWrite: false } ))
      secondPlane.rotation.set(0, Math.PI / 2, 0)
      cube = new THREE.Group()
      cube.add(firstPlane)
      cube.add(secondPlane)
      cube.add(helpedCube)
    }
    cube.name = "block"
    ThreeScene.scene.add( cube );
    cube.position.set(x, y, z)
  }

let shiftDown = false; 
let hoverBlock = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { color: 'white', wireframe: true } ))
let hoverHalfBlock = new THREE.Group()
let firstPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( {transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
let secondPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( {transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
let helpedCube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( {opacity: 0, transparent: true, depthWrite: false } ))
firstPlane.name = "hoverBlock"
secondPlane.name = "hoverBlock"
helpedCube.name = "hoverBlock"
secondPlane.rotation.set(0, Math.PI / 2, 0)
hoverHalfBlock.add(firstPlane)
hoverHalfBlock.add(secondPlane)
hoverHalfBlock.add(helpedCube)
hoverHalfBlock.name = "hoverBlock"
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
      hoverBlock.visible = false
      hoverHalfBlock.visible = false
      if (App.mode !== 'Inspect'){
      controls.mouseButtons = {
        LEFT: 2,
        MIDDLE: 1,
        RIGHT: 0
      };
    }
    }
  });
  document.addEventListener('keyup', event => {
    if (event.keyCode === 16) {
      shiftDown = false;
      hoverBlock.visible = true
      hoverHalfBlock.visible = true
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
  ThreeScene.scene.add(hoverHalfBlock)

  controls.addEventListener( 'change', () => {App.controlsParametersChange()} )

  document.querySelector('canvas')?.addEventListener('mousedown', (event) => {
    if (event.button == 1 || event.buttons == 4 ) {
      blockget(event)
    }
  })
  document.querySelector('canvas')?.addEventListener('click', blockAdd)
  document.querySelector('canvas')?.addEventListener('contextmenu', blockRemove)
}
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
function findPlace(event: { clientX: number; clientY: number; }){
    pointer.x = ((event.clientX - (300)) / (window.innerWidth-300)  ) * 2 - 1;
    pointer.y = - ( (event.clientY) / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( pointer, ThreeScene.camera );
    let intersects = raycaster.intersectObjects( ThreeScene.scene.children );
    intersects = intersects.filter(e => e.object.name !== "hoverBlock")
    intersects = intersects.filter(e => (e.object as GeometryObject3D).geometry instanceof THREE.BoxGeometry)
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
            if (placeInfo.object.parent && placeInfo.object.parent.children.length == 3){
              createCube(Math.round(placeInfo.object.parent.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.parent.position.z + placeInfo.face.normal.z))
            } else {
              createCube(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
            }
          }
        } else {
          if (placeInfo.face){
            if (placeInfo.object.parent && placeInfo.object.parent.children.length == 3){
              createCube(Math.round(placeInfo.object.parent.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.parent.position.z + placeInfo.face.normal.z))
            } else {
              createCube(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
            }
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
        if (placeInfo.object.parent && placeInfo.object.parent.children.length == 3){
          ThreeScene.scene.remove(placeInfo.object.parent)
        } else {
          ThreeScene.scene.remove(placeInfo.object)
        }
      }
    }
  }
}
let hover
function showBlockHover(event: { clientX: number; clientY: number; }){
  if (isFullBlock()){
    hover = hoverBlock
    hoverHalfBlock.children.forEach(e => (e as MaterialObject3D).material.visible = false)
    hoverHalfBlock.visible = false
  } else {
    hover = hoverHalfBlock
    hoverBlock.material.visible = false
    hoverBlock.visible = false
  }
  if (App.mode == 'Remove'){
    hover = hoverBlock
    hoverHalfBlock.children.forEach(e => (e as MaterialObject3D).material.visible = false)
    hoverHalfBlock.visible = false
    hoverBlock.material.visible = true
    hoverBlock.visible = true
  }
  if (!shiftDown && App.mode !== 'Inspect'){
    if (hover.children.length > 0){
      hover.children.forEach(e => (e as MaterialObject3D).material.visible = true)
      hover.visible = true
    } else {
      (hover as MaterialObject3D).material.visible = true
    }
    let placeInfo = findPlace(event)
    if (placeInfo){
      if (placeInfo.object.name == "helpPlane"){
        hover.position.set(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
      } else {
        if (App.mode == 'Build'){
            let materials = new THREE.MeshBasicMaterial({
              wireframe: false,
              opacity: 0.5,
              transparent: true,
              map: textureCube,
              depthWrite: false,
              side: THREE.DoubleSide
            });
            if (hover.children.length > 0){
              hover.children.forEach(e => (e as MaterialObject3D).material = materials);
              (hover.children[2] as MaterialObject3D).material = new THREE.MeshBasicMaterial({
                wireframe: false,
                opacity: 0,
                transparent: true,
                map: textureCube,
                depthWrite: false
              });
            } else {
              (hover as MaterialObject3D).material = materials
            }
          if (placeInfo.face){
            if (placeInfo.object.parent && placeInfo.object.parent.children.length == 3){
              hover.position.set(Math.round(placeInfo.object.parent.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001 + placeInfo.face.normal.y)), 
              Math.round(placeInfo.object.parent.position.z + placeInfo.face.normal.z))
            } else {
              if (placeInfo.object.parent && placeInfo.object.parent.children.length == 3){
                hover.position.set(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
              } else {
                hover.position.set(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
              }
            }
          }
        } else {
          let materials = new THREE.MeshBasicMaterial({
            wireframe: true,
            opacity: 1,
            transparent: true,
            map: null
          });
          if (hover.children.length > 0){
            hover.children.forEach(e => (e as MaterialObject3D).material = materials)
          } else {
            (hover as MaterialObject3D).material = materials
          }
          if (placeInfo.object.parent && placeInfo.object.parent.children.length == 3){
            hover.position.set(Math.round(placeInfo.object.parent.position.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001)), Math.round(placeInfo.object.parent.position.z))
          } else {
            hover.position.set(Math.round(placeInfo.object.position.x), Math.abs(Math.round(placeInfo.object.position.y+0.001)), Math.round(placeInfo.object.position.z))
          }
        }
      }

    }
  } else {
    if (hover.children.length > 0){
      hover.children.forEach(e => (e as MaterialObject3D).material.visible = true)
    } else {
      (hover as MaterialObject3D).material.visible = true
    }
  }
}
interface GeometryObject3D extends THREE.Object3D {
  geometry: THREE.PlaneGeometry | THREE.BoxGeometry;
}
interface MaterialObject3D extends THREE.Object3D {
  material: THREE.Material;
}
interface MappingObject3D extends THREE.Material {
  map: THREE.Mapping | null
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
        setHoverTextures()
        break;
      case 'Inspect':
          hoverBlock.material.visible = false
          hoverBlock.visible = false
          hoverHalfBlock.children.forEach(e => (e as MaterialObject3D).material.visible = false)
          hoverHalfBlock.visible = false
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
        hoverBlock.visible = true
        hoverBlock.material.visible = true
        break;
    }
}