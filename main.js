const baseheight = 0.3
const stageHeight = 0.3

const scene = new THREE.Scene();
const object = new THREE.Object3D()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.setZ(6)
camera.position.setY(2)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
renderer.setClearColor(0x111111, 1)

// const grid = new THREE.GridHelper(200, 50)
// scene.add(grid)
const bg =  new THREE.TextureLoader().load('./textures/galaxy2.jpg');
scene.background = bg

//texture
const matahari = new THREE.TextureLoader().load('./textures/matahari.jpg')
const merkurius = new THREE.TextureLoader().load('./textures/merkurius.jpeg')
const venus = new THREE.TextureLoader().load('./textures/venus.jpeg')
const bumi = new THREE.TextureLoader().load('./textures/bumi.png')
const mars = new THREE.TextureLoader().load('./textures/mars.jpeg')
const jupiter = new THREE.TextureLoader().load('./textures/jupiter.jpeg')
const saturnus = new THREE.TextureLoader().load('./textures/saturnus.png')
const uranus = new THREE.TextureLoader().load('./textures/uranus.jpeg')
const neptunus = new THREE.TextureLoader().load('./textures/neptunus.jpeg')
const pluto = new THREE.TextureLoader().load('./textures/pluto.jpeg')
const bulan = new THREE.TextureLoader().load('./textures/bulan.jpeg')

const control = new THREE.OrbitControls(camera, renderer.domElement)

const directLight = new THREE.DirectionalLight(0xffffff, 3)
// directLight.position.y = 2.75
// directLight.position.x = -2.75
// scene.add(directLight)

const light = new THREE.AmbientLight(0xffffff, 1)
scene.add(light)

// const groundGeometry = new THREE.BoxGeometry(30,30, baseheight)
// const groundMaterial = new THREE.MeshStandardMaterial({color: 0x080b24})
// const groundObj = new THREE.Mesh(groundGeometry, groundMaterial)
// groundObj.rotation.x = Math.PI / 2
// groundObj.position.y = baseheight
// scene.add(groundObj)

var objects = []

const loader = new THREE.GLTFLoader();

// display('./sky/scene.gltf',function(o){
//     o.position.z = -40
//     o.position.x = 0
//     o.position.y = 5
//     o.rotation.y = 1
//     o.rotation.x = 2.7

//     // function animateSky(){
//     //     requestAnimationFrame(animateSky)
//     //     control.update();
//     //     o.rotation.y += 0.1
//     // }
//     // animateSky()
// }, function(s){}, {
//         x: 0,
//         y: 5,
//         z: 0,
//         scale: 10
// })

// displayPlanet('./solar_system/scene.gltf',function(o){
//     o.position.y = 1
//     o.position.x = 0
//     o.position.z = -10

//     function goyangPlanet(){
//         requestAnimationFrame(goyangPlanet)
//         control.update()
//         // o.rotation.y += 0.01
//     }
//     goyangPlanet()
// }, function(s){},{
//     x: 10,
//     y: 10,
//     z: 10,
//     scale: 1500
// })

// display('./rocket/scene.gltf',function(o){
//     o.position.y = 3
//     o.position.x = -5
//     o.rotation.y = 0
//     function animateAstronot(){
//         requestAnimationFrame(animateAstronot)
//         control.update()
//         // o.rotation.x += 0.1
//         // o.rotation.y += 0.1
//         if (o.position.x < 10 && o.rotation.y < 2.718281828){
//             o.rotation.y = 0
//             o.position.x += 0.01
//         } else {
//             o.rotation.y = 2.718281828
//             o.position.x -= 0.01
//         }

//         if(o.position.x < -10){
//             o.rotation.y = 0
//         }
//     }
//     animateAstronot()

// }, function(s){},{
//     x: 3,
//     y: 3,
//     z: 3,
//     scale: 0.01
// })

// display('./alien_head/scene.gltf',function(o){
//     o.position.y = 1
//     o.position.x = 3
   
//     function animateNdas(){
//         requestAnimationFrame(animateNdas)
//         control.update()
//         o.rotation.y += 0.1
//         o.rotation.x += 0.2
//     }
//     animateNdas()

// }, function(s){},{
//     x: 3,
//     y: 3,
//     z: 3,
//     scale: 0.01
// })

// display('./meteor/scene.gltf', function(o){
//     o.position.y = 15;
//     o.position.x = -10;
//     o.position.z = -20;
//     function animateMeteor(){
//         requestAnimationFrame(animateMeteor)
//         control.update()
//         o.position.y += -0.03
//         o.position.x += 0.05

