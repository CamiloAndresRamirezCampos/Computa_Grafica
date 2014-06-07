window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	
	var lienzo = new THREE.WebGLRenderer();
	lienzo.setSize(ancho,alto);
	


	document.body.appendChild(lienzo.domElement);
	var escena = new THREE.Scene;
	var marte= new THREE.SphereGeometry(180,180,200);
	var color = new THREE.MeshLambertMaterial({color: "#664B4B"});


	var texturaUno = THREE.ImageUtils.loadTexture( 'pluton.jpg' );
	texturaUno.anisotropy = lienzo.getMaxAnisotropy();


	var materialUno = new THREE.MeshBasicMaterial( { map: texturaUno } );

	var marte1 = new THREE.Mesh(marte, color);
	
	
	var marte1 = new THREE.Mesh(marte, materialUno);
	


	escena.add(marte1);

	var camara = new THREE.PerspectiveCamera(80,(ancho / alto),0.1, 1000);
	camara.position.y = 160;
	camara.position.z = 300;
	camara.lookAt(marte1.position);
	marte1.position.x = -45;
	escena.add(camara);
	var  x = 0;
	var inicia = true;
	var encima = true;
	function renderizar()
	{
		if(!encima || inicia)
		{
			inicia = false;
			requestAnimationFrame(renderizar);
			return false;
		}
		
		marte1.rotation.z += 0.006;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
	addEventListener("mouseover",function(){encima=true;});
	addEventListener("mouseout",function(){encima=false;});
}