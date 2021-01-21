import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
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
