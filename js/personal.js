$(document).ready(inicio)
			function inicio(){
				$("select").change(cambiacss);
			}
			function cambiacss(){
				var plantilla =$("select").attr("value");
				$("plantilla").html('<link rel=Stylesheet href="css/'+plantilla+'.css" type="text/css">');
			}