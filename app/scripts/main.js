// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  paths: {
    angular: '../bower_components/angular/angular',
    jquery: '../bower_components/jquery/jquery',
    domReady: '../bower_components/requirejs-domready/domReady',
    bootstrap: '../bower_components/bootstrap-sass/docs/assets/js/bootstrap'
  },
  shim: {
    angular: {
      deps: [ 'jquery', 'bootstrap' ],
      exports: 'angular'
    },
    bootstrap: {
      deps: ['jquery']
    },
    angularResource: { deps: ['angular'] }
  }
});

require([
    'angular',
    'app',
    'domReady',
    //  'services/userService',
    'controllers/main'
    //  'directives/ngbkFocus'
    // Any individual controller, service, directive or filter file
    // that you add will need to be pulled in here.
  ],
  function (angular, app, domReady) {
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        });
      }
    ]);
    domReady(function() {
      angular.bootstrap(document, ['angularApp']);

      // The following is required if you want AngularJS Scenario tests to work
      $('html').addClass('ng-app: angularApp');
    });
  }
);