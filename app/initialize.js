System.register(["./Welcome"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Welcome_1, app;
    return {
        setters: [
            function (Welcome_1_1) {
                Welcome_1 = Welcome_1_1;
            }
        ],
        execute: function () {
            // class Welcome{
            //     greeting='hi';
            // }
            app = angular.module('demo', [])
                .controller('WelcomeController', Welcome_1.Welcome);
            angular.bootstrap(document, ['demo']);
        }
    };
});
//# sourceMappingURL=initialize.js.map