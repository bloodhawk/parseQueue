/*--------------------pendingSpinner module--------------------*/


var app1 = angular.module('pendingSpinner', []);
app1.directive('pendingSpinner', function(){
	return {
		restrict: 'AE',
		scope: {
			request: '&',
			template: '@spinnerSource',
			width: '@spinnerWidth',
			height: '@spinnerHeight'
		},
		link: function(scope, element, attrs){
			var clicked = function(){
				element.hide();
				element.after('<img style="width:'+scope.width+'; height:'+scope.height+'; display: inline-block;" src="' + scope.template +'"/>');
				scope.request().then(function(){
					element.show();
					element.next().remove();
				});
			}
			element.bind('click', clicked);					
		}
	}
});

     
/*------------------------notify module---------------------------*/


var app2 = angular.module('notify', []);
app2.directive('notify', function ($q) {
    return {
        restrict: 'AE',
       scope: {   
            func: '&',
            title: '=',
            body: '=',
            icon: '='
        },
        link: function (scope, element, attrs) {
            var Notification = window.Notification || window.mozNotification || window.webkitNotification;
            var getPerms = function () {
                var defer = $q.defer();
                Notification.requestPermission(function (permission) {
                    if (Notification.permission !== permission) {
                        Notification.permission = permission;
                    }
                    defer.resolve(Notification.permission);
                });
                return defer.promise;
            };
            var nBind = function(perm){
                if (perm === "granted") {
                    element.bind('click', function () {
                       scope.request().then(function(){
                            var n = new Notification(scope.title, {body: scope.body, icon: scope.icon});
                            n.onshow = function () {
                                setTimeout(function () {
                                n.close();
                                }, 5000);
                            };
                       });
                    });
                }
            };
            getPerms().then(nBind);
        }
    }
    /*
     var n = new Notification(scope.title, {body: scope.body, icon: scope.icon});
                        n.onshow = function () {
                            setTimeout(function () {
                                n.close();
                            }, 5000);
                        };
    */
});
