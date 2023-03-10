import * as THREE from 'three';
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as ThreeScene from './threeScene'
import * as App from './App'

export let controls: MapControls

const loader = new THREE.TextureLoader()

let isFirstPick = true

let textureCube: any = undefined, textureCubeTop: any, textureCubeBottom: any

interface textureName extends THREE.Object3D {
  textureName: string;
}

loadPickedTexture('https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/deepslate_diamond_ore.png')
export async function loadPickedTexture(newTexture: string){
loader.load( newTexture, (texture) =>  {
  if (texture){
    onTextureSwitch(texture)
  }
})
}
function onTextureSwitch(texture: any){
  textureCubeBottom = undefined
  textureCubeTop = undefined
    let isLoadedAllNotSideTextures = 0  

    if (App.pickedTexture.includes('side')){
      loader.load( App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.slice(0, App.pickedTexture.length-4).replaceAll(' ', '_') + 'bottom'))[0]?.download_url, (textureBottom) => {textureCubeBottom = textureBottom; isLoadedAllNotSideTextures++; setTextureCube()}, () => {}, () => {isLoadedAllNotSideTextures++; setTextureCube()})
      loader.load( App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.slice(0, App.pickedTexture.length-4).replaceAll(' ', '_') + 'top'))[0]?.download_url, (textureTop) => {textureCubeTop = textureTop; isLoadedAllNotSideTextures++; setTextureCube()}, () => {}, () => {isLoadedAllNotSideTextures++; setTextureCube()})
    } else if (App.pickedTexture.includes('log')) {
      loader.load( App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.replaceAll(' ', '_') + '_bottom'))[0]?.download_url, (textureBottom) => {textureCubeBottom = textureBottom; isLoadedAllNotSideTextures++; setTextureCube()}, () => {}, () => {isLoadedAllNotSideTextures++; setTextureCube()})
      loader.load( App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.replaceAll(' ', '_') + '_top'))[0]?.download_url, (textureTop) => {textureCubeTop = textureTop; isLoadedAllNotSideTextures++; setTextureCube()}, () => {}, () => {isLoadedAllNotSideTextures++; setTextureCube()})
    }else if (App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.replaceAll(' ', '_') + '_top'))){
      loader.load( textureCubeTop = App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.replaceAll(' ', '_') + '_top'))[0]?.download_url, (textureTop) => {textureCubeTop = textureTop;isLoadedAllNotSideTextures += 2; setTextureCube()}, () => {}, () => {isLoadedAllNotSideTextures += 2; setTextureCube()})
    } else if (App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.replaceAll(' ', '_') + '_bottom'))){
      loader.load( textureCubeBottom = App.allTextures.filter((e: any) => e.name.includes(App.pickedTexture.replaceAll(' ', '_') + '_bottom'))[0]?.download_url, (textureBottom) => {textureCubeBottom = textureBottom;isLoadedAllNotSideTextures += 2; setTextureCube()}, () => {}, () => {isLoadedAllNotSideTextures += 2; setTextureCube()})
    }
    setTextureCube()
    function setTextureCube(){
      if (isLoadedAllNotSideTextures > 1 || isFirstPick){
        textureCube = texture
        if (!textureCubeBottom){
          textureCubeBottom = textureCubeTop || textureCube
        }
        if (!textureCubeTop){
          textureCubeTop = textureCubeBottom || textureCube
        }
        let texturesArr = [textureCubeBottom, textureCubeTop, textureCube]
        texture.format = THREE.RGBAFormat

        texturesArr.forEach((e:any) => {
          if (e){
            e.minFilter = THREE.NearestFilter;
            e.magFilter = THREE.NearestFilter;
            e.wrapS = THREE.RepeatWrapping;
            e.wrapT = THREE.RepeatWrapping;
          }
        })

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
        if (isFirstPick){
          createControls()
          createCube(0, 0, 0)
          isFirstPick = false
        }
      }
    }
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
  if (isFullBlock()){
    let materials = [
      new THREE.MeshBasicMaterial({ map: textureCubeBottom || textureCubeTop || textureCube, transparent: true, opacity: 0.5, wireframe: false, depthWrite: false, alphaTest: 0.5 }),
      new THREE.MeshBasicMaterial({ map: textureCubeTop || textureCubeBottom || textureCube, transparent: true, opacity: 0.5, wireframe: false, depthWrite: false, alphaTest: 0.5 }),
      new THREE.MeshBasicMaterial({ map: textureCube, transparent: true, opacity: 0.5, wireframe: false, depthWrite: false, alphaTest: 0.5 })
    ]
    hoverBlock.material = materials
    hoverBlock.visible = true
    hoverHalfBlock.visible = false
  } else {
      hoverHalfBlock.visible = false
      hoverBlock.visible = true
      hoverHalfBlock.children.forEach(child => {
        (child as MaterialObject3D).material = new THREE.MeshBasicMaterial({
            wireframe: false,
            opacity: 0.5,
            transparent: true,
            map: textureCube,
            depthWrite: false,
            side: THREE.DoubleSide,
            alphaTest: 0.5
          });
        });
        (hoverHalfBlock.children[2] as MaterialObject3D).material = new THREE.MeshBasicMaterial({
          wireframe: false,
          opacity: 0,
          transparent: true,
          map: textureCube,
          depthWrite: false
        });
  }
  if (App.mode == 'Remove'){
    hoverBlock.material.forEach(e => e.map = null)
    hoverBlock.material.forEach(e => e.opacity = 1)
    hoverBlock.material.forEach(e => e.transparent = true)
    hoverBlock.material.forEach(e => e.wireframe = true)
    hoverBlock.material.forEach(e => e.needsUpdate = true)
    hoverBlock.visible = true
    hoverBlock.material.forEach(e => e.visible = true)
  }
}
function createCube(x: number, y: number, z: number){
  let cube: any, helpedCube: any
    if (isFullBlock()){
      if (textureCube){
        textureCube.wrapS = textureCube.wrapT = THREE.RepeatWrapping;
        textureCube.repeat.set(16 / textureCube.image.width, 16 / textureCube.image.height);
      }
      if (textureCubeTop){
        textureCubeTop.wrapS = textureCubeTop.wrapT = THREE.RepeatWrapping;
        textureCubeTop.repeat.set(16 / textureCube.image.width, 16 / textureCube.image.height);
      }
      if (textureCubeBottom){
        textureCubeBottom.wrapS = textureCubeBottom.wrapT = THREE.RepeatWrapping;
        textureCubeBottom.repeat.set(16 / textureCube.image.width, 16 / textureCube.image.height);
      }
      let sideMaterial, topMaterial, bottomMaterial;
      bottomMaterial = new THREE.MeshBasicMaterial({ map: textureCubeBottom || textureCubeTop || textureCube, transparent: true, side: THREE.DoubleSide });
      topMaterial = new THREE.MeshBasicMaterial({ map: textureCubeTop || textureCubeBottom || textureCube, transparent: true, side: THREE.DoubleSide });
      sideMaterial = new THREE.MeshBasicMaterial({ map: textureCube, transparent: true, side: THREE.DoubleSide });
      const textures = [
        textureCubeBottom || textureCubeTop || textureCube,
        textureCubeTop || textureCubeBottom || textureCube,
        textureCube
      ];
      let geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
      geometry.groups.forEach((group, i) => {
        if (i === 2) {
          group.materialIndex = 0;
        } else if (i === 0 || i === 1 || i === 4 || i === 5) {
          group.materialIndex = 1;
        } else {
          group.materialIndex = 2;
        }
      });
      
      cube = new THREE.Mesh(geometry, [topMaterial, sideMaterial, bottomMaterial]);
      ThreeScene.scene.add(cube);
    } else {
      let firstPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
      let secondPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
      helpedCube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { map: textureCube, opacity: 0, transparent: true, depthWrite: false } ))
      secondPlane.rotation.set(0, Math.PI / 2, 0)
      cube = new THREE.Group();
      cube.add(firstPlane);
      cube.add(secondPlane);
      cube.add(helpedCube);
      (helpedCube as textureName).textureName = App.pickedTexture;
    }
    cube.textureName = App.pickedTexture
    cube.name = "block"
    ThreeScene.scene.add( cube );
    cube.position.set(x, y, z)
  }

