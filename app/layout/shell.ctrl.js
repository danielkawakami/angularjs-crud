(function() {
    angular.module("app.shell")
        .controller("AppCtrl", function($scope){
            $scope.teste = function() {
                console.log("teste");
            }
    });

})();