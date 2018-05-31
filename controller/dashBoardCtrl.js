app.controller('dashBoardCtrl',function($scope,$mdDialog){
  $scope.showMore = function(event,info)
  {$mdDialog.show({
    locals:(data:info),
    controller:dialogCOntroller,
    templateUrl: 'template/dialog.html',
    parent: angular.element(document.body),
    targetEvent: event,
     clickOutsideToClose:true;
  });

};
function dialogCOntroller($scope,data,$mdDialog)
{
  $scope.data=data;
  $scope.cancel=function()
  {
    $mdDialog.cancel();
  };
}
});
