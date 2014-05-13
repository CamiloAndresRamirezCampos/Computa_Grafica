var debug = "";
window.onload = function()
{
		//alert("si carga")
//var color = "#FF0000";
var dibujar = SVG('Recuadro').size("65%",500);
var line=[[0,250],[400,250]]

var posicion = [[500,0], [800,0 ], [800, 100], [760,100 ] , [760, 40] , [540,40],[540,340], [760, 340] , 
                [760,280], [800,280 ] , [800,380], [500,380 ],[500, 0]]; //letra "C"

var posDestino = [[500, 0],[700, 0],[800,100],[700, 200],[650,200],[800,380 ],
                  [740,380 ],[590,200],[560,200],[560,380],[500,380],  //letra "R"
                  [500,140],[700,140],[740,100],[700, 60],[560, 60],[560, 140],[500, 140],[500,0]];
var continua = dibujar.polyline(posicion).fill( color =" #0026ff").stroke({width : 6, color: ' #e6c71a'});
                continua.animate(1000).plot(posDestino).loop();

for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				case 7: //Mostra máscara..
						if(this.value == 1)
						{
							image.show();
							//image.maskWith(continua);
							continua.maskWith(image);
						}
						else
						{
							//continua.remove()
							//image.hide();
							continua.unmask();
							//mask.remove()
						}
						break;
			}
		});
	}

var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}

/*
var otro= false;
nom_div("newline").addEventListener('click', function(event)
	{
		if(!otro)
		{
			continua.animate(1000).plot(posDestino);
		}
		else
		{
			continua.animate(1000).plot(posicion);
		}
		otro = !otro;
	});

function nom_div(div)
	{
		return document.getElementById(div);
	}*/
}