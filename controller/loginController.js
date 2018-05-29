app.controller('loginCtrl',function($scope,$state){
  $scope.isMatchpasswordwithemail=false;
$scope.submit = function(){

  $state.go('home');
  console.log($scope.email);
  console.log($scope.password);
};
$scope.comparePassword=function(password,userEmail){
  if(password && email)
  {
    const emailString=userEmail.subString(0,3).trim().toLowerCase();
    const passwordString=password.subString(0,3).trim().toLowerCase();
    if(emailString!==passwordString)
    {  $scope.isMatchpasswordwithemail=false;
     console.log(password not match);
    }
    else
      {  $scope.isMatchpasswordwithemail=true;
        console.log(password match);
      }
    }
  };
});
