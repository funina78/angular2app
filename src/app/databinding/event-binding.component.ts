import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked2()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
    @Output('clickable') clicked = new EventEmitter<string>();
    onClicked2() {
        this.clicked.emit('It works!!');
    }
}
