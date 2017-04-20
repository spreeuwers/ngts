import { Persoon } from './Persoon';

console.log('init domain!!');
(<any>window).domain = {
    Persoon: Persoon
}


//console.log('domain imported!! ');