
$(document).ready(function (){
	var DonBosco = $("#ComprarDonBosco");
	var Pasion = $("#ComprarPasion");
	var Fatima = $("#ComprarFatima");
	var horariosdb = $(".radiosDonBosco");
	var horariosfa = $(".radiosFatima");
	var horariospa = $(".radiosPasion");
	var reporte = $("#Reporte");
	reporte.on("click", function(){
			$(".contenedor").html(function(){
					var html = "<h2 class='titulo'>Ventas realizadas</h2>";
					html += "<a href='index.html' id='Regresar'>Regresar</a>";
					for (var j = 0; j < localStorage.length; j++) {
						var ticket = JSON.parse(localStorage.getItem("factura"+j));
						html+= "<div class='minidivs'><h3>Nombre de la pelicula: "+ticket.Nombre+"</h3><h3>Horario: "+ticket.Horario+"</h3><h3>Cantidad de tickets: "+ticket.Cantidad+"</h3></div>";
					}
					return html;
				});
		});
	horariosdb.on("change", function(){
			json.DonBosco.Horario = this.value;
		});
	horariosfa.on("change", function(){
			json.Fatima.Horario = this.value;
		});
	horariospa.on("change", function(){
			json.Pasion.Horario = this.value;
		});

	var json = {
			"DonBosco":{
				"Nombre": "Don Bosco",
				"Clasificacion": "E",
				"Duracion": "200 minutos",
				"Formato": "2D,3D,DOB",
				"Butacas": "tradicionales",
				"Horario": "9:00 am",
				"Precio": 4.5
			},
			"Fatima":{
				"Nombre": "Fátima",
				"Clasificacion": "T",
				"Duracion": "113 minutos",
				"Formato": "2D,3D,DOB",
				"Butacas": "tradicionales",
				"Horario": "10:00 am",
				"Precio": 5
			},
			"Pasion":{
				"Nombre": "La pasión de Cristo",
				"Clasificacion": "M",
				"Duracion": "126 minutos",
				"Formato": "2D,3D,DOB",
				"Butacas": "tradicionales",
				"Horario": "11:00 am",
				"Precio": 4.75
			}
		}
		

	DonBosco.on("click", function (){
		var cantidad = prompt("Ingrese la cantidad de tickets que necesita");
		if (cantidad < 0 || isNaN(cantidad) || cantidad == null){
			alert("El número ingresado para la cantidad de tickets no es valido");
		}
		else{
			json.DonBosco.Precio = 4.5 * cantidad;
			var ticket = {
			"Nombre": json.DonBosco.Nombre,
			"Clasificacion": json.DonBosco.Clasificacion,
			"Duracion": json.DonBosco.Duracion,
			"Formato": json.DonBosco.Formato,
			"Butacas": json.DonBosco.Butacas,
			"Horario": json.DonBosco.Horario,
			"Cantidad": cantidad,
			"Precio": json.DonBosco.Precio
			}
			var nombre = "factura" + localStorage.length;
			localStorage.setItem(nombre, JSON.stringify(ticket));
			$(".contenedor").html("<div class='minidivs'><h2 class='titulo'>factura de compra</h2><h3>Nombre de la pelicula: "+ticket.Nombre+"</h3><h3>Horario: "+ticket.Horario+"</h3><h3>Cantidad de tickets: "+ticket.Cantidad+"</h3><h3>Total: $"+ticket.Precio+"</h3><a href='index.html' id='RegresarFac'>Regresar</a></div>");
		}
	});

	Fatima.on("click", function (){
		var cantidad = prompt("Ingrese la cantidad de tickets que necesita");
		if (cantidad < 0 || isNaN(cantidad) || cantidad == null){
			alert("El número ingresado para la cantidad de tickets no es valido");
		}
		else{
			json.Fatima.Precio = 5 * cantidad;
			var ticket = {
			"Nombre": json.Fatima.Nombre,
			"Clasificacion": json.Fatima.Clasificacion,
			"Duracion": json.Fatima.Duracion,
			"Formato": json.Fatima.Formato,
			"Butacas": json.Fatima.Butacas,
			"Horario": json.Fatima.Horario,
			"Cantidad": cantidad,
			"Precio": json.Fatima.Precio
			}
			var nombre = "factura" + localStorage.length;
			localStorage.setItem(nombre, JSON.stringify(ticket));
			$(".contenedor").html("<div class='minidivs'><h2 class='titulo'>factura de compra</h2><h3>Nombre de la pelicula: "+ticket.Nombre+"</h3><h3>Horario: "+ticket.Horario+"</h3><h3>Cantidad de tickets: "+ticket.Cantidad+"</h3><h3>Total: $"+ticket.Precio+"</h3><a href='index.html' id='RegresarFac'>Regresar</a></div>");
		}
	});
	Pasion.on("click", function (){
		var cantidad = prompt("Ingrese la cantidad de tickets que necesita");
		if (cantidad < 0 || isNaN(cantidad) || cantidad == null){
			alert("El número ingresado para la cantidad de tickets no es valido");
		}
		else{
			json.Pasion.Precio = 4.75 * cantidad;
			var ticket = {
			"Nombre": json.Pasion.Nombre,
			"Clasificacion": json.Pasion.Clasificacion,
			"Duracion": json.Pasion.Duracion,
			"Formato": json.Pasion.Formato,
			"Butacas": json.Pasion.Butacas,
			"Horario": json.Pasion.Horario,
			"Cantidad": cantidad,
			"Precio": json.Pasion.Precio
			}
			var nombre = "factura" + localStorage.length;
			localStorage.setItem(nombre, JSON.stringify(ticket));
			$(".contenedor").html("<div class='minidivs'><h2 class='titulo'>factura de compra</h2><h3>Nombre de la pelicula: "+ticket.Nombre+"</h3><h3>Horario: "+ticket.Horario+"</h3><h3>Cantidad de tickets: "+ticket.Cantidad+"</h3><h3>Total: $"+ticket.Precio+"</h3><a href='index.html' id='RegresarFac'>Regresar</a></div>");
		}
	});
});