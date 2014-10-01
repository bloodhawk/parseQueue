app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'SvIqcybGPatMWjs3oObPWyMcKT5mX8ZguxWy0LAv', 'X-Parse-REST-API-Key': 'xi8cLK2LGHVbLETiU8WsspBTuLWb0zmcEKqGpgjk'}
      return config;
    }
  };
});