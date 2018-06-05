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
  // $scope.stars=[{url: 'bower_components/material-design-icons/toggle/svg/design/a.svg'},
  // {url: 'bower_components/material-design-icons/toggle/svg/design/a.svg'},
  // {url: 'bower_components/material-design-icons/toggle/svg/design/a.svg'},
  // {url: 'bower_components/material-design-icons/toggle/svg/design/a.svg'},
  // {url: 'bower_components/material-design-icons/toggle/svg/design/a.svg'}];

  function dialogController($scope, data, $mdDialog) {
    $scope.data = data;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});
