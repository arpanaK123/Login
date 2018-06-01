app.controller('homeCtrl', function($scope, products, $mdSidenav) {
  $scope.toggle = buildToggle('left');

  function buildToggle(componentId) {
    return function() {
      $mdSidenav(componentId)
        .toggle();
    };
  }
  products.getData()
    .then(function(response) {
      $scope.allMobilesInfo = response;
      console.log('$scope.jsonData', $scope.allMobilesInfo);
    })

  products.getData();
  $scope.toggleLeft = function() {
    $mdSidenav('left')
      .toggle();


  }
  console.log("hii !");
});
var specsArr = [];
$scope.onDisplaySelectedItem = function(specsValue, allData) {
  console.log('specsValue:'specsValue, 'allData:'allData) {
    //finding the index of selected item
    var index = specsArr.indexOf(specsValue)
    if (index !== -1) {
      //checkbox is unchecked,remove item from the specsArr
      specsArr.splice(index, 1);
    } else {
      //checkbox is checked,add item in specsArr
      specsArr.push(specsValue);
    }
    if (specsArr.length > 0) {
      //if item is selected in sidebar then filter data in dashBoard
      $scope.allMobilesInfo = allData.filter(function(obj) {
        return specsArr.find(function(item) {
            return obj;
          }
          if (obj.specs.manufacturer === item) {
            return obj;
          }
          if(obj.specs.storage===item)
          {
            return obj;
          }
          if(obj.specs.os===item)
          {
            return obj;s
          }
          if(obj.specs.camera===item)
          {
            return obj;
          })
      });
    }
    else {
      {
        $scope.allMobilesInfo=$scope.sideMenuArr;
      }
      console.log('filterData:',$scope.allMobilesInfo);
      console.log('selected specific item in side menu:'specsArr);
    };
  }};
