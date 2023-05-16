// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
scene.fog = new THREE.Fog( scene.background, 10, 20 );

// camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(2, 0, 3 );

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//load wall
// var loader = new THREE.GLTFLoader();
var loader = new THREE.GLTFLoader();
loader.load(
   "./assets/ruang.gltf",
   async function ( gltf ) {
    //   var scale = 5.6;
    //   ruang.body = gltf.scene.children[0];
    //   ruang.body.name = 'body';
    //   ruang.body.rotation.set ( 0, -1.5708, 0 );
    //   ruang.body.scale.set (scale,scale,scale);
    //   ruang.body.position.set ( 0, 3.6, 0 );
    //   ruang.body.castShadow = true;
    //   ruang.frame.add(ruang.body);

    //   scene.add( ruang.frame )
   },
);

// loader.load(
// 	// resource URL
// 	"./assets/ruang.gltf",
// 	// called when the resource is loaded
// 	function ( gltf ) {
//         gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object
        
// 		scene.add( gltf.scene );
// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {
// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
// 	},
// 	// called when loading has errors
// 	function ( error ) {
// 		console.log( 'An error happened' );
// 	}
// );

renderer.render( scene, camera );

var loader = new THREE.JSONLoader();
loader.load('path/to/your/model.json', function(geometry, materials) {
  var mesh = new THREE.Mesh(geometry, materials);
  scene.add(mesh);
});