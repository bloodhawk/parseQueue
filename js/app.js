var app = angular.module('parseQueue', []);
app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
