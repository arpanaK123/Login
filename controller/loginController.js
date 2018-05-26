app.controller('loginCtrl',function($scope,$state){
$scope.submit = function(){
  $state.go('home');
  console.log($scope.email);
  console.log($scope.password);
};

});
