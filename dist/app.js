System.register("Welcome", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Welcome;
    return {
        setters: [],
        execute: function () {
            /**
             * Created by mwrd02 on 12-04-17.
             */
            Welcome = class Welcome {
                constructor() {
                    this.greeting = 'Welcome!';
                    this.test = 1;
                }
            };
            exports_1("Welcome", Welcome);
        }
    };
});
System.register("initialize", ["Welcome", "angular"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Welcome_1, angular_1, app;
    return {
        setters: [
            function (Welcome_1_1) {
                Welcome_1 = Welcome_1_1;
            },
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }
        ],
        execute: function () {
            app = angular_1.default.module('demo', [])
                .controller('WelcomeController', Welcome_1.Welcome);
        }
    };
});
