app.controller('dbObjectsController', function($log, $http, $location, $rootScope)  {

  dbObjectsCtrl = this;

  this.brojTabela = 0;
  this.brojTriggera = 0;
  this.brojProcedura = 0;
  this.brojPogleda = 0;

  $http.get("http://localhost:8080/jdbc/getRowCount/user_tables").then(function successReponse(succResponse)  {
     $log.log(succResponse.data);
     dbObjectsCtrl.brojTabela = succResponse.data;
  }, function errorReponse(errResponse) {

  });
  $http.get("http://localhost:8080/jdbc/getRowCount/user_triggers").then(function successReponse(succResponse)  {
     $log.log(succResponse.data);
     dbObjectsCtrl.brojTriggera = succResponse.data;
  }, function errorReponse(errResponse) {

  });
  $http.get("http://localhost:8080/jdbc/getRowCount/user_views").then(function successReponse(succResponse)  {
     $log.log(succResponse.data);
     dbObjectsCtrl.brojPogleda = succResponse.data;
  }, function errorReponse(errResponse) {

  });
  $http.get("http://localhost:8080/jdbc/getRowCount/user_procedures").then(function successReponse(succResponse)  {
     $log.log(succResponse.data);
     dbObjectsCtrl.brojProcedura = succResponse.data;
  }, function errorReponse(errResponse) {

  });

  this.showObjects = function (objectName)  {
      $location.path('showObjectsPage/' + objectName);
  }

});