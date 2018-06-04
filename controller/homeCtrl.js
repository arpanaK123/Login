// app.controller('homeCtrl', function($scope, $mdSidenav, products) {
//   $scope.toggleLeft = buildToggler('left');
//
//   function buildToggler(componentId) {
//     return function() {
//       $mdSidenav(componentId).toggle();
//     };
//   }
//
//   products.getData().then(function(response) {
//     $scope.allMobilesInfo = response;
//     $scope.sideMenuArr = response;
//     console.log('JSON response: ', response);
//   });
//   var specsArr = [];
//   $scope.onDisplaySelectedItems = function(specsValue, allData) {
//     console.log('specsValue:', specsValue, ', allData:', allData);
//     var index = specsArr.indexOf(specsValue); // finding the index of selected item.
//     if (index !== -1) {
//       // checkbox is unchecked, remove item from specsArr
//       specsArr.splice(index, 1);
//     } else {
//       // checkbox is checked, add item in specsArr
//       specsArr.push(specsValue);
//     }
//     if (specsArr.length > 0) { // if item is selected in sidebar, then filter data in dashboard.
//       // The filter() method creates a new array with all matched elements.
//       $scope.allMobilesInfo = allData.filter(function(obj) {
//         //The find() method returns the value of the first match element in the array.
//         return specsArr.find(function(item) {
//           if (obj.specs.manufacturer === item) {
//             return obj;
//           }
//           if (obj.specs.storage === item) {
//             return obj;
//           }
//           if (obj.specs.os === item) {
//             return obj;
//           }
//           if (obj.specs.camera === item) {
//             return obj;
//           }
//         })
//       });
//     } else {
//       // nothing is selected in sidebar, display all data.
//       $scope.allMobilesInfo = $scope.sideMenuArr;
//     }
//     console.log('Filtered Data:', $scope.allMobilesInfo);
//     console.log('Selected Specific item in side menu:', specsArr);
//   };
// });


app.controller('homeCtrl', function ($scope, $mdSidenav, products) {
$scope.toggleLeft = buildToggler('left');

function buildToggler(componentId) {
return function () {
$mdSidenav(componentId).toggle();
};
}

products.getData().then(function (response) {
$scope.allMobilesInfo = response;
console.log('JSON response: ', response);
});
$scope.manufacturerArr = [];
$scope.storageArr = [];
$scope.osArr = [];
$scope.cameraArr = [];
$scope.onDisplaySelectedItems = function (specsValue, specsType) {
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

var onPushOrPopData = function (specsValue, arr) {
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
