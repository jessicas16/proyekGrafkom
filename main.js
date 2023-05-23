const baseheight = 0.3
const stageHeight = 0.3

const scene = new THREE.Scene();

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
const bg =  new THREE.TextureLoader().load('./textures/galaxy.png');
console.log(bg)
scene.background = bg

const control = new THREE.OrbitControls(camera, renderer.domElement)

const directLight = new THREE.DirectionalLight(0xffffff, 1)
directLight.position.y = 50000
scene.add(directLight)

// const groundGeometry = new THREE.BoxGeometry(30,30, baseheight)
// const groundMaterial = new THREE.MeshStandardMaterial({color: 0x080b24})
// const groundObj = new THREE.Mesh(groundGeometry, groundMaterial)
// groundObj.rotation.x = Math.PI / 2
// groundObj.position.y = baseheight
// scene.add(groundObj)

var objects = []

const loader = new THREE.GLTFLoader();

// display('./room_blank/scene.gltf',function(o){}, function(s){},
//     {
//         x: 0,
//         y: 5,
//         z: 0,
//         scale: 2
//     })
// display('./sky/scene.gltf',function(o){
//     o.position.z = 5
//     o.position.x = 5
//     o.position.y = 5
// }, function(s){},
//     {
//         x: 0,
//         y: 5,
//         z: 0,
//         scale: 2
//     })


displayPlanet('./planets/scene.gltf',function(o){
    o.position.y = 1
    o.position.x = 0
    o.position.z = -10

    function goyangPlanet(){
        requestAnimationFrame(goyangPlanet)
        control.update()
        o.rotation.y += 0.01
    }
    goyangPlanet()
}, function(s){},{
    x: 10,
    y: 10,
    z: 10,
    scale: 10
})

display('./rocket/scene.gltf',function(o){
    o.position.y = 3
    o.position.x = -5
    o.rotation.y = 0
    function animateAstronot(){
        requestAnimationFrame(animateAstronot)
        control.update()
        // o.rotation.x += 0.1
        // o.rotation.y += 0.1
        if (o.position.x < 10 && o.rotation.y < 2.718281828){
            o.rotation.y = 0
            o.position.x += 0.01
        } else {
            o.rotation.y = 2.718281828
            o.position.x -= 0.01
        }

        if(o.position.x < -10){
            o.rotation.y = 0
        }
    }
    animateAstronot()

}, function(s){},{
    x: 3,
    y: 3,
    z: 3,
    scale: 0.01
})

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

display('./meteor/scene.gltf', function(o){
    o.position.y = 1;
    o.position.x = -2
    function animateMeteor(){
        requestAnimationFrame(animateMeteor)
        control.update()
        o.rotation.y += 0.03
    }
    animateMeteor()
}, function(s){}, {
    x : 3,
    y: 3,
    z: 3,
    scale: 1
})

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
    requestAnimationFrame(animate)
    control.update()
    renderer.render(scene, camera)
}

animate()