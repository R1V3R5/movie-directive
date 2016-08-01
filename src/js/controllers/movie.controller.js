function MovieController ($scope, $http) {
  let baseUrl = 'http://www.omdbapi.com/?i=' 
  let endUrl = '&plot=short&r=json' 

  let vm = this;
  console.log('Movie')

  $http.get(baseUrl + $scope.name + endUrl).then( res => {
    console.log(res.data)
    vm.favorite = res.data
  })
  

}

MovieController.$inject = ['$scope', '$http'];
export { MovieController };