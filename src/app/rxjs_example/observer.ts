import { of } from 'rxjs';
// an observer is a function which has a set of instructions on how to handle the 
// observable
const observer = {
next: (x: string) => console.log('Observer value', x),
error: (err: string) => console.error('Observer Error', err),
complete: () => console.log('completed')
};
const myObservable = of('apple', 'orange', 'grappe');
const subscribe = myObservable.subscribe(observer);