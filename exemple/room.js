			import * as THREE from '../build/three.module.js';
			import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';

			const loader = new GLTFLoader();
			var pi = Math.PI;

function wall(){
  	//walls
        var wallGroup;
        var geometry2 = new THREE.BoxBufferGeometry( 2000, 1000, 50 );
        var texture = new THREE.TextureLoader().load('textures/wall.png');
        var material2 = new THREE.MeshBasicMaterial( {map: texture} );
        var wall1 = new THREE.Mesh( geometry2, material2 );
        wall1.position.set(0,500,-425);

        var geometry3 = new THREE.BoxBufferGeometry( 1450, 1000, 50 );
        var wall2 = new THREE.Mesh( geometry3, material2 );
        wall2.rotation.y = Math.PI/2;
        wall2.position.set(-1025,500,275);

        var wall3 = wall2.clone();
        wall3.position.x = 1025;

        wallGroup = new THREE.Group();
        wallGroup.add(wall1);
        wallGroup.add(wall2);
        wallGroup.add(wall3);

        return wallGroup;
}

function ground(){
    // ground
        var ground = new THREE.Group();

        var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        ground.add( mesh );

        var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        ground.add( grid );

         // center
        var geometry = new THREE.CylinderBufferGeometry( 5, 5, 1000, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var cylinder = new THREE.Mesh( geometry, material );
        cylinder.position.y = 500;
        //ground.add( cylinder );

        return ground;
}

export{ wall, ground }