let shiftDown = false; 
let materialsForHoverBlock = [new THREE.MeshBasicMaterial( { color: 'white', wireframe: true }), 
  new THREE.MeshBasicMaterial( { color: 'white', wireframe: true }), 
  new THREE.MeshBasicMaterial( { color: 'white', wireframe: true })
]
let hoverBlock = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), materialsForHoverBlock )
hoverBlock.geometry.groups.forEach((group, i) => {
  if (i === 2) {
    group.materialIndex = 1;
  } else if (i === 0 || i === 1 || i === 4 || i === 5) {
    group.materialIndex = 2;
  } else {
    group.materialIndex = 0;
  }
});
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
  controls.enableZoom = false;
  document.addEventListener('keydown', event => {
    if (event.keyCode === 16) {
      shiftDown = true;
      hoverBlock.visible = false
      if (App.mode !== 'Inspect'){
      controls.mouseButtons = {
        LEFT: 2,
        MIDDLE: 1,
        RIGHT: 0
      };
      controls.enableZoom = true;
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
          MIDDLE: undefined,
          RIGHT: undefined
        };
        setHoverTextures()
        controls.enableZoom = false;
      }
    }
  });
  controls.mouseButtons = {
    LEFT: undefined,
    MIDDLE: undefined,
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
  document.querySelector('canvas')?.addEventListener('wheel', blockRotate)
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
// let rotationStage = [
//   {x: Math.PI/0.5, y: Math.PI/0.5, z: Math.PI/0.5, used: true},
//   {x: Math.PI/0.5, y: Math.PI/2, z: Math.PI/2, used: false},
//   {x: Math.PI/0.5, y: Math.PI/1, z: Math.PI/1, used: false},
//   {x: Math.PI/0.5, y: Math.PI * 1.5, z: Math.PI * 1.5, used: false},
// ]
function blockRotate(){
  // console.log('aaa')
  if (!shiftDown){
    hoverBlock.rotation.set(hoverBlock.rotation.x  + Math.PI/2, hoverBlock.rotation.y, hoverBlock.rotation.z)
  }
}
let hover
function showBlockHover(event: { clientX: number; clientY: number; }){
  if (isFullBlock()){
    hover = hoverBlock
    hoverHalfBlock.visible = false
  } else {
    hover = hoverHalfBlock
    hoverBlock.visible = false
  }
  if (App.mode == 'Remove'){
    hover = hoverBlock
    hoverHalfBlock.visible = false
    hoverBlock.visible = true
  }
  if (!shiftDown && App.mode !== 'Inspect'){
    if (hover.children.length > 0){
      if (hover.children)
      hover.visible = true
    } else {
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
              })
            } else {
              (hover as MaterialsObject3D).material.forEach(e => e = materials)
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
            hover.children.forEach(e => (e as MaterialsObject3D).material.forEach(e => e = materials))
          } else {
            (hover as MaterialsObject3D).material.forEach(e => e = materials)
          }
          if (placeInfo.object.parent && placeInfo.object.parent.children.length == 3){
            hover.position.set(Math.round(placeInfo.object.parent.position.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001)), Math.round(placeInfo.object.parent.position.z))
          } else {
            hover.position.set(Math.round(placeInfo.object.position.x), Math.abs(Math.round(placeInfo.object.position.y+0.001)), Math.round(placeInfo.object.position.z))
          }
        }
      }

    }
  }
}
interface GeometryObject3D extends THREE.Object3D {
  geometry: THREE.PlaneGeometry | THREE.BoxGeometry;
}
interface MaterialsObject3D extends THREE.Object3D {
  material: THREE.Material[];
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
        const material3D = material as any
        if (Array.isArray(material3D)){
          textureCube = material3D[1].map
        } else {
          textureCube = material3D.map
        }
        App.setNewPickedTexture((placeInfo.object as textureName).textureName)
        onTextureSwitch(textureCube)
        setHoverTextures()
      }
    }
}
export function modeSwitch(){
    switch (App.mode) {
      case 'Build':
        controls.mouseButtons = {
          LEFT: undefined,
          MIDDLE: undefined,
          RIGHT: undefined
        };
        document.querySelector('canvas')?.removeEventListener('click', blockAdd)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockRemove)
        document.querySelector('canvas')?.removeEventListener('click', blockRemove)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockAdd)
        document.querySelector('canvas')?.addEventListener('click', blockAdd)
        document.querySelector('canvas')?.addEventListener('contextmenu', blockRemove)
        setHoverTextures()
        controls.enableZoom = false;
        break;
      case 'Inspect':
          hoverBlock.visible = false
          hoverHalfBlock.visible = false
          controls.mouseButtons = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
          };
          controls.enableZoom = true;
        break;
      case 'Remove':
        controls.mouseButtons = {
          LEFT: undefined,
          MIDDLE: undefined,
          RIGHT: undefined
        };
        document.querySelector('canvas')?.removeEventListener('click', blockAdd)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockRemove)
        document.querySelector('canvas')?.removeEventListener('click', blockRemove)
        document.querySelector('canvas')?.removeEventListener('contextmenu', blockAdd)
        document.querySelector('canvas')?.addEventListener('click', blockRemove)
        document.querySelector('canvas')?.addEventListener('contextmenu', blockAdd)
        setHoverTextures()
        controls.enableZoom = false;
        break;
    }
}