angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $ionicLoading, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 $scope.sendComment = function(comment){
var resp;
url ="http://localhost:8080/RestJersyProject/SuiviController/saveSuivi/"+comment;
$http.get(url).success(function(response){

  resp=response;

})
  //alert(resp);

 }

 $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})





.controller('cntr', function ($scope) {
    $scope.inputs = [];
    $scope.addfield = function () {
        $scope.inputs.push({})
    }
    $scope.getValue = function (item) {
        alert(item.value)
    }
})

.controller('cntrDate',function ($scope)
{
    $scope.date = new Date();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

