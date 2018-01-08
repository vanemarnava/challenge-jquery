$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	// llamar a la funcion en donde aparecera el titulo de recetas en las noticias
	printNews();

	//llamar a la funcion que imprimira las recetas que se tomaron del render recipe
	//renderHighlightedRecipes();

});

/*1 Funcion para que desaparezca la flecha */
$("#js-back").remove();


/*2 funcion de noticias,aparecen titulo de noticias
	 se escribe aqui dentro para que se cargue con la pagina*/
	
function printNews()
{
	$("#title-news").append("<p>" +
													"<h3 id='the-title'> NUEVAS RECETAS </h3>" +
													"</p>")
}


/*
* 3 Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
	
var highlighted = [];
var recetas= $();

function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	for (var i = 0; i < recipesArray.length; i++)
	{	
		if(recipesArray[i].highlighted === true)
		{
			highlighted++;
			renderRecipe(recipesArray[i]);
		}		
	}
}

/*
* 4 Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	$(".list-recipes").append(`<a class="item-recipe" href="#"><span class="attribution">
      <span class="title-recipe">`+ recipe.title + `</span><span class="metadata-recipe">
      <span class="author-recipe">`+ recipe.source.name + `</span><span class="bookmarks-recipe">
      <span class="icon-bookmark"></span></span></span></span><img src="assets/img/recipes/320x350/`+ recipe[i].name +`.jpg"</a>` );
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




