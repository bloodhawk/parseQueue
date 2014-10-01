var app = angular.module('parseQueue', ['pendingSpinner']);
app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
