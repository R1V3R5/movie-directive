function ImdbCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    controller: 'MovieController as vm',
    templateUrl: 'templates/movie-card.tpl.html'
  }
}

ImdbCard.$inject = [];
export { ImdbCard };