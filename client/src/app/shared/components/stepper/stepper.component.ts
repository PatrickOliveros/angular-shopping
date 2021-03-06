import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  // what the hell is this providers?
  providers: [ { provide: CdkStepper, useExisting: StepperComponent}]
})
  
export class StepperComponent extends CdkStepper implements OnInit {

  // constructor() { }

  @Input() linearModeSelected: boolean;

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }

  onClick(index: number) {
    this.selectedIndex = index;
    // console.log(this.selectedIndex);
  }

}
