app.controller('dashBoardCtrl',function($scope,$mdDialog){
  $scope.showMore = function($event,info)
  {
    $mdDialog.show({
    locals:(data:info),
    controller:dialogController,
    templateUrl: 'template/dialog.html',
    parent: angular.element(document.body),
    targetEvent: event,
     clickOutsideToClose:true;
  });

};
function dialogController($scope,data,$mdDialog)
{
  $scope.data=data;
  $scope.cancel=function()
  {
    $mdDialog.cancel();
  };
}
});
