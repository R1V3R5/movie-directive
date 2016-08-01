import angular from 'angular';

import { MainController } from './controllers/main.controller';
import { MovieController } from './controllers/movie.controller';

import { ImdbCard } from './directives/imdb.directive';


angular
  .module('app', [])
  .controller('MainController', MainController)
  .controller('MovieController', MovieController)
  .directive('imdbCard', ImdbCard)
;