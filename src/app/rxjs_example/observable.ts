import { Observable } from 'rxjs';

function sequenceSubscriber(observer){
  observer.next('Apple');
  observer.next('Orange');
  observer.next('Grappe');
  observer.complete();

  return {
    unsubscribe(){}
  };
}

const sequence = new Observable(sequenceSubscriber);
sequence.subscribe({
    // you now execute a command from a function that you have defined 
  next(msg){
    console.log(msg);
  },
  complete(){
    console.log('Finished');
  }
})