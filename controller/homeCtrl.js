app.controller('homeCtrl',function( $scope , products , $mdSidenav){
  $scope.toggle=buildToggle('left');
  function buildToggle(componentId){
    return function(){
      $mdSidenav(componentId).toggle();
    };
  }
products.getData().then(function(response){
  $scope.allMobilesInfo=response;
  console.log('$scope.jsonData',$scope.allMobilesInfo);
})

  products.getData();
  $scope.toggleLeft = function () {
       $mdSidenav('left').toggle();


  }
  console.log("hii !");
});
// var specsArr=[]
// $scope.onDisplaySelectedItem=function(specsValue,allData){
// console.log('specsValue:'specsValue','allData:'allData);
// }
