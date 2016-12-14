define('app',['exports', 'aurelia-framework', './dependency-test'], function (exports, _aureliaFramework, _dependencyTest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CustomComponent = exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_dependencyTest.DependencyTest), _dec(_class = function () {
    function App(DependencyTest) {
      _classCallCheck(this, App);

      this.heading = 'My First Aurelia App';
      this.subheading = "";
      console.log(DependencyTest);
      this.twoWayBinding = "";
    }

    App.prototype.injectSubheading = function injectSubheading() {
      this.subheading = "BAM. Subheading";
    };

    return App;
  }()) || _class);

  var CustomComponent = exports.CustomComponent = function CustomComponent() {
    _classCallCheck(this, CustomComponent);
  };
});
define('dependency-test',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DependencyTest = exports.DependencyTest = function DependencyTest() {
        _classCallCheck(this, DependencyTest);

        this.test = 'Dependency Injection successful';
    };
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
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from = './components/custom-component.html'></require>\n  <h1>${heading}</h1>\n  <h2>${subheading}</h2>\n\n  <button click.delegate=\"injectSubheading()\">Add &lang;h2&rang;</button>\n\n  <custom-component></custom-component>\n\n  <h3>Two Way Data Binding</h3>\n  <input type=\"text\" value.bind=\"twoWayBinding\">\n  <p>\n      ${twoWayBinding}\n  </p>\n</template>\n"; });
define('text!components/custom-component.html', ['module'], function(module) { module.exports = "<!-- This is the definition of a custom component. imported into app.js. Injected into app.html -->\n<template>\n<p>\n    What you are currently seeing is a custom component that has been generated from a template and injected into the page dynamically. This one is located at <b>/src/components/custom-component.html</b>.\n</p>\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map