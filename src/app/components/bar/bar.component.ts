import { Component, OnInit } from '@angular/core';
import { ClassDecoratorParams, MyAwesomeDecorator } from './../../decorators/class.decorator';
import { log, log2 } from './../../decorators/method.decorator';
import { MyParamDecorator, MyParameterDecorator } from './../../decorators/parameter.decorator';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // Example 1
        let decoredClass = new ClassDecoratorParamsExample('Sema', 11);
        console.log('Calling to add() method...');
        decoredClass.add(1, 3);

        // Example 2
        console.log('Calling to multiply() method...');
        decoredClass.multiply(2, 3);

        // Example 3
        console.log('Creting MyGreateClass instance...');
        let greatClass = new MyGreatClass();
        console.log('This is the MyGreatClass instance: ', greatClass);
    }

}

@ClassDecoratorParams(1, 'a')
@ClassDecoratorParams(2, 'b')
class ClassDecoratorParamsExample { 
    public varA: string;
    public varB: number;

    constructor(a: string, b: number) {
        this.varA = a;
        this.varB = b;
    }

    @log
    add(x: number, y: number) {
        return x + y;
    }

    @log2({ foo: 9 })
    multiply(x: number, y: number) {
        return x * y;
    }

    division(@MyParamDecorator x: number, @MyParameterDecorator(true) y: number) {
        return x/y;
    }
}

@MyAwesomeDecorator({
    name: 'Sema',
    surname: 'García'
})
class MyGreatClass { }
