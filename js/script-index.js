$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	// llamar a la funcion en donde aparecera el titulo de recetas en las noticias
	printNews();

});

/* Funcion para que desaparezca la flecha */
$(".js-back").remove();


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}

/*funcion de noticias,aparecen titulo de noticias
	 se escribe aqui dentro para que se cargue con la pagina*/
	
	function printNews()
	{
		$(".title-callout").append("<p id='title-news'>" +
															"<h3 id='the-title'> NUEVAS RECETAS </h3>" +
															"</p>")
	}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


