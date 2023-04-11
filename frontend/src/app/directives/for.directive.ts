import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  constructor() { 
    console.log('My For')
  }

ngOnInit(): void {
  
}  
}
