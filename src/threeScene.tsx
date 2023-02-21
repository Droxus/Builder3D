import * as THREE from 'three';
import * as Controls from './controls'

export let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer

export function createScene(){
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 0, 4)
    camera.rotation.order = 'YXZ'
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.toneMapping = THREE.LinearToneMapping
    renderer.toneMappingExposure = 1
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    document.body.appendChild( renderer.domElement );
    const size = 15;
    const divisions = 15;
    
    const gridHelper = new THREE.GridHelper( size, divisions );
    // const gridHelper = new THREE.InfiniteGridHelper(size, size, 'green', 10);
    scene.add( gridHelper );


    Controls.createControls()

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
    
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
}