import { Logger } from './../util/color-console-log.util';

/**
 * 
 * @param target the function itself and not the prototype
 * @param propertyKey The name of the static method
 * @param descriptor The descriptor
 */
export function StaticMethodDecorator(
    target: Function, 
    propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<any>
) {
    Logger.initTrace('StaticMethodDecorator');
    Logger.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
    Logger.endTrace('StaticMethodDecorator');
}

/*
Example of use:

class StaticMethodDecoratorExample {
    @StaticMethodDecorator
    static staticMethod() {
    }
}

=> Output: "StaticMethodDecorator called on:  function StaticMethodDecoratorExample() {}"
*/