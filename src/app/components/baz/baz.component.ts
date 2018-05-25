import { Component, OnInit } from '@angular/core';
import { 
  MyPropertyDecorator, MyParameterizedDecorator, MyPropertyValidator  
} from './../../decorators/property.decorator';

@Component({
  selector: 'app-baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.css']
})
export class BazComponent implements OnInit {

  private someClass: SomeClass;

  constructor() { }

  ngOnInit() {
    this.someClass = new SomeClass('A', 7);
    console.log('someClass instance: ', this.someClass);
    
    this.someClass.name = 'S';
    this.someClass.surname = 'G';
    console.log('someClass name: ', this.someClass);

    // Force error:
    //this.someClass.name = 'Semaaaaa';
    console.log('someClass name??: ', this.someClass);
  }

}

export class SomeClass {
  @MyPropertyDecorator
  varA: string = 'asdf';

  @MyPropertyValidator({ maxLength: 4 })
  name: string = 'pat';

  @MyPropertyValidator({ minLength: 0, maxLength: 10 })
  surname: string;

  @MyParameterizedDecorator({})
  varB:number;

  @MyPropertyDecorator
  varC = { c: 2 };

  constructor(a, b) {
    this.varA = a;
    this.varB = b;
  }
}

