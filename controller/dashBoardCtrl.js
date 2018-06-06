app.controller('dashboardController', function($scope, $mdDialog) {
  $scope.showMore = function(event, info) {
    $mdDialog.show({
      locals: {
        data: info
      },
      controller: dialogController,
      templateUrl: 'template/dialogBox.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
    });
  };

  function dialogController($scope, data, $mdDialog) {
    $scope.data = data;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

  //

  $scope.addItemToCart = function(product) {
    if ($scope.cart.length === 0) {
      product.count = 1;
      $scope.cart.push(product);
    } else {
      var repeat = false;
      for (var i = 0; i < $scope.cart.length; i++) {
        if ($scope.cart[i].id === product.id) {
          repeat = true;
          $scope.cart[i].count += count;

        }
      }
      if (!repeat) {
        product.count = 1;
        $scope.cart.push(product);

      }
    }

  }
  $scope.removeItemToCart = function(product) {
    if (product.count > 1) {
      product.count -= 1;

    }
  }
});
