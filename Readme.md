[SURGE!](http://tiy-joshuarivers-movie-directive.surge.sh)

## Learning Objectives

* Demonstrate understanding of how to create & use AngularJS Custom Directives
* Continue to demonstrate an understanding of AngularJS Controllers, Models & ViewModels
* Continue to demonstrate best practices with ControllerAs Syntax
* Continue to demonstrate understanding of how to create and use AngularJS Services.

## Normal Mode

* Use the [OMDB API](http://www.omdbapi.com/) to pull your information.
* Use the website [IMDB](http://www.imdb.com/) to get the movie ID. For instance - http://www.imdb.com/title/tt1754656/ - the id is `tt1754656`
* Create a `<movie-card></movie-card>` directive that will display the following information:
  * Poster
  * Title
  * Rated
  * Released
* Once the directive is created, create a controller for you view that will hold a list of your favorite movies and repeat all instances of your movieCard directive to display those movies.

## Hard Mode

* If a movie has received awards, show a star icon that displays the award info when hovered on

## Harder Mode

* Install UI Router and set up a fully functioning app
* Have a search page that will allow you to search for movie by title and display them (as directives)