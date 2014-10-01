app.service('parseService', function($http, $q){
  this.postData = function(question, status){
    var defer = $q.defer();
    $http.post('https://api.parse.com/1/classes/questions', {question: question, status: status }).then(function(data){
      var objectId = data.data.objectId;
      $http.get('https://api.parse.com/1/classes/questions/' + objectId).then(function(dataReturn){
          var question = dataReturn.data;
          defer.resolve(question);
      });   
    });
    return defer.promise;
  }; 
  this.putData = function(status, id){
    var defer = $q.defer();
    $http.put('https://api.parse.com/1/classes/questions/' + id, {status: status}).then(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  };
  this.getData = function(){
  	var defer = $q.defer();
    $http.get('https://api.parse.com/1/classes/questions?order=-createdAt').then(function(data){
    	var questionList = data.data.results;
    	defer.resolve(questionList);
    });
    return defer.promise;
  };  
  this.deleteData = function(id){
  	var defer = $q.defer();
  	$http.delete('https://api.parse.com/1/classes/questions/' + id).then(function(){
  		defer.resolve();
  	});
  	return defer.promise;
  };
});