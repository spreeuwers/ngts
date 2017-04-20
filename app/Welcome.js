System.register([], function (exports_1, context_1) {
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
//# sourceMappingURL=Welcome.js.map