(function(){
    var app = angular.module('SectionManager', ['ContentManager', 'MessageHandler']);
    app.controller('SectionManagerCtrl', ['$scope', 'msgHan', function($scope, msgHan) {
        var self = this;
        $scope.msgHan = msgHan;
        $scope.manifest = $scope.$parent.modManifest;
    }]);
    

    app.directive('sectionManager', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/section-manager.html',
            controller: 'SectionManagerCtrl',
            controllerAs: 'SectionManager',
            scope: {
                sections: '=',
                subtab: '@',
                sectionIndex: '='
            }
        };
    });
})()