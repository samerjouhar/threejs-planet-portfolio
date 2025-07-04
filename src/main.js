import './style.css'
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
})

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const torus1Texture = new THREE.TextureLoader().load('./assets/images/torus1blue.png');
const torus1geometry = new THREE.TorusKnotGeometry(7,.8,175,50,6,15);
const torus1material = new THREE.MeshPhongMaterial( { 
  color: 0x003399, 
  map: torus1Texture});
const torus1knot = new THREE.Mesh(torus1geometry, torus1material);

const torus2Texture = new THREE.TextureLoader().load('./assets/images/torus2red.jpg');
const torus2geometry = new THREE.TorusKnotGeometry(6,.7,300,20,10,15);
const torus2material = new THREE.MeshPhongMaterial( {  
  color: 0x990033,
  map: torus2Texture});
const torus2knot = new THREE.Mesh(torus2geometry, torus2material);

const torus3geometry = new THREE.TorusKnotGeometry(2,.2,300,20,12,8);
const torus3material = new THREE.MeshPhongMaterial( {  
  color: 0x1E2F1B});
const torus3knot = new THREE.Mesh(torus3geometry, torus3material);

torus1knot.position.x = -25;
torus1knot.position.z = -20;

torus2knot.position.z = 10;
torus2knot.position.x = 10;
torus2knot.position.y = -15;

torus3knot.position.z = 35;
torus3knot.position.x = 10;
torus3knot.position.y = 6;

const ring1Geometry = new THREE.RingGeometry(45, 45.4, 30, 30, 0, 6.283185);
const ring1Material = new THREE.MeshBasicMaterial({color: 0xADD8E6, wireframe: true});
const ring1 = new THREE.Mesh(ring1Geometry,ring1Material);

const ring2Geometry = new THREE.RingGeometry(46, 46.3, 30, 30, 0, 6.283185);
const ring2Material = new THREE.MeshBasicMaterial({color: 0x90EE90, wireframe: true});
const ring2 = new THREE.Mesh(ring2Geometry,ring2Material);

scene.add(ring1, ring2);

const body8ringGeometry = new THREE.SphereGeometry(0)
const body8ringMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
const body8orbit = new THREE.Mesh(body8ringGeometry, body8ringMaterial);

scene.add(body8orbit);

ring1.position.z = -200;
ring1.position.y = 30;
ring1.position.x = 50;
ring1.rotation.x = 1.1;

ring2.position.z = -200;
ring2.position.y = 30;
ring2.position.x = 50;
ring2.rotation.x = .1;
ring2.rotation.y = .4;

