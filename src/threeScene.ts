import * as THREE from 'three';
import InfiniteGridHelper from './InfiniteGridHelper';
import * as Controls from './controls'
import * as Scene from './Scene';

export let scene: THREE.Scene | null, camera: THREE.PerspectiveCamera | null, renderer: THREE.WebGLRenderer | null

export let gridHelper: any
let isFirstTime = false

interface localScene {
  id: string,
  name: string,
  author: string,
  rate: number,
  contains: object[],
}

export let thisSceneLocal: localScene;

export let sceneID: string

export function createScene(){
  sceneClear()

    scene = new THREE.Scene();
    scene.background = new THREE.Color('#C6C6C6')

    camera = new THREE.PerspectiveCamera( 60, (window.innerWidth-300) / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 3, 8)
    camera.rotation.order = 'YXZ'
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize((window.innerWidth-300), window.innerHeight );
    renderer.setPixelRatio((window.innerWidth-300) / window.innerHeight)
    renderer.toneMappingExposure = 1
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    document.body.appendChild( renderer.domElement );
    const gridHelper = new InfiniteGridHelper();
    gridHelper.position.set(8.5, -0.5, 8.5)
    scene.add( gridHelper );

    const plane = new THREE.Mesh( new THREE.BoxGeometry( 100000, 100000, 0.00001 ), new THREE.MeshBasicMaterial( {color: 0xffff00, visible: false} ) );
    plane.rotation.set(Math.PI/2, 0, 0)
    plane.position.set(0, -0.5 , 0)
    plane.name = "helpPlane"
    scene.add( plane );

    Controls.setThisSceneContains([])
    Controls.setIsFirstPick(true)
    Controls.loadPickedTexture('debug.png')

    isFirstTime = true
    shouldRender = true
    animate();

    window.addEventListener('resize', onResize)
    document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
    window.addEventListener('beforeunload', function(e){
      e.stopPropagation();e.preventDefault();return false;
    },true);
    
    function onResize(){
      if (camera && renderer){
        renderer.setSize((window.innerWidth-300), window.innerHeight );
        renderer.setPixelRatio((window.innerWidth-300) / window.innerHeight )
        camera.aspect = (window.innerWidth-300) / window.innerHeight
        camera.updateProjectionMatrix();
      }
    }
    sceneID = '0000';
    thisSceneLocal = JSON.parse( String( localStorage.getItem( sceneID ) ) );
    if (!thisSceneLocal){
      thisSceneLocal = {
        id: sceneID,
        name: 'Test Build',
        author: 'Droxus228',
        rate: 4,
        contains: [],
      }
    }
    Scene.setSceneName(thisSceneLocal.name)
    localStorage.setItem(sceneID, JSON.stringify(thisSceneLocal))
    console.log( JSON.parse( String( localStorage.getItem( sceneID ) ) ) )
}
let shouldRender = true;
export function animate() {
  if (shouldRender) {
    shouldRender = false;
    requestAnimationFrame(() => {
      if (scene && camera){
        renderer?.render(scene, camera);
      }
      shouldRender = true;
    });
  }
}
export function sceneClear(){
  renderer?.dispose()

  const cleanMaterial = (material: any) => {
    material.dispose()

    // dispose textures
    for (const key of Object.keys(material)) {
      const value = material[key]
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose()
      }
    }
  }

  scene?.traverse(object => {
    if (!(object as THREE.Mesh).isMesh) return
    
    (object as THREE.Mesh).geometry.dispose()

    if (((object as THREE.Mesh).material as THREE.Material).isMaterial) {
      cleanMaterial((object as THREE.Mesh).material)
    } else {
      // an array of materials
      for (const material of (object as any).material) cleanMaterial(material)
    }
  })


  if (document.querySelector('canvas')){
    document.querySelector('canvas')?.remove()
  }
  camera = null;
  // renderer?.dispose();
  renderer = null;

  // Controls.controls.dispose();
  Controls.setControls(null);
}