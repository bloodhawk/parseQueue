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