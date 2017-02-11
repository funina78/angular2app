import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle.component'

@Component({
  selector: 'app-root',
  template: `
    <h1>Root component</h1>
    <!--<fa-databinding></fa-databinding>-->   <!--showing data binding examples in this root component-->
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
    <p #boundContent>{{test}}</p>
    </fa-lifecycle>   <!--showing component life cycle examples in this root component-->
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed Value'">Click to Change Content</button>
    <button (click)="boundValue = 2000">Click to Change Bindable</button>
  `

})
export class AppComponent {
  delete = false;
  test = 'Starting Value';
  boundValue = 1000;
}
