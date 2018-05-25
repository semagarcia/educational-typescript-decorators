import { Logger } from './../util/color-console-log.util';

/*
Class decorators are the top-level decorators that we use to express *intent* for classes. Thanks to them
we can populate a class (or define that intent) without having to actually put any code inside the class.
*/
export function ClassDecoratorParams(param1: number, param2: string) {
    Logger.initTrace('ClassDecoratorParams');
    /**
     * @param The class decorator is declared on (TFunction extends Function)
     */
    return function(target: Object | Function) {
        console.log(`ClassDecoratorParams(${param1}, '${param2}') called on ${target}`);
        // Returning undefined is equivalent to returning the constructor function passed in as argument
        Logger.endTrace('ClassDecoratorParams');
    }
}

/*
Thanks to metadata API we can store information inside a class through a decorator. Suppose this decorator:

function MyClassDecorator(value: string) {
    return function(target: Function) {
        Reflect.defineMetadata('MyClassDecorator', value, target);
    }
}

// And then, in the code:

@MyClassDecorator('some valid data to store') 
class MyClass {}

var myClass = new MyClass();
let value: string = Reflect.getMetadata('MyClassDecorator', myClass.constructor);
console.log(value);  // => outputs 'some valid data to store'
*/

interface AwesomeDecoratorAnnotations {
    name: string;
    surname: string;
}
export function MyAwesomeDecorator(annotations: AwesomeDecoratorAnnotations) {
    Logger.initTrace('MyAwesomeDecorator');
    Logger.log('MyAwesomeDecorator >> annotations: ', annotations);
    return function(ctor: Function): void {
        Logger.log('MyAwesomeDecorator >> target: ', ctor);

        var original = ctor;

        function construct(constructor, args) {
            // If the decorated class has a parameterized constructor, args will hold
            // the arguments passed during the instantiation
            Logger.log('...args (construct): ', ...args);
            var c: any = function() {
                this.name = annotations.name;
                this.surname = annotations.surname;
                this.timestamp = new Date();
                return constructor.apply(this, args);
            }

            c.prototype = constructor.prototype;
            return new c();
        }

        var f: any = function(...args) {
            Logger.log('...args (f): ', ...args);
            return construct(original, args);
        }

        Logger.endTrace('MyAwesomeDecorator');
        f.prototype = original.prototype;
        return f;
    }
}