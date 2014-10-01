var app = angular.module('parseQueue', ['pendingSpinner', 'notify']);
app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
