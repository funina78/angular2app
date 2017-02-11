import { Component,
         OnInit,
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         Input,
         ViewChild,
         ContentChild} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content> <!--content defined in parent component  -->
    <hr>
    <p #boundP>{{bindable}}</p> <!-- define something in the view to use it in the component  -->

  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {  //implements this interface/hook, so angular2 knows to call this. To implement this OnInit interface, require us to implement ngOnInit() function. So Angular2 will call that function.

  @Input() bindable = 0;

  @ViewChild('boundP') boundP : HTMLElement; //This is how to access view stuff in component.  using ViewChild

  @ContentChild('boundContent') boundContent: HTMLElement; //This is how to access content stuff in Component.

  constructor() { }

  ngOnChanges() {
      this.log('ngOnChanges');
  }

  ngOnInit() {
      this.log('ngOnInit');
  }

  ngDoCheck() {
      this.log('ngDoCheck');
  }

  ngAfterContentInit() {
      this.log('ngAfterContentInit');
      console.log(this.boundContent);
  }

  ngAfterContentChecked() {
      this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
      this.log('ngAfterViewInit');
      console.log(this.boundP);
  }

  ngAfterViewChecked() {
      this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
      this.log('ngOnDestroy');
  }

  private log(hook: string) {
      console.log(hook);
  }
}
