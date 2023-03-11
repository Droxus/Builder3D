import * as THREE from 'three';
import * as Controls from './controls'
import InfiniteGridHelper from './InfiniteGridHelper';

export let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer

export let gridHelper: any

export function createScene(){
    scene = new THREE.Scene();
    
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
    animate();
    function animate() {
        requestAnimationFrame(animate)
        if (Controls.controls){
          Controls.controls.update()
        }
        renderer.render( scene, camera );
    };
    
    window.addEventListener('resize', onResize)
    document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
    window.addEventListener('beforeunload', function(e){
      e.stopPropagation();e.preventDefault();return false;
    },true);
    
    function onResize(){
      const rect = renderer.domElement.getBoundingClientRect();
      renderer.setSize((window.innerWidth-300), window.innerHeight );
      renderer.setPixelRatio((window.innerWidth-300) / window.innerHeight )
      camera.aspect = (window.innerWidth-300) / window.innerHeight
      camera.updateProjectionMatrix();
    }
}