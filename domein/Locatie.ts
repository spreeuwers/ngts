
export class Locatie {

    naam = 'utrecht';
    test=1;

    constructor(naam: string){
        this.naam = this.naam || naam;

    }

    toString(){
        return this.naam;
    }
}