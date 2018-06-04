app.controller('homeCtrl', function($scope, $state, $mdSidenav, products) {
  $scope.toggleLeft = buildToggler('left');
$scope.isSidebarOpen=false;

  function buildToggler(componentId) {
    return function() {
      $scope.isSidebarOpen=!$scope.isSidebarOpen;
      $mdSidenav(componentId).toggle();
    };
  }

  $scope.onLogout = function() {
    $state.go('login');
  };

  products.getData().then(function(response) {
    $scope.allMobilesInfo = response;
    console.log('JSON response: ', response);
  });
  $scope.manufacturerArr = [];
  $scope.storageArr = [];
  $scope.osArr = [];
  $scope.cameraArr = [];
  $scope.onDisplaySelectedItems = function(specsValue, specsType) {
    switch (specsType) {
      case 'manufacturer':
        onPushOrPopData(specsValue, $scope.manufacturerArr);
        break;
      case 'storage':
        onPushOrPopData(specsValue, $scope.storageArr);
        break;
      case 'os':
        onPushOrPopData(specsValue, $scope.osArr);
        break;
      case 'camera':
        onPushOrPopData(specsValue, $scope.cameraArr);
        break;
    }

    console.log('manufacturerArr:', $scope.manufacturerArr);
    console.log('storageArr:', $scope.storageArr);
    console.log('osArr:', $scope.osArr);
    console.log('cameraArr:', $scope.cameraArr);
  };

  var onPushOrPopData = function(specsValue, arr) {
    var index = arr.indexOf(specsValue); // finding the index of selected item.
    if (index !== -1) {
      // checkbox is unchecked, remove item from arr
      arr.splice(index, 1);
    } else {
      // checkbox is checked, add item in arr
      arr.push(specsValue);
    }
  }
});