//         if(o.position.y < -10){
//             o.position.y = 15
//             o.position.x = -10
//         }
//     }
//     animateMeteor()
// }, function(s){}, {
//     x : 3,
//     y: 3,
//     z: 3,
//     scale: 1
// })

const orbitRadius = 5;
const orbitGeometry = new THREE.CircleGeometry(orbitRadius, 64);
const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
// scene.add(orbit);

planet = [];
const planet1 = drawSun(1.25, matahari, 0, 0, 0.001); //buat matahari
const planet2 = drawSphere(0.5, merkurius, 2, 0, 0.004, 0.004, 0.004, 0.004); //merkurius
const planet3 = drawSphere(0.4, venus, 3.25, 0, 0.005, 0.005, 0.005, 0.005); //venus
const planet4 = drawSphere(0.6, bumi, 4.75, 0, 0.006, 0.006, 0.006, 0.006); //bumi
const planet5 = drawSphere(0.5, mars, 6.5, 0, 0.003); //mars
const planet6 = drawSphere(0.9, jupiter, 8.5, 0, 0.002); //jupiter
const planet7 = drawSphere(0.7, saturnus, 11, 0, 0.005); //saturnus
const planet8 = drawSphere(0.6, uranus, 13, 0, 0.003); //uranus
const planet9 = drawSphere(0.5, neptunus, 15, 0, 0.006); //neptunus
const planet10 = drawSphere(0.3, pluto, 17, 0, 0.003); //pluto
const planet11 = drawSphere(0.2, bulan, 5, 1, 0.001); //bulan
//rotasi muter matahari
// function muterMatahari(){
//     requestAnimationFrame(muterMatahari)
//     control.update()
//     planet1.rotation.y += 0.001
// }
// muterMatahari()

function drawSun(radius, texture, x, y, rotY){
    const geometry = new THREE.SphereGeometry(radius,50, 50);
    const material = new THREE.MeshStandardMaterial({
        map: texture,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = x
    sphere.position.y = y

    object.add(sphere)
    planet.push(sphere)
    scene.add(sphere)

    function pusing(){
        requestAnimationFrame(pusing)
        control.update()
        sphere.rotation.y += rotY
    }
    pusing()

    return pusing;
}

function drawSphere(radius, texture, x, y, rotY, rotX, posY, posX){
    const geometry = new THREE.SphereGeometry(radius,50, 50);
    const material = new THREE.MeshStandardMaterial({
        map: texture,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = x
    sphere.position.y = y

    object.add(sphere)
    planet.push(sphere)
    scene.add(sphere)

    function muter(){
        requestAnimationFrame(muter)
        control.update()
        // sphere.rotation.y += rotY
        // sphere.position.x += posX
        // sphere.position.y += posY
        // sphere.rotation.x += rotX

        const time = Date.now() * 0.001;
        const orbitSpeed = 0.5;
        const orbitPosition = new THREE.Vector3(
            Math.cos(time * orbitSpeed) * orbitRadius,
            0,
            Math.sin(time * orbitSpeed) * orbitRadius
        );
        sphere.position.copy(orbitPosition);

        sphere.rotation.x += rotX;
        sphere.rotation.y += rotY;
    }
    muter()

    return muter;
}

animateSolarSystem();

function animateSolarSystem(){
    console.log(object.length)
    // for(let i = 0; i < object.length; i++){
    //     p = object[i];
    //     const orbitSpeed = 0.01;
    //     p.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.01);
    //     console.log(p)
    // }
}

function displayPlanet(path, objectTransformation, stageTransformation, pos){
    const light = new THREE.PointLight(0xffffff, 0, 3)
    light.position.set(pos.x-10, pos.y-10, pos.z-100)
    scene.add(light)

    loadObj(path, objectTransformation, pos)
}

function display(path, objectTransformation, stageTransformation, pos){
    const light = new THREE.PointLight(0xffffff, 2, 100)
    light.position.set(pos.x, pos.y, pos.z)
    scene.add(light)

    loadObj(path, objectTransformation, pos)
}

function loadObj(path, manipFunc, pos){
    loader.load(path, function(gltf){
        console.log(gltf.scene)
        gltf.scene.scale.set(pos.scale, pos.scale, pos.scale)
        objects.push({
            room : gltf.scene
        })
        gltf.scene.position.y = baseheight+stageHeight+0.15
        manipFunc(gltf.scene)
        scene.add(gltf.scene)
    }, undefined, function(err){
        console.error(err)
    })
}

function animate(){
    requestAnimationFrame(animate);
    control.update()
    renderer.render(scene, camera)
}

animate()