const sunLight = new THREE.PointLight(0xffffff, 2);
const spotLight = new THREE.SpotLight(0xffffff, 1.5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(spotLight, ambientLight);

sunLight.position.z = -60;
sunLight.position.y = -30;
sunLight.position.x = -50;

const gridHelper = new THREE.GridHelper(200,50);

const controls = new OrbitControls(camera, renderer.domElement);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const starGeometry = new THREE.SphereGeometry(.1);

function addStar() {
  const starMaterial = new THREE.MeshStandardMaterial( {color: getRandomColor()});
  const star = new THREE.Mesh(starGeometry, starMaterial);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('/assets/images/spacebg.png');
scene.background = spaceTexture;

const bodyTexture = new THREE.TextureLoader().load('./assets/images/bodymap.jpg');
const normalTexture = new THREE.TextureLoader().load('./assets/images/normal.jpg');
const body = new THREE.Mesh(
  new THREE.SphereGeometry(2.4,32,32),
  new THREE.MeshStandardMaterial( {
    map: bodyTexture,
    normalMap: normalTexture
  })
)

const body2Texture = new THREE.TextureLoader().load('./assets/images/body2map.jpg');
const body2 = new THREE.Mesh(
  new THREE.SphereGeometry(1.6,32,32),
  new THREE.MeshStandardMaterial( {
    map: body2Texture,
    
  })
)

const body3Texture = new THREE.TextureLoader().load('./assets/images/body3map.jpg');
const body3 = new THREE.Mesh(
  new THREE.SphereGeometry(1.6,32,32),
  new THREE.MeshStandardMaterial( {
    map: body3Texture,
    normalMap: normalTexture
  })
)

const body4Texture = new THREE.TextureLoader().load('./assets/images/body4.jpg');
const body4 = new THREE.Mesh(
  new THREE.SphereGeometry(16,32,32),
  new THREE.MeshStandardMaterial( {
    map: body4Texture,
  })
)

const body5Texture = new THREE.TextureLoader().load('./assets/images/body5map.jpg');
const body5 = new THREE.Mesh(
  new THREE.SphereGeometry(24,32,32),
  new THREE.MeshStandardMaterial( {
    map: body5Texture,
    
  })
)

const body6Texture = new THREE.TextureLoader().load('./assets/images/body6map.jpg');
const body6 = new THREE.Mesh(
  new THREE.SphereGeometry(40,32,32),
  new THREE.MeshStandardMaterial( {
    map: body6Texture,
  })
)

const body7Texture = new THREE.TextureLoader().load('./assets/images/body7map.jpg');
const body7 = new THREE.Mesh(
  new THREE.SphereGeometry(80,32,32),
  new THREE.MeshStandardMaterial( {
    map: body7Texture,
  })
)

const body8Texture = new THREE.TextureLoader().load('./assets/images/body8map.png');
const body8 = new THREE.Mesh(
  new THREE.SphereGeometry(12,32,32),
  new THREE.MeshStandardMaterial( {
    map: body8Texture,
  })
)

const body9Texture = new THREE.TextureLoader().load('./assets/images/body9map.jpg');
const body9 = new THREE.Mesh(
  new THREE.SphereGeometry(160,32,32),
  new THREE.MeshStandardMaterial( {
    map: body9Texture,
  })
)

scene.add(body, body2, body3, body4, body5, body6, body7, body9);

body8orbit.add(body8);

body.position.z = 20;
body.position.y =-5;
body.position.x = -10;

body2.position.z = 15;
body2.position.y = 4;
body2.position.x = 10;

body3.position.z = -15;
body3.position.y = 2;
body3.position.x = 5;

body4.position.z = -30;
body4.position.y = -20;
body4.position.x = 40;

body5.position.z = -70;
body5.position.y = -40;
body5.position.x = -60;

body6.position.z = -200;
body6.position.y = 30;
body6.position.x = 50;

body7.position.z = -200;
body7.position.y = 0;
body7.position.x = -200;

body8orbit.position.z = -200;
body8orbit.position.y = 90;
body8orbit.position.x = 110;
body8.position.x = body8orbit.position.x;

body9.position.z = -500;
body9.position.y = -100;
body9.position.x = -400;

function onScroll() {
  const t = document.body.getBoundingClientRect().top - 35;

  torus3knot.position.x = -105 - t * .03;
  torus3knot.position.z = 120 + t * .03;

  camera.position.x = t * -.0002;
  camera.position.y = t * -.0002;
  camera.position.z = t * -.01;

  body2.position.x = t * .01 + 20;
  body2.position.y = t * .0005 + 4;

  body9.position.y = t * .001 - 100;
  body9.position.x = t * -.05 - 300;

  spotLight.position.x = t * -.0002;
  spotLight.position.y = t * -.0002;
  spotLight.position.z = t * -.01 - 1;
  const maxBrightness = 0.8;
  const minBrightness = 0.05;
  const gradualFactor = 0.0001;
  spotLight.intensity = Math.min(maxBrightness, Math.max(minBrightness, t * -gradualFactor + minBrightness));
}

document.body.onscroll = onScroll;

function animate() {
  requestAnimationFrame(animate);

  body.rotation.x += .00035;
  body.rotation.y += .00025;
  body.rotation.z += .00035;

  body2.rotation.x += .00025;
  body2.rotation.y += .00035;
  body2.rotation.z += 0;

  body3.rotation.x += .00055;
  body3.rotation.y += .0005;
  body3.rotation.z += .0015;

  body4.rotation.x += .00025;

  body5.rotation.x -= .00035;
  body5.rotation.y -= .00025;
  
  body6.rotation.x += .00025;
  body6.rotation.y += .00025;
  body6.rotation.z += .00025;

  body7.rotation.x += .000065;
  body7.rotation.y += .000025;
  body7.rotation.z += .00035;

  ring1.rotation.x += .006;
  ring1.rotation.y += .0003;

  ring2.rotation.x += .0001;
  ring2.rotation.y += .0005;
  
  body8orbit.rotation.y += .00075;
  body8orbit.rotation.x -= .00015;

  body8.rotation.x -= 0.00001;
  body8.rotation.y -= 0.002;

  body9.rotation.x += 0.0003;
  body9.rotation.y += 0.0002;
  
  controls.update();

  renderer.render(scene,camera);
}

animate();