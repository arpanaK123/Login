app.controller('homeCtrl',function( $scope , products , $mdSidenav){
  products.getData();
  $scope.toggleLeft = function () {
       $mdSidenav('left').toggle();

  }
  console.log("hii !");
});
