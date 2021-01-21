import { of } from 'rxjs';
const myObservable = of('apple', 'orange', 'grappe');
const subscribe = myObservable.subscribe(val => console.log(val));