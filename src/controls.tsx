import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as ThreeScene from './threeScene'
import * as App from './App'
import * as Scene from './Scene'

export let controls: any
export let keysPressed = {
  LEFT: false,
  UP: false,
  RIGHT: false,
  BOTTOM: false,
};

const loader = new THREE.TextureLoader()

let isFirstPick = true

export let textureCube: any = undefined, textureCubeTop: any, textureCubeBottom: any;

export let thisSceneContains: any = [];

export let historyOfScene: any[] = [];

interface textureName extends THREE.Object3D {
  textureName: string;
}
export function setIsFirstPick(value: boolean){
  isFirstPick = value
}
export function setControls(value: any){
  controls = value
}
// loadPickedTexture('https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/debug.png')

export function setThisSceneContains(value: any){
  thisSceneContains = value
}
export async function loadPickedTexture(newTexture: string){
    return onTextureSwitch(newTexture)
}
export async function onTextureSwitch(texture: string, exported: boolean = false){
  return new Promise((resolveInner) => {
    let normalTextureName = texture
    if (normalTextureName){
      normalTextureName.slice(0, texture.length-4)
    }
    if (texture.slice(-4) !== '.png'){
      texture = texture.replaceAll(' ', '_').concat('.png')
    }
    textureCubeBottom = undefined
    textureCubeTop = undefined
    textureCube = undefined
    if (texture.includes('side')){
        Promise.all([
          new Promise((resolve) => {
            loader.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${texture}`, (textCube) => {textureCube = textCube; resolve(textCube)}, () => {}, () => {resolve(undefined)})
          }),
          new Promise((resolve) => {
            loader.load( Scene.allTextures.filter((e: any) => e.name.includes(texture.slice(0, texture.length-8).replaceAll(' ', '_') + 'bottom'))[0]?.download_url, (textureBottom) => {textureCubeBottom = textureBottom; resolve(textureBottom)}, () => {}, () => {resolve(undefined)})
          }),
          new Promise((resolve) => {
            loader.load( Scene.allTextures.filter((e: any) => e.name.includes(texture.slice(0, texture.length-8).replaceAll(' ', '_') + 'top'))[0]?.download_url, (textureTop) => {textureCubeTop = textureTop; resolve(textureTop)}, () => {}, () => {resolve(undefined)})
          })
        ]).then((e) => {
          return setTextureCube(e[0], e[1], e[2])
        })
      } else if (texture.includes('log')) {
        Promise.all([
          new Promise((resolve) => {
            loader.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${texture}`, (textCube) => {textureCube = textCube; resolve(textCube)}, () => {}, () => {resolve(undefined)})
          }),
          new Promise((resolve) => {
            loader.load( Scene.allTextures.filter((e: any) => e.name.includes(normalTextureName.slice(0, texture.length-4).replaceAll(' ', '_') + '_bottom'))[0]?.download_url, (textureBottom) => {textureCubeBottom = textureBottom; resolve(textureBottom)}, () => {}, () => {resolve(undefined)})
          }),
          new Promise((resolve) => {
            loader.load( Scene.allTextures.filter((e: any) => e.name.includes(normalTextureName.slice(0, texture.length-4).replaceAll(' ', '_') + '_top'))[0]?.download_url, (textureTop) => {textureCubeTop = textureTop; resolve(textureTop)}, () => {}, () => {resolve(undefined)})
          })
        ]).then((e) => {
          return setTextureCube(e[0], e[1], e[2])
        })
      } else if (Scene.allTextures.filter((e: any) => e.name.includes(normalTextureName.replaceAll(' ', '_') + '_top'))){
        Promise.all([
          new Promise((resolve) => {
            loader.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${texture}`, (textCube) => {textureCube = textCube; resolve(textCube)}, () => {}, () => {resolve(undefined)})
          }),
          new Promise((resolve) => {
            loader.load( textureCubeTop = Scene.allTextures.filter((e: any) => e.name.includes(normalTextureName.replaceAll(' ', '_') + '_top'))[0]?.download_url, (textureTop) => {textureCubeTop = textureTop; resolve(textureTop)}, () => {}, () => {resolve(undefined)})
          })
        ]).then((e) => {
          return setTextureCube(e[0], undefined, e[1])
        })
      } else if (Scene.allTextures.filter((e: any) => e.name.includes(normalTextureName.replaceAll(' ', '_') + '_bottom'))){
        Promise.all([
          new Promise((resolve) => {
            loader.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${texture}`, (textCube) => {textureCube = textCube; resolve(textCube)}, () => {}, () => {resolve(undefined)})
          }),
          new Promise((resolve) => {
            loader.load( textureCubeBottom = Scene.allTextures.filter((e: any) => e.name.includes(normalTextureName.replaceAll(' ', '_') + '_bottom'))[0]?.download_url, (textureBottom) => {textureCubeBottom = textureBottom; resolve(textureBottom)}, () => {}, () => {resolve(undefined)})
          })
        ]).then((e) => {
          return setTextureCube(e[0], e[1], undefined)
        })
      } else {
        new Promise((resolve) => {
          loader.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${texture}`, (textCube) => {textureCube = textCube; resolve(textCube)}, () => {}, () => {resolve(undefined)})
        }).then((e) => {
          return setTextureCube(e, undefined, undefined)
        })
      }
      function setTextureCube(firstTexture: any, secondTexture: any, thirdTexture: any){
        textureCube = firstTexture
        textureCubeBottom = secondTexture
        textureCubeTop = thirdTexture


        textureCube.format = THREE.RGBAFormat
        
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
          if (!textureCubeBottom){
            textureCubeBottom = textureCubeTop || textureCube
          }
          if (!textureCubeTop){
            textureCubeTop = textureCubeBottom || textureCube
          }
          let texturesArr = [textureCubeBottom, textureCubeTop, textureCube]
      
          texturesArr.forEach((e:any) => {
            if (e){
              e.minFilter = THREE.NearestFilter;
              e.magFilter = THREE.NearestFilter;
              e.wrapS = THREE.RepeatWrapping;
              e.wrapT = THREE.RepeatWrapping;
            }
          })
          if (!exported) {
            setHoverTextures()
            if (isFirstPick){
              isFirstPick = false
              if (ThreeScene.thisSceneLocal.contains.length < 1){
                createCube(0, 0, 0)
                Scene.setIsSceneLoaded(true)
              } else {
                loadScene()
              }
            }
          }
            resolveInner([textureCube, textureCubeTop, textureCubeBottom])
        }
  })
}

function isFullBlock(): boolean{
  let isCube: boolean = true
  Scene.noCubeBlocks.forEach((item: string) => {
      if (Scene.pickedTexture.includes(item) && !Scene.pickedTexture.includes('block')) {
        return isCube = false
      }
  })
  return isCube
}
function setHoverTextures(){
  if (!shiftDown && textureCube){
    if (isFullBlock()){
      let materials = [
        new THREE.MeshBasicMaterial({ map: textureCubeBottom || textureCubeTop || textureCube, transparent: true, opacity: 0.5, wireframe: false, depthWrite: false, alphaTest: 0.0 }),
        new THREE.MeshBasicMaterial({ map: textureCubeTop || textureCubeBottom || textureCube, transparent: true, opacity: 0.5, wireframe: false, depthWrite: false, alphaTest: 0.0 }),
        new THREE.MeshBasicMaterial({ map: textureCube, transparent: true, opacity: 0.5, wireframe: false, depthWrite: false, alphaTest: 0.0 })
      ]
      hoverBlock.children.forEach((child: any) => child.material = materials)
      hoverBlock.visible = true
      hoverHalfBlock.visible = false
      hoverBlock.position.set(hoverHalfBlock.position.x, hoverHalfBlock.position.y, hoverHalfBlock.position.z)
    } else {
        hoverBlock.visible = false
        hoverHalfBlock.visible = true
        hoverHalfBlock.position.set(hoverBlock.position.x, hoverBlock.position.y, hoverBlock.position.z)
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
    if (Scene.mode == 'Remove'){
      hoverBlock.children.forEach((child: any) => child.material.forEach((e: any) => e.map = null))
      hoverBlock.children.forEach((child: any) => child.material.forEach((e: any) => e.opacity = 1))
      hoverBlock.children.forEach((child: any) => child.material.forEach((e: any) => e.transparent = true))
      hoverBlock.children.forEach((child: any) => child.material.forEach((e: any) => e.wireframe = true))
      hoverBlock.children.forEach((child: any) => child.material.forEach((e: any) => e.needsUpdate = true));
      hoverBlock.children.forEach((child: any) => child.material.forEach((e: any) => e.visible = true));
      hoverFullBlock.visible = true
      hoverStairs.visible = false;
      hoverSlabs.visible = false;
      hoverBlock.visible = true
    } else if (Scene.mode == 'Inspect') {
      hoverBlock.visible = false
      hoverHalfBlock.visible = false
    }
  } else {
    hoverBlock.position.set(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
    hoverHalfBlock.position.set(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
  }
}
export function createCube(x: number, y: number, z: number, texture?: string, type?: string, rotationX?: number, rotationY?: number, rotationZ?: number){
  if (!thisSceneContains.find((e: any) => e.position.x == x && e.position.y == y && e.position.z == z)){
  let cube: any, helpedCube: any;
  if (type !== undefined){
    Scene.setBlockType(type)
  }
  if (texture !== undefined){
    Scene.setPickedTexture(texture)
  }
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
      let geometry
      if (Scene.blockType == 'Slabs'){
        geometry = new THREE.BoxGeometry(1, 0.5, 1, 1, 1, 1);
        let slabsHelped = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 1, 1, 1), new THREE.MeshBasicMaterial({ map: textureCube, opacity: 0, transparent: true, depthWrite: false }));
        let slabs = new THREE.Mesh(geometry, [topMaterial, sideMaterial, bottomMaterial]);
        geometry.groups.forEach((group, i) => {
          if (i === 2) {
            group.materialIndex = 0;
          } else if (i === 0 || i === 1 || i === 4 || i === 5) {
            group.materialIndex = 1;
          } else {
            group.materialIndex = 2;
          }
        });
        slabs.position.set(0, -0.25, 0)
        slabs.name = "slabs"
        slabsHelped.name = "slabsHelped"
        cube = new THREE.Group();
        cube.add(slabs);
        cube.add(slabsHelped);
        cube.name = "slabs"
      } else if (Scene.blockType == 'Stairs') {
        geometry = new THREE.BoxGeometry(1, 0.5, 1, 1, 1, 1);
        let stairsHelped = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 1, 1, 1), new THREE.MeshBasicMaterial({ map: textureCube, opacity: 0, transparent: true, depthWrite: false }));
        let stairsDown = new THREE.Mesh(geometry, sideMaterial);
        geometry = new THREE.BoxGeometry(0.5, 0.5, 1, 1, 1, 1);
        let stairsUp = new THREE.Mesh(geometry, [topMaterial, sideMaterial, bottomMaterial]);
        geometry.groups.forEach((group, i) => {
          if (i === 2) {
            group.materialIndex = 0;
          } else if (i === 0 || i === 1 || i === 4 || i === 5) {
            group.materialIndex = 1;
          } else {
            group.materialIndex = 2;
          }
        });
        stairsDown.position.set(0, -0.25, 0)
        stairsUp.position.set(0.25, 0.25, 0)
        stairsDown.name = "stairs"
        stairsUp.name = "stairs"
        stairsHelped.name = "stairsHelped"
        cube = new THREE.Group();
        cube.add(stairsDown);
        cube.add(stairsUp);
        cube.add(stairsHelped);
        cube.name = "stairs"
      } else {
        geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
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
        cube.name = "block"
      }
      ThreeScene.scene?.add(cube);
      ThreeScene.animate()
      cube.rotation.set(hoverBlock.rotation.x, hoverBlock.rotation.y, hoverBlock.rotation.z)
    } else {
      let firstPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
      let secondPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
      helpedCube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { map: textureCube, opacity: 0, transparent: true, depthWrite: false } ))
      secondPlane.rotation.set(0, Math.PI / 2, 0)
      cube = new THREE.Group();
      cube.add(firstPlane);
      cube.add(secondPlane);
      cube.add(helpedCube);
      (helpedCube as textureName).textureName = Scene.pickedTexture;
      cube.rotation.set(hoverHalfBlock.rotation.x, hoverHalfBlock.rotation.y, hoverHalfBlock.rotation.z)
      cube.name = "block"
    }
    cube.textureName = Scene.pickedTexture
    ThreeScene.scene?.add( cube );
    ThreeScene.animate()
    cube.position.set(x, y, z)
    if (rotationX !== undefined && rotationY !== undefined && rotationZ !== undefined) {
      cube.rotation.set(rotationX, rotationY, rotationZ)
    }
      thisSceneContains.push({
        position: {
          x: cube.position.x,
          y: cube.position.y,
          z: cube.position.z
        },
        textureName: Scene.pickedTexture,
        blockType: cube.name ? cube.name[0].toUpperCase().concat('', cube.name.slice(1)) : 'Block',
        rotation: {
          _x: cube.rotation.x,
          _y: cube.rotation.y,
          _z: cube.rotation.z
        }
      })
      historyOfScene.push({action: 'create', blockInfo: thisSceneContains[thisSceneContains.length-1]})
      ThreeScene.thisSceneLocal.contains = thisSceneContains
      localStorage.setItem( ThreeScene.sceneID, JSON.stringify( ThreeScene.thisSceneLocal ) )
      // console.log( JSON.parse( String( localStorage.getItem( ThreeScene.sceneID ) ) ) )
    }
  }

let shiftDown = false; 
let materialsForHoverBlock = [new THREE.MeshBasicMaterial( { color: 'white', wireframe: true }), 
  new THREE.MeshBasicMaterial( { color: 'white', wireframe: true }), 
  new THREE.MeshBasicMaterial( { color: 'white', wireframe: true })
]
let hoverBlock = new THREE.Group();
let hoverFullBlock = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), materialsForHoverBlock )
let hoverSlabs = new THREE.Mesh(new THREE.BoxGeometry(1, 0.5, 1), materialsForHoverBlock);
let hoverStairs = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 1), materialsForHoverBlock);
hoverBlock.add(hoverFullBlock);
hoverBlock.add(hoverSlabs);
hoverBlock.add(hoverStairs);
hoverSlabs.position.set(0, -0.25, 0);
hoverStairs.position.set(0.25, 0.25, 0);
hoverStairs.visible = false;
hoverSlabs.visible = false;
(hoverBlock.children as any).forEach((child: any) => child.geometry.groups.forEach((group: any, i: number) => {
  if (i === 2) {
    group.materialIndex = 1;
  } else if (i === 0 || i === 1 || i === 4 || i === 5) {
    group.materialIndex = 2;
  } else {
    group.materialIndex = 0;
  }
}));
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
hoverFullBlock.name = "hoverBlock"
hoverBlock.name = "hoverBlock"
hoverSlabs.name = "hoverBlock"
hoverStairs.name = "hoverBlock"
export function createControls(){
  if (ThreeScene.camera){
    controls = new OrbitControls( ThreeScene.camera, ThreeScene.renderer?.domElement );
  }
  controls.target.set(0, 0, 0)
  controls.autoRotate = false
  controls.autoRotateSpeed = 1
  controls.enableDamping = true
  controls.dampingFactor = .05
  controls.enablePan = true;
  controls.enableZoom = false;
  document.addEventListener('keydown', event => {
    if (event.keyCode === 16) {
      event.preventDefault()
      shiftDown = true;
      hoverBlock.visible = false
      hoverHalfBlock.visible = false
      if (Scene.mode !== 'Inspect'){
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
      if (Scene.mode == 'Inspect') {
        hoverBlock.visible = false
        hoverHalfBlock.visible = false
      }
      if (Scene.mode !== 'Inspect'){
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
  
  controls.keys = {
    LEFT: 'KeyA',
    UP: 'KeyW', 
    RIGHT: 'KeyD', 
    BOTTOM: 'KeyS'
  };

  controls.listenToKeyEvents(window);
  controls.keyPanSpeed = 50;
  controls.addEventListener( 'change', ThreeScene.animate );

  function rotateCamera(deltaAzimuth: any, deltaPolar: any, deltaRadius: any) {
    if (ThreeScene.camera){
      const spherical = new THREE.Spherical().setFromVector3(ThreeScene.camera.position.clone().sub(controls.target));
      spherical.theta += deltaAzimuth;
      spherical.phi += deltaPolar;
      spherical.radius += deltaRadius;
      const EPS = 0.000001;
      spherical.phi = Math.max(EPS, Math.min(Math.PI - EPS, spherical.phi));
      ThreeScene.camera.position.setFromSpherical(spherical).add(controls.target);
      ThreeScene.camera.lookAt(controls.target);
    }
  }
  const ROTATION_SPEED = 0.1;
  const ZOOM_SPEED = 1;
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case 'ArrowLeft':
        rotateCamera(-ROTATION_SPEED, 0, 0);
        break;
        case 'ArrowUp': 
        rotateCamera(0, -ROTATION_SPEED, 0);
        break;
      case 'ArrowRight': 
        rotateCamera(ROTATION_SPEED, 0, 0);
        break;
      case 'ArrowDown': 
        rotateCamera(0, ROTATION_SPEED, 0);
        break;
      case 'KeyO':
        rotateCamera(0, 0, -ZOOM_SPEED);
        break;
      case 'KeyP': 
        rotateCamera(0, 0, ZOOM_SPEED);
        break;
    }
    ThreeScene.animate()
  });
  controls.rotateCamera = true;
  (document.querySelector('#root') as HTMLDivElement).style.pointerEvents = 'none';
  (document.querySelector('canvas') as HTMLCanvasElement).style.pointerEvents = 'all'

  document.querySelector('canvas')?.addEventListener('mousemove', showBlockHover)
  ThreeScene.scene?.add(hoverBlock)
  ThreeScene.scene?.add(hoverHalfBlock)


  controls.addEventListener( 'change', () => {Scene.controlsParametersChange()} )

  document.querySelector('canvas')?.addEventListener('mousedown', (event) => {
    if (event.button == 1 || event.buttons == 4 ) {
      blockget(event)
    }
  })
  document.querySelector('canvas')?.addEventListener('wheel', blockRotate)
  document.querySelector('canvas')?.addEventListener('mousedown', onMouseDown)
  document.querySelector('canvas')?.addEventListener('mouseup', onMouseUp)
  if (App.isViewOnlyMode) {
    modeSwitch()
  }
  historyOfScene = []
  ThreeScene.animate()
}
export function loadScene(){
  let containSize: number = ThreeScene.thisSceneLocal.contains.length;
  let fullContainSize: number = ThreeScene.thisSceneLocal.contains.length;
  if (ThreeScene.thisSceneLocal.contains.length > 0){
    ThreeScene.thisSceneLocal.contains.forEach(async (element: any) => {
        onTextureSwitch(element.textureName).then(() => {
          createCube(element.position.x, element.position.y, element.position.z, element.textureName, element.blockType, element.rotation._x, element.rotation._y, element.rotation._z)
          --containSize;
          Scene.setProgressSceneLoadingValue((fullContainSize - containSize) / fullContainSize * 100)
          if (containSize < 1){
            Scene.setIsSceneLoaded(true)
          }
        })
      })
    }
}
let mouseBtns = {
  leftBtn: false,
  rightBtn: false,
} 
let buildInterval: any, removeInterval: any, buildTimer: any, removeTimer: any;
function onMouseDown(event: any){
  if (Scene.mode !== 'Inspect'){
    let buildBtn = Scene.mode == 'Build' ? 0 : 2
    let removeBtn = Scene.mode == 'Build' ? 2 : 0
    switch (event.button) {
      case buildBtn:
        mouseBtns.leftBtn = true
        blockAdd(event)
        buildTimer = setTimeout(() => {
          buildInterval = setInterval(() => {
            if (mouseBtns.leftBtn){
              blockAdd(eventMouseMove)
            } else {
              clearInterval(buildInterval)
            }
          }, 125)
        }, 200)
        break;
      case removeBtn:
        mouseBtns.rightBtn = true
        blockRemove(event)
        removeTimer = setTimeout(() => {
          removeInterval = setInterval(() => {
            if (mouseBtns.rightBtn){
              blockRemove(eventMouseMove)
            } else {
              clearInterval(removeInterval)
            }
          }, 125)
        }, 200)
        break;
    }
  }
}
function onMouseUp(event: any){
  let buildBtn = Scene.mode == 'Build' ? 0 : 2
  let removeBtn = Scene.mode == 'Build' ? 2 : 0
  switch (event.button) {
    case buildBtn:
      mouseBtns.leftBtn = false
      clearTimeout(buildTimer)
      clearInterval(buildInterval)
      break;
    case removeBtn:
      mouseBtns.rightBtn = false
      clearTimeout(removeTimer)
      clearInterval(removeInterval)
      break;
  }
}
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
function findPlace(event: { clientX: number; clientY: number; }){
    pointer.x = ( (event.clientX - 300) / (window.innerWidth - 300) ) * 2 - 1;
    pointer.y = - ( (event.clientY) / window.innerHeight ) * 2 + 1;
    if (ThreeScene.camera && ThreeScene.scene){
      raycaster.setFromCamera( pointer, ThreeScene.camera );
      let intersects = raycaster.intersectObjects( ThreeScene.scene.children );
      intersects = intersects.filter(e => e.object.name !== "hoverBlock" && e.object.parent?.name !== "hoverBlock")
      intersects = intersects.filter(e => (e.object as GeometryObject3D).geometry instanceof THREE.BoxGeometry && e.object.name !== "helpedCube" && e.object.name !== "slabsHelped")
      if (intersects.length > 0) {
        let firstRotation
        if (intersects[0].object.name !== 'helpPlane'){
          if (intersects[0].object.name !== "slabs" && intersects[0].object.name !== "stairs"){
            firstRotation = {
              x: intersects[0].object.rotation.x,
              y: intersects[0].object.rotation.y,
              z: intersects[0].object.rotation.z,
            }
            intersects[0].object.rotation.set(0, 0, 0)
            intersects[0].object.updateMatrixWorld(true)
            intersects = raycaster.intersectObjects( [intersects[0].object] );
            if (firstRotation.x !== undefined && firstRotation.y !== undefined && firstRotation.z !== undefined){
              intersects[0].object.rotation.set(firstRotation.x, firstRotation.y, firstRotation.z)
            }
          } else {
            if (intersects[0].object.name == "slabs"){
              firstRotation = {
                x: intersects[0].object.parent?.rotation.x,
                y: intersects[0].object.parent?.rotation.y,
                z: intersects[0].object.parent?.rotation.z,
              }
              intersects[0].object.parent?.rotation.set(0, 0, 0)
              intersects[0].object.parent?.updateMatrixWorld(true)
              if (intersects[0].object.parent?.children[1]){
                let tryIntersects
                if (raycaster.intersectObjects( [intersects[0].object] )[0] !== undefined){
                tryIntersects = raycaster.intersectObjects( [intersects[0].object] )[0].face
                }
                if (tryIntersects && intersects[0].face){
                  intersects[0].face = tryIntersects
                } else {
                  intersects[0].face = raycaster.intersectObjects( [intersects[0].object.parent?.children[1]] )[0].face;
                }
                if (firstRotation.x !== undefined && firstRotation.y !== undefined && firstRotation.z !== undefined){
                  intersects[0].object.parent?.rotation.set(firstRotation.x, firstRotation.y, firstRotation.z)
                }
              }
            } else {
              firstRotation = {
                x: intersects[0].object.parent?.rotation.x,
                y: intersects[0].object.parent?.rotation.y,
                z: intersects[0].object.parent?.rotation.z,
              }
              intersects[0].object.parent?.rotation.set(0, 0, 0)
              intersects[0].object.parent?.updateMatrixWorld(true)
              if (intersects[0].object.parent?.children[2]){
                intersects[0].face = raycaster.intersectObjects( [intersects[0].object.parent?.children[2]] )[0].face;
                if (firstRotation.x !== undefined && firstRotation.y !== undefined && firstRotation.z !== undefined){
                  intersects[0].object.parent?.rotation.set(firstRotation.x, firstRotation.y, firstRotation.z)
                }
              }
            }
          }
        }
      }
      return intersects[0]
    }
}
function blockAdd(event: { clientX: number; clientY: number; }){
  if (!shiftDown && Scene.mode !== 'Inspect'){
    placeInfo = findPlace(event)
    if (placeInfo){
        if (placeInfo.object.name == "helpPlane"){
            createCube(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
        } else {
          if (Scene.mode == 'Build'){
            if (placeInfo.face){
              if (placeInfo.object.parent && (placeInfo.object.parent.children.length == 3 || placeInfo.object.name == "slabs")){
                createCube(Math.round(placeInfo.object.parent.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.parent.position.z + placeInfo.face.normal.z))
              } else {
                 createCube(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
              }
            }
          } else {
            if (placeInfo.face){
              if (placeInfo.object.parent && (placeInfo.object.parent.children.length == 3 || placeInfo.object.name == "slabs")){
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
export function removeCube(element: any){
  if (element){
    let blockInfo = thisSceneContains.filter((e: any) => e.position.x == element.position.x && e.position.y == element.position.y && e.position.z == element.position.z)
    if (blockInfo[0]){
      historyOfScene.push({action: 'remove', blockInfo: blockInfo[0]})
    }
    thisSceneContains = thisSceneContains.filter((e: any) => e.position.x !== element.position.x || e.position.y !== element.position.y || e.position.z !== element.position.z)
    ThreeScene.scene?.remove(element)
    ThreeScene.thisSceneLocal.contains = thisSceneContains
    localStorage.setItem( ThreeScene.sceneID, JSON.stringify( ThreeScene.thisSceneLocal ) )
    ThreeScene.animate()
  }
}
function blockRemove(event: { clientX: number; clientY: number; }){
  if (!shiftDown && Scene.mode !== 'Inspect'){
    placeInfo = findPlace(event)
    if (placeInfo){
      if (placeInfo.object.name !== "helpPlane" && placeInfo.object.name !== "hoverBlock"){
        let element = placeInfo.object
        if (placeInfo.object.parent && (placeInfo.object.parent.children.length == 3 || placeInfo.object.name == "slabs")){
          element = placeInfo.object.parent
        }
        removeCube(element)
        // console.log( JSON.parse( String( localStorage.getItem( ThreeScene.sceneID ) ) ) )
      }
    }
  }
}
function blockRotate(event: { deltaY: any; }){
  let indexOfVector = event.deltaY / Math.abs(event.deltaY)
  if (!shiftDown){
  if (1 == indexOfVector){
    if (hoverBlock.rotation.z < Math.PI*2){
      hoverBlock.rotation.set(hoverBlock.rotation.x, hoverBlock.rotation.y, hoverBlock.rotation.z + Math.PI*0.5)
    } else {
      if (hoverBlock.rotation.y < Math.PI*2){
        hoverBlock.rotation.set(hoverBlock.rotation.x, hoverBlock.rotation.y + Math.PI*0.5, 0)
      } else {
        if (hoverBlock.rotation.x < Math.PI*2){
          hoverBlock.rotation.set(hoverBlock.rotation.x + Math.PI*0.5, 0, 0)
        } else {
          hoverBlock.rotation.set(0, 0, 0)
        }
      }
    }
  } else {
    if (hoverBlock.rotation.z > -Math.PI*2){
      hoverBlock.rotation.set(hoverBlock.rotation.x, hoverBlock.rotation.y, hoverBlock.rotation.z - Math.PI*0.5)
    } else {
      if (hoverBlock.rotation.y > -Math.PI*2){
        hoverBlock.rotation.set(hoverBlock.rotation.x, hoverBlock.rotation.y - Math.PI*0.5, 0)
      } else {
        if (hoverBlock.rotation.x > -Math.PI*2){
          hoverBlock.rotation.set(hoverBlock.rotation.x - Math.PI*0.5, 0, 0)
        } else {
          hoverBlock.rotation.set(0, 0, 0)
        }
      }
    }
  }
    hoverHalfBlock.rotation.set(hoverBlock.rotation.x, hoverBlock.rotation.y, hoverBlock.rotation.z)
  }
  ThreeScene.animate()
}
let hover, placeInfo: any, eventMouseMove: any
function showBlockHover(event: { clientX: number; clientY: number; }){
  eventMouseMove = event
    if (isFullBlock()){
      hover = hoverBlock
      hoverHalfBlock.visible = false
    } else {
      hover = hoverHalfBlock
      hoverBlock.visible = false
    }
    if (Scene.mode == 'Remove'){
      hover = hoverBlock
      hoverHalfBlock.visible = false
      hoverBlock.visible = true
    }
    if (Scene.mode !== 'Inspect'){
      if (hover.children.length > 0){
        if (hover.children){
          hover.visible = true
        }
      } 
      placeInfo = findPlace(event)
      if (placeInfo){
        if (placeInfo.object.name == "helpPlane"){
          hoverBlock.position.set(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
          hoverHalfBlock.position.set(Math.round(placeInfo.point.x), Math.abs(Math.round(placeInfo.point.y+0.001)), Math.round(placeInfo.point.z))
        } else {
          if (Scene.mode == 'Build'){
            if (placeInfo.face){
              if (placeInfo.object.parent && (placeInfo.object.parent.children.length == 3 || placeInfo.object.name == "slabs")){
                hoverBlock.position.set(Math.round(placeInfo.object.parent.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001 + placeInfo.face.normal.y)), 
                Math.round(placeInfo.object.parent.position.z + placeInfo.face.normal.z))
                hoverHalfBlock.position.set(Math.round(placeInfo.object.parent.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001 + placeInfo.face.normal.y)), 
                Math.round(placeInfo.object.parent.position.z + placeInfo.face.normal.z))
              } else {
                if (placeInfo.object.parent && (placeInfo.object.parent.children.length == 3 || placeInfo.object.name == "slabs")){
                  hoverBlock.position.set(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
                  hoverHalfBlock.position.set(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
                } else {
                  hover.position.set(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
                  hoverHalfBlock.position.set(Math.round(placeInfo.object.position.x + placeInfo.face.normal.x), Math.abs(Math.round(placeInfo.object.position.y+0.001 + placeInfo.face.normal.y)), Math.round(placeInfo.object.position.z + placeInfo.face.normal.z))
                }
              }
            }
          } else {
            if (placeInfo.object.parent && (placeInfo.object.parent.children.length == 3 || placeInfo.object.name == "slabs")){
              hover.position.set(Math.round(placeInfo.object.parent.position.x), Math.abs(Math.round(placeInfo.object.parent.position.y+0.001)), Math.round(placeInfo.object.parent.position.z))
            } else {
              hover.position.set(Math.round(placeInfo.object.position.x), Math.abs(Math.round(placeInfo.object.position.y+0.001)), Math.round(placeInfo.object.position.z))
            }
          }
        }
  
      }
    }
  if (shiftDown){
    hoverHalfBlock.visible = false
    hoverBlock.visible = false
  }
  ThreeScene.animate()
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
function blockget(event: { clientX: number; clientY: number; }){
    placeInfo = findPlace(event)
    if (placeInfo){
      Scene.setNewBlockType(placeInfo.object.name)
      if (placeInfo.object.name !== "helpPlane" && placeInfo.object.name !== "hoverBlock"){
        let object3D = placeInfo.object
        if (placeInfo.object.name == "stairs" || placeInfo.object.name == "stairsHelped"  || placeInfo.object.name == "slabs"){
          object3D = placeInfo.object.parent
        } else {
          object3D = placeInfo.object
        }
        let materialObject3D = object3D as MaterialObject3D;
        let material = materialObject3D.material;
        let material3D = material as any
        if (Array.isArray(material3D)){
            textureCube = material3D[1].map
        } else {
          if (placeInfo.object.parent.name == "stairs"){
              textureCube = placeInfo.object.parent.children[2].material.map
          } else if (placeInfo.object.parent.name == "slabs"){
              textureCube = ((materialObject3D.children[1] as MaterialObject3D).material as any).map
          } else {
            textureCube = material3D.map
          }
        }
        Scene.setNewPickedTexture((object3D as textureName).textureName)
        onTextureSwitch(Scene.pickedTexture)
        if (isFullBlock()){
          hoverBlock.rotation.set(object3D.rotation.x, object3D.rotation.y, object3D.rotation.z)
          hoverHalfBlock.rotation.set(object3D.rotation.x, object3D.rotation.y, object3D.rotation.z)
        } else {
          hoverBlock.rotation.set(object3D.parent.rotation.x, object3D.parent.rotation.y, object3D.parent.rotation.z)
          hoverHalfBlock.rotation.set(object3D.parent.rotation.x, object3D.parent.rotation.y, object3D.parent.rotation.z)
        }
        setHoverTextures()
      }
    }
}
export function modeSwitch(){
    switch (Scene.mode) {
      case 'Build':
        controls.mouseButtons = {
          LEFT: undefined,
          MIDDLE: undefined,
          RIGHT: undefined
        };
        setHoverTextures()
        blockTypeSwich()
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
        setHoverTextures()
        controls.enableZoom = false;
        break;
    }
}
export function blockTypeSwich(){
  switch (Scene.blockType) {
    case 'Blocks':
      setHoverTextures()
      hoverFullBlock.visible = true
      hoverStairs.visible = false;
      hoverSlabs.visible = false;
      break;
    case 'Slabs':
      hoverFullBlock.visible = false
      hoverStairs.visible = false;
      hoverSlabs.visible = true;
      break;
    case 'Stairs':
      hoverFullBlock.visible = false
      hoverStairs.visible = true;
      hoverSlabs.visible = true;
      break;
  }
}