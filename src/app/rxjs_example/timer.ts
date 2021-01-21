import { timer } from 'rxjs';
const source = timer(1000,2000);
const subscribe = source.subscribe(val => console.log(val));
setTimeout(() => { subscribe.unsubscribe(); }, 10000); 