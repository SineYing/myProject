myApp.controller('ListCtrl', function ($scope, $http,$q) {
    $scope.fName = '';
    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.users = '';
    // //$http
    // $http({
    //     method: "GET",
    //     url: "components/data/user.json",
    // }).then(function successCallback(response) {
    //     // 请求成功执行代码
    //     $scope.users=response.data;
    // }, function errorCallback(response) {
    //     // 请求失败执行代码
    //     console.log(response)
    // });
    var deferUser=$q.defer();
    var promiseUser=deferUser.promise;
    $http({
        method: "GET",
        url: "components/data/user.json",
    }).then(function (response) {
        // 请求成功执行代码
        deferUser.resolve(response);
    }, function errorCallback(response) {
        // 请求失败执行代码
        deferUser.reject(response);
    });
    promiseUser.then(function (response) {
        console.log(response);
        $scope.users = response.data;
    })
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.editUser = function (id) {
        if (id == 'new') {
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
        } else {
            $scope.edit = false;
            $scope.fName = $scope.users[id - 1].fName;
            $scope.lName = $scope.users[id - 1].lName;
        }
    };

    $scope.$watch('passw1', function () {
        $scope.test();
    });
    $scope.$watch('passw2', function () {
        $scope.test();
    });
    $scope.$watch('fName', function () {
        $scope.test();
    });
    $scope.$watch('lName', function () {
        $scope.test();
    });

    $scope.test = function () {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
                !$scope.lName.length ||
                !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
})