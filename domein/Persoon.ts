
export class Persoon {

    naam = 'jansen';
    test=1;


    constructor(naam: string){
        this.naam = this.naam || naam;

    }

    toString(){
        return this.naam;
    }
}