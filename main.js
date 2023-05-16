import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// let light1 = new THREE.PointLight(0xffffff, 1);
// light1.position.set(0,0,0);
// scene.add( light1 );

// const controls = new OrbitControls( camera, renderer.domElement );

const loader = new GLTFLoader();

// loader.load( './public/Room.gltf', function ( gltf ) {
// 	scene.add( gltf.scene );
// }, undefined, function ( error ) {
// 	console.error( error );
// } );

loader.load( '/krabby_patty_spongebob/scene.gltf', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );


renderer.render( scene, camera );