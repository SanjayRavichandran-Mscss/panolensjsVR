const panorama = new PANOLENS.ImagePanorama( 'images/panel2.mp4' );
const panorama2 = new PANOLENS.ImagePanorama('images/pano5.jpg');
const panorama3 = new PANOLENS.ImagePanorama('images/panel1.jpeg');
let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);
panorama3.link( panorama, infospotPositions[2]);

viewer.add( panorama,panorama2 );

