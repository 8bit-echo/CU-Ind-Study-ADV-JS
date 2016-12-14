define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = "Welcome to Aurelia";
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = "Instagrampa";

      config.map([{
        route: ['', 'home'],
        name: 'home',
        moduleId: './home',
        nav: true,
        title: 'Home'
      }, {
        route: ['me', 'me'],
        name: 'me',
        moduleId: './me',
        nav: true,
        title: 'Me'

      }]);

      this.router = router;
    };

    return App;
  }();
});
define('auth-service',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Auth0ClientID = "h1zHM4kD1cN1YOD5UJzGru6FqKKAzjk6";
  var Auth0ClientSecret = "zBtjI1BDKDsVlRkf5IIi85V7Mae3p8sE61Z7rVMQQsDrCt3cG9V3UtBOocm7c2VG";

  var AuthService = exports.AuthService = function () {
    function AuthService() {
      _classCallCheck(this, AuthService);

      this.auth0 = new Auth0({
        domain: 'http://localhost:9000',
        clientID: Auth0ClientID,
        callbackURL: 'http://localhost:9000/#/',
        callbackOnLocationHash: true
      });
    }

    AuthService.prototype.sigin = function sigin() {
      var _this = this;

      this.auth0.login({
        connection: 'instagram',
        popup: true
      }, function (err, profile) {
        if (err) {
          alert("something went wrong: " + err.message);
          return;
        }

        _this.auth0.getProfile(profile.idToken, function (err, profile) {
          if (err) {
            alert(err);
            return;
          }
          localStorage.setItem('token', profile.identities[0].access_token);
        });
      });
    };

    AuthService.prototype.signout = function signout() {
      localStorage.removeItem('token');
    };

    return AuthService;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('home',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Home = exports.Home = function Home() {
        _classCallCheck(this, Home);

        this.heading = "Welcome to Instagrampa";
    };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('me',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Me = exports.Me = function Me() {
        _classCallCheck(this, Me);

        this.heading = "This is Me.";
    };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <!-- Require 3rd party libraries  -->\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" integrity=\"sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1\" crossorigin=\"anonymous\">\n\n    <!-- Bootstrap Navigation  -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle Navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">\n                    <i class=\"fa fa-home\"></i>\n                    <span>${router.title}</span>\n                </a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                <!-- Loop through routes to create a menu  -->\n                    <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n                        <a href.bind=\"row.href\">${row.title}</a>\n                    </li>\n                </ul>\n\n                <ul class=\"nav navbar-nav navbar-right\">\n                <!-- Show loader when changing routes  -->\n                    <li class=\"loader\" if.bind=\"router.isNavigating\">\n                        <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n                    </li>\n                </ul>\n            </div>\n    </nav>\n\n    <div class=\"page-host\">\n    <!-- Route mount point  -->\n    <router-view></router-view>\n    </div>\n</template>\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"jumbotron\">\n        <h2 class=\"text-center\">${heading}</h2>\n    </div>\n</template>\n"; });
define('text!me.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"jumbotron\">\n    <h2 class=\"text-center\">${heading}</h2>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map