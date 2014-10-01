app.controller('mainCtrl', function($scope, parseService){
	$scope.questions = [];
	$scope.editStatus = function(q){
		var id = q.objectId;
		var status = 'helped';
		parseService.putData(status, id).then(function(){
			q.status = 'helped';
			q.update
		});
	};
	$scope.postData = function(){
		var status = 'new';
		return parseService.postData($scope.question, status).then(function(question){
			$scope.questions.push(question);
			$scope.question = '';
		});
	};
	$scope.getData = function(){
		parseService.getData().then(function(questions){
			$scope.questions = questions;
		});
	};

	$scope.deleteData = function(d){
		var id = d.objectId;
		var toD = $scope.questions.indexOf(d);
		parseService.deleteData(id).then(function(){
			if(toD !== -1){
				$scope.questions.splice(toD, 1);
			}
		});
	};
	$scope.cancel = function(){
		$scope.question = '';
	};
	$scope.getData();
});