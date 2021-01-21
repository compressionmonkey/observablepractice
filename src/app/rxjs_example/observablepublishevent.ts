// here is html code
// <div>
//   <input type="text" id="yourname" placeholder="Type your name here" />
// </div>
import { AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs'

export class AppComponent implements AfterViewInit {

  ngAfterViewInit(){
    const ESC_KEY = 27;
    const nameInput = document.getElementById('yourname') as HTMLInputElement;
    this.fromEvent(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
      if(e.keyCode === ESC_KEY){
        nameInput.value = '';
      }
    })

  }

  fromEvent(target: HTMLInputElement, eventName: string){
    return new Observable((observer) => {
      const handler = (e: unknown) => observer.next(e);
      target.addEventListener(eventName, handler);

      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }
}
