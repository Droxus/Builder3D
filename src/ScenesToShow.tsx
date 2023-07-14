import { useEffect, useRef } from "react"
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function ScenesToShow(sceneContains: any){
    const thisDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (thisDiv.current && thisDiv.current) {
            if (thisDiv.current?.children)
            if (thisDiv.current?.children.length < 1) {
                sceneContains = sceneContains.sceneContains
                console.log(sceneContains)
                const { clientWidth, clientHeight } = thisDiv.current;
        
                const scene = new THREE.Scene();
                scene.background = new THREE.Color('#C6C6C6')
                const camera = new THREE.PerspectiveCamera( 75, clientWidth / clientHeight, 0.1, 1000 );
                camera.position.z = 5
                
                const renderer = new THREE.WebGLRenderer();
                renderer.setSize( clientWidth-1, clientHeight );
                thisDiv.current?.appendChild( renderer.domElement );
                    
                window.addEventListener('resize', onResize)
                function onResize(){
                    if (camera && renderer && thisDiv.current?.clientWidth && thisDiv.current?.clientHeight){
                        console.log(thisDiv.current.parentElement?.parentElement)
                        const { clientWidth, clientHeight } = (thisDiv.current.parentElement?.parentElement as HTMLDivElement);
                        console.log(clientWidth, clientHeight-44)
                        renderer.setSize(clientWidth, clientHeight-44 );
                        renderer.setPixelRatio(clientWidth / (clientHeight-44) )
                        camera.aspect = clientWidth / (clientHeight-44)
                        camera.updateProjectionMatrix();
                    }
                }
                    
                const geometry = new THREE.BoxGeometry( 1, 1, 1 );
                const material = new THREE.MeshBasicMaterial( { color: 'hotpink' } );
                    
                let height = 1;
                let width = 1;
                let depth = 1;
                let highestX = sceneContains[0].position.x;
                let highestZ = sceneContains[0].position.z;
                let lowestX = sceneContains[0].position.x;
                let lowestZ = sceneContains[0].position.z;

                sceneContains.forEach((block: any) => {
                    const cube = new THREE.Mesh( geometry, material );
                    cube.position.set(block.position.x, block.position.y, block.position.z)

                    highestX = Math.max(highestX, block.position.x)
                    highestZ = Math.max(highestZ, block.position.z)
                    lowestX = Math.min(lowestX, block.position.x)
                    lowestZ = Math.min(lowestZ, block.position.z)
                    
                    height = Math.max(height, block.position.y)
                    width = highestX - lowestX
                    depth = highestZ - lowestZ

                    
                    scene.add( cube );
                });

                let center = {x: width/2 + lowestX, y: height/2, z: depth/2 + lowestZ}
                let distanceToCenter = Math.max.apply(0, [height, width, depth])
                console.log(center, distanceToCenter)

                const controls = new OrbitControls( camera, renderer.domElement );
                camera.position.set( 0, 0, distanceToCenter );
                controls.target.copy(new THREE.Vector3(center.x, center.y, center.z))

                const azimuthalAngle = Math.PI / 4; // Horizontal rotation angle in radians
                const polarAngle = Math.PI / 3; // Vertical rotation angle in radians

                const radius = distanceToCenter;
                const x = Math.sin(azimuthalAngle) * Math.sin(polarAngle) * radius;
                const y = Math.cos(polarAngle) * radius;
                const z = Math.cos(azimuthalAngle) * Math.sin(polarAngle) * radius;

                camera.position.set(x, y, z);
                

                controls.update();
                renderer.render( scene, camera );
            }
        }
    })
    return (
        <div ref={thisDiv} className=' grid w-full h-full overflow-hidden overflow-y-scroll items-center justify-items-center justify-center '></div>
    )
}
export default ScenesToShow