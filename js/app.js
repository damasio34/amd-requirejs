require.config({
	"baseUrl": "js/modules",
	"paths": {
		"jquery" : "../../bower_components/jquery/dist/jquery.min",
		"main": "../main"
	}
});

// Chamando o módulo principal para iniciar a aplicação.
requirejs(["main"]);