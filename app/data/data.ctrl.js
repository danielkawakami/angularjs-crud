(function() {
    angular.module("app.data")
        .controller("ClientData", function($scope){
            $scope.clients = [
                {
                    id: 1,
                    name: "Adam Smith",
                    age: 31,
                    weight: 70.9,
                    position: "Engineer"
                },
                {
                    id: 2,
                    name: "Mary Moroe",
                    age: 22,
                    weight: 62.5,
                    position: "Actress"
                },
                {
                    id: 3,
                    name: "John Snow",
                    age: 29,
                    weight: 82.1,
                    position: "Sales manager"
                }
            ];
        });
})();