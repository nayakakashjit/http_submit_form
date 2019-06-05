var app  = angular.module('regform',[]);

app.controller('redgCtrl',function($scope,$http){
    
    
    
    $scope.redgDetails = {};
    $scope.divstatus = false;
   
    $scope.submit = function(){
        $scope.divstatus = true;
        $scope.statusdiv = 'loading';
        $http({
            method: 'POST',
			url: 'https://reqres.n/api/users',
			data: '{"name": "Ramesh" ,"job": "Manager"}'
        }).then(function success (response){
             console.log(response);
            console.log(response.data);
            $scope.redgDetails = response.data;
            $scope.statusdiv = 'success';
            
        },function errorr (response){
            console.log(response.data);
            $scope.statusdiv = 'error';
            
        })
    }
    
});
