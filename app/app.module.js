(function() {
    var name = "myApp",
        requires = [
            "app.shell",
            "app.data"
        ],
        myApp = null;
    myApp = angular.module(name, requires);
}());
