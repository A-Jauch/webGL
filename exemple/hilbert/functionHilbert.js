function modele0(size){
  	halfSquare = size;


				center = new THREE.Vector3(0,0,0);
				vector = new THREE.Geometry();
				vector.vertices.push(new THREE.Vector3(center.x - halfSquare, center.y - halfSquare, 0)); //x, y, z
				vector.vertices.push(new THREE.Vector3(center.x - halfSquare, center.y + halfSquare, 0));
				/* linewidth on windows will always be 1 */

				vector.vertices.push(new THREE.Vector3( center.x + halfSquare, center.y + halfSquare, 0) );
				vector.vertices.push(new THREE.Vector3( center.x + halfSquare, center.y - halfSquare, 0) );
				material = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 5 } );
				modele0 = new THREE.Line(vector, material);

        return modele0;
}

function hilbert(n){
        if (n == 0) {
          modele0 = modele0();
        }
				curveFinal = new THREE.Group();
				curveFinal.add( modele0 );
				scene.add( curveFinal );
}
