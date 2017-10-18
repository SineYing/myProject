myApp.controller('FormCtrl', function ($scope) {
    $scope.user = {
        "id": 1,
        "fName": 'Hege',
        "lName": "Pege",
        "ages": 18,
        "sex": 'woman',
        "hobby":{
            "book":true,
            "sing":false
        },
        "city": '北京'
    };
    $scope.citys=["北京","上海","天津","济南"];
    $scope.hobbys=["book","sing"]
})
//        创建新标签
    .directive('newDiv',function () {
        return{
            template:'<h3>创建的新标签</h3>'
        }
    })