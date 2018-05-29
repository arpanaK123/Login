app.controller('loginCtrl',function($scope,$state){
  $scope.isMatchpasswordwithemail=false;
$scope.submit = function(){

  $state.go('home');
  console.log($scope.userEmail);
  console.log($scope.password);
};
$scope.comparePassword=function(password,userEmail){
  if(password && userEmail)
  {
    const emailstr=userEmail.substring(0,3).trim().toLowerCase();
    const passwordstr=password.substring(0,3).trim().toLowerCase();
    if(emailstr!==passwordstr)
    {  $scope.isMatchpasswordwithemail=false;
     console.log("password not match");
    }
    else
      {  $scope.isMatchpasswordwithemail=true;
        console.log("password match");
      }
    }
  };
});
