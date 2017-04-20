
System.register("Persoon", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Persoon;
    return {
        setters: [],
        execute: function () {
            Persoon = class Persoon {
                constructor() {
                    this.naam = 'jansen';
                    this.test = 1;
                }
            };
            exports_1("Persoon", Persoon);
        }
    };
});
System.register("domain", ["Persoon"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Persoon_1, domain;
    return {
        setters: [
            function (Persoon_1_1) {
                Persoon_1 = Persoon_1_1;
            }
        ],
        execute: function () {
            console.log('init domain!!');
            domain = {
                Persoon: Persoon_1.Persoon
            };
            //console.log('domain imported!! '); 
        }
    };
});
//# sourceMappingURL=domain.js.map