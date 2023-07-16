import { useEffect, useRef } from "react"
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as Controls from './controls'
import * as Scene from './Scene'


let isFocusOnScene: boolean = false;
export function setIsFocusOnScene(value: boolean) {
    isFocusOnScene = value
}
function ScenesToShow(sceneContains: any){
    const thisDiv = useRef<HTMLDivElement>(null);
    let loadedBlock = 0;
    let distanceToCenter: any, camera: any, controls: any, renderer: any, scene: any
    let azimuthalAngle = Math.PI / 4; // Horizontal rotation angle in radians
    let polarAngle = Math.PI / 6; // Vertical rotation angle in radians

    function setCameraPosition(azimuthalAngleParameter: number, polarAngleParameter: number) {
        azimuthalAngle = azimuthalAngleParameter || azimuthalAngle;
        polarAngle = polarAngleParameter || polarAngle; 
    
        const radius = Math.min(Math.max(10, distanceToCenter), 200);
        // const y = Math.max(Math.min(Math.tan(polarAngle) * radius, radius*1.5), -radius*1.5);
        const y = Math.sin(polarAngle) * radius
        const x = Math.cos(azimuthalAngle) * radius;
        const z = Math.sin(azimuthalAngle) * radius;
        // const z = Math.sqrt(radius*radius - x*x) * (Math.abs(Math.sin(azimuthalAngle)) / Math.sin(azimuthalAngle))
        camera.position.set(x, y, z);
        controls.update();
        renderer.render( scene, camera );
    }
    
    useEffect(() => {
        if (thisDiv.current && thisDiv.current) {
            if (thisDiv.current?.children)
            if (thisDiv.current?.children.length < 2) {
                sceneContains = sceneContains.sceneContains
                const { clientWidth, clientHeight } = thisDiv.current;
        
                scene = new THREE.Scene();
                scene.background = new THREE.Color('#C6C6C6')
                camera = new THREE.PerspectiveCamera( 75, clientWidth / clientHeight, 0.1, 1000 );
                camera.position.z = 5
                
                renderer = new THREE.WebGLRenderer();
                renderer.setSize( clientWidth-1, clientHeight );
                thisDiv.current?.appendChild( renderer.domElement );
                    
                window.addEventListener('resize', onResize)
                function onResize(){
                    if (camera && renderer && thisDiv.current?.clientWidth && thisDiv.current?.clientHeight){
                        const { clientWidth, clientHeight } = (thisDiv.current.parentElement?.parentElement as HTMLDivElement);
                        renderer.setSize(clientWidth, clientHeight-44 );
                        renderer.setPixelRatio(clientWidth / (clientHeight-44) )
                        camera.aspect = clientWidth / (clientHeight-44)
                        camera.updateProjectionMatrix();
                    }
                }
                    
                const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1, 1, 1, 1 );

                const slabsGeometry = new THREE.BoxGeometry(1, 0.5, 1, 1, 1, 1)

                const geometryDown = new THREE.BoxGeometry(1, 0.5, 1, 1, 1, 1);
                const geometryUp = new THREE.BoxGeometry(0.5, 0.5, 1, 1, 1, 1);

                let height = 1;
                let width = 1;
                let depth = 1;
                let highestX = sceneContains[0].position.x;
                let highestZ = sceneContains[0].position.z;
                let lowestX = sceneContains[0].position.x;
                let lowestZ = sceneContains[0].position.z;

                let noCubeBlocks: any;
                fetchData().then(() => {
                    showScene()
                })
                async function fetchData() {
                    const response = await import('../textures.json');
                    let data = response.default;
                    data = data.filter(e => e.name.slice(-7) !== '.mcmeta')
                    Scene.setAllTextures(data)
                    const noCubeBlocksResponse = await import('../noCubeBlocks.json');
                    noCubeBlocks = noCubeBlocksResponse.default
                }
                function isFullBlock(texture: string): boolean{
                    let isCube: boolean = true
                    noCubeBlocks.forEach((item: string) => {
                        if (texture.includes(item) && !texture.includes('block')) {
                            return isCube = false
                        }
                    })
                    return isCube
                  }
                  function showScene() {
                      sceneContains.forEach(async (block: any) => {
                          let cube
                                Controls.onTextureSwitch(block.textureName, true).then((texture: any) => {
                                  let textureCube = texture[0]
                                  let textureCubeTop = texture[1]
                                  let textureCubeBottom = texture[2]
      
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
                                  let bottomMaterial = new THREE.MeshBasicMaterial({ map: textureCubeBottom || textureCubeTop || textureCube, transparent: false, side: THREE.DoubleSide, depthWrite: true, alphaTest: 0.5 });
                                  let topMaterial = new THREE.MeshBasicMaterial({ map: textureCubeTop || textureCubeBottom || textureCube, transparent: false, side: THREE.DoubleSide, depthWrite: true, alphaTest: 0.5 });
                                  let sideMaterial = new THREE.MeshBasicMaterial({ map: textureCube, transparent: false, side: THREE.DoubleSide, depthWrite: true, alphaTest: 0.5 });
                                  const materials = [topMaterial, sideMaterial, bottomMaterial];
                                  
                                    if (isFullBlock(block.textureName)) {
                                      switch (block.blockType) {
                                          case 'Slabs':
                                              cube = new THREE.Mesh( slabsGeometry, materials );
                                              (cube as any).geometry.groups.forEach((group: any, i: any) => {
                                                  if (i === 2) {
                                                    group.materialIndex = 0;
                                                  } else if (i === 0 || i === 1 || i === 4 || i === 5) {
                                                    group.materialIndex = 1;
                                                  } else {
                                                    group.materialIndex = 2;
                                                  }
                                                });
                                          break;
                                          case 'Stairs':
                                              let stairsDown = new THREE.Mesh(geometryDown, materials);
                                              let stairsUp = new THREE.Mesh(geometryUp, materials);
                                              stairsDown.position.set(0, -0.25, 0)
                                              stairsUp.position.set(0.25, 0.25, 0)
                                              cube = new THREE.Group();
                                              cube.add(stairsDown);
                                              cube.add(stairsUp);
                                          break;
                                          default:
                                              cube = new THREE.Mesh( cubeGeometry, materials );
                                              (cube as any).geometry.groups.forEach((group: any, i: any) => {
                                                  if (i === 2) {
                                                    group.materialIndex = 0;
                                                  } else if (i === 0 || i === 1 || i === 4 || i === 5) {
                                                    group.materialIndex = 1;
                                                  } else {
                                                    group.materialIndex = 2;
                                                  }
                                                });
                                          break;
                                      } 
                                    } else {
                                      let firstPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
                                      let secondPlane = new THREE.Mesh( new THREE.PlaneGeometry(1,1), new THREE.MeshBasicMaterial( { map: textureCube, transparent: true, side: THREE.DoubleSide, depthWrite: false } ))
                                      secondPlane.rotation.set(0, Math.PI / 2, 0)
                                      cube = new THREE.Group();
                                      cube.add(firstPlane);
                                      cube.add(secondPlane);
                                      cube.name = "block"
                                  }
                                  cube.rotation.set(block.rotation._x, block.rotation._y, block.rotation._z)
                                  cube.position.set(block.position.x, block.position.y, block.position.z)
      
                                  highestX = Math.max(highestX, block.position.x)
                                  highestZ = Math.max(highestZ, block.position.z)
                                  lowestX = Math.min(lowestX, block.position.x)
                                  lowestZ = Math.min(lowestZ, block.position.z)
                                  
                                  height = Math.max(height, block.position.y)
                                  width = highestX - lowestX
                                  depth = highestZ - lowestZ
                                  scene.add( cube );
                                  loadedBlock++
                                  setSceneToShow() 
                              })
                      })
                      function setSceneToShow() {
                          if (loadedBlock >= sceneContains.length-1) {
                            let center = {x: width/2 + lowestX, y: height/2, z: depth/2 + lowestZ}
                            distanceToCenter = Math.max.apply(0, [height, width, depth]) / 4
                      
                            controls = new OrbitControls( camera, renderer.domElement );
                            camera.position.set( 0, 0, distanceToCenter );
                            controls.target.copy(new THREE.Vector3(center.x, center.y, center.z))
                            controls.enableDamping = true;
                            controls.dampingFactor = 0.05;
                            controls.rotateSpeed = 0.2; 
                                
                            setCameraPosition(azimuthalAngle, polarAngle)
                            animate();
                        }
                    }
                    function animate() {
                        requestAnimationFrame(animate);

                        if (isFocusOnScene) {
                            setCameraPosition(azimuthalAngle + mouseXMove, polarAngle + mouseYMove)
                            mouseXMove = 0;
                            mouseYMove = 0;
                        }
                      }

                }

            }
        }
        return () => {
            Scene.setAllTextures([])
          };
    })
    let mouseX = 0;
    let mouseY = 0;
    let mouseXMove = 0;
    let mouseYMove = 0;

    function handleMouseMove(event: MouseEvent) {
        if (thisDiv.current) {
            mouseXMove = event.offsetX - mouseX
            mouseXMove = mouseXMove / (thisDiv.current?.offsetWidth/10)
            mouseX = event.offsetX

            mouseYMove = event.offsetY - mouseY
            mouseYMove = mouseYMove / (thisDiv.current?.offsetHeight/4)
            mouseY = event.offsetY
        }
    }
    let onSceneFocusTimeout: any;
    function onSceneFocus() {
        isFocusOnScene = true;
        thisDiv.current?.children[0].classList.remove('-translate-x-full');
        onSceneFocusTimeout = setTimeout(() => {
            if (isFocusOnScene && loadedBlock >= sceneContains.length-1) {
                thisDiv.current?.addEventListener('mousemove', handleMouseMove, false)
            }
        }, 1500)
    }
    function onSceneBlur() {
        isFocusOnScene = false;
        thisDiv.current?.children[0].classList.add('-translate-x-full');
        clearTimeout(onSceneFocusTimeout)
        thisDiv.current?.removeEventListener('mousemove', handleMouseMove, false)
    }
    return (
        <div ref={thisDiv} onMouseEnter={onSceneFocus} onMouseLeave={onSceneBlur} className=' flex flex-col w-full h-full overflow-hidden items-center justify-items-center justify-center '>
            <div className="order-2 -translate-x-full loadingSceneGradient -mt-1 w-full h-1 bg-fuchsia-500"></div>
        </div>
    )
}
export default ScenesToShow