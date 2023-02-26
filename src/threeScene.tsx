import * as THREE from 'three';
import * as Controls from './controls'
import InfiniteGridHelper from './InfiniteGridHelper';

export let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer

export let gridHelper: any

export function createScene(){
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 3, 8)
    camera.rotation.order = 'YXZ'
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.toneMapping = THREE.LinearToneMapping
    renderer.toneMappingExposure = 1
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    document.body.appendChild( renderer.domElement );
    const gridHelper = new InfiniteGridHelper();
    gridHelper.position.set(8.5, -0.5, 8.5)
    scene.add( gridHelper );

    const plane = new THREE.Mesh( new THREE.PlaneGeometry( 100000, 100000 ), new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide, visible: false} ) );
    plane.rotation.set(Math.PI/2, 0, 0)
    plane.position.set(0, -0.5 , 0)
    plane.name = "helpPlane"
    scene.add( plane );
    animate();
    function animate() {
        requestAnimationFrame(animate)
        // Controls.controls.update()
        renderer.render( scene, camera );
    };
    
    window.addEventListener('resize', onResize)
    document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
    window.addEventListener('beforeunload', function(e){
      e.stopPropagation();e.preventDefault();return false;
    },true);
    
    function onResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      Controls.controls.update()
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
}