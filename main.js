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

const control = new THREE.OrbitControls(camera, renderer.domElement)

const directLight = new THREE.DirectionalLight(0xffffff, 1)
directLight.position.y = 50000
scene.add(directLight)

const groundGeometry = new THREE.BoxGeometry(30,30, baseheight)
const groundMaterial = new THREE.MeshStandardMaterial({color: 0x080b24})
const groundObj = new THREE.Mesh(groundGeometry, groundMaterial)
groundObj.rotation.x = Math.PI / 2
groundObj.position.y = baseheight
scene.add(groundObj)

var objects = []

const loader = new THREE.GLTFLoader();

display('./room_blank/scene.gltf',function(o){}, function(s){},
    {
        x: 0,
        y: 5,
        z: 0,
        scale: 2
    })

// display('./planet/scene.gltf',function(o){}, function(s){},{
//     x: 10,
//     y: 2,
//     z: 3,
//     scale: 0.1
// })

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