import { Logger } from './../util/color-console-log.util';

/**
 * The log decorator replaces the original function with a new function that logs received arguments,
 * executes the original method and stores the result in a local variable, logs and returns the result.
 * @param target {Object} The prototype of the class (the method being decorated)
 * @param propertyKey {string | symbol} The name of the method
 * @param descriptor {TypedPropertyDescriptor} The third parameter in Object.defineProperty(). As this
 *                   param is a generic, we can restrict the methods where be applied.
 */
export function log(target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<any>) {
  Logger.initTrace('log');

  //const { configurable, enumerable, initializer, value } = descriptor;

  // Save a reference to the original method
  var originalDecoratedMethod = descriptor.value;

  // NOTE: Do not use arrow syntax here to use the correct value of 'this' in this method
  descriptor.value = function(...args: any[]) {
    // PRE
    Logger.log("The method args are: " + JSON.stringify(args));

    // Run/Execute and save/store the result
    const result = originalDecoratedMethod.apply(this, args);

    // POST
    Logger.log("The return value is: " + result);

    // Return the result of the original method (or modify it before returning)
    Logger.endTrace('log');
    return result;
  };
  return descriptor;
}

/*
// Object.defineProperty()
-> This method dfines a new property directy on an object, or modifies an existing property on that object, and
   returns the object. By default, values added using Objet.defineProperty() are immutable. Params:
   - obj: the objet on which to define the property
   - prop: the name of the property to be defined or modified
   - descriptor: the descriptor for the property being defined or modified

-> The descriptors are objects. They share the following required keys:
    - configurable: true if and only if the type of this property desriptor may be changed and if the property 
      may be deleted from the corresponding object.
    - enumerable: true if and only if this property shows up during enumeration of the properties on the 
      corresponding object.

-> A data descriptor also has the following optional keys:
    - value: the value associated with the property. Can be any valid JS value.
    - writable: true if and only if the value associated with the property may be changed with an assigment operator

-> An accessor descriptor also has the following optional keys:
    - get: getter
    - set: setter

-> Example:
  Object.defineProperty(obj, 'key', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static'
  });
*/


/*
Suppose that we have a TypedPropertyDescriptor<number> param. The signature will be:

  function numberOnly(target, propertyKey, descriptor: TypedPropertyDescriptor<(num: number) => number>) {
	  // This descriptor is only allowed on methods that have one parameter of type number *AND* return a number
    return descriptor;
  }

This decorator can only be applied over methods with numeric parameters. For instance:

  class MyClass {

    @numberOnly    // Will fail
    stringMethod(arg: string) {
      return "Message: " + arg;
    }

    @numberOnly    // Won't fail
    numberMethod(num: number) {
      return num;
    }

  }
*/


/**
 * Decorator Factory. When using arguments, we declare a function with the decorator's parameters. Then, we
 * return a function with the signature of the above example, the version without arguments.
 * @param decoratorAnnotations 
 */
export function log2(data) {
  Logger.initTrace('log2');
  Logger.log('Evaluating log2 decorator with data: ', data);
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    var originalMethod = descriptor.value;
 
    //editing the descriptor/value parameter
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        // note usage of originalMethod here
        var result = originalMethod.apply(this, args);
        var r = JSON.stringify(result);
        Logger.log("Call: " + propertyKey + "(" + a + ") => " + r);
        Logger.endTrace('log2');
        return result;
    };
 
    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
  }
}


export default function debounce(duration) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        // Attach this function to the instance (not the class)
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: () => { /* función que hace el tiemout */ }
        });
        return this[key];
      }
    }
  }
}