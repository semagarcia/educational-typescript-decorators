import { Logger } from './../util/color-console-log.util';

/**
 * Property decorators are similar to method decorators. The only difference is they do not accept
 * property descriptor as argument and do not return anything.
 * @param target {object} The prototype of the class
 * @param propertyKey {string | symbol} The name of the property
 */
export function MyPropertyDecorator(target: any, propertyKey: string | symbol) {
  Logger.initTrace('MyPropertyDecorator');
  console.log('PropertyDecorator called on... ');
  console.log(' > target: ', target);
  console.log(' > propertyKey: ', propertyKey);
  Logger.endTrace('MyPropertyDecorator');
}

/*
And the example could be:

class PropertyDecoratorExample {
  @PropertyDecorator
  name: string;
}
=> The output will be: "PropertyDecorator called on:  {} name"
*/



export function MyParameterizedDecorator(constraints?: Object): Function {
  Logger.initTrace('MyParameterizedDecorator');
  console.log('Decorator constraints: ', constraints);

  /**
   * Function closure to allow to specify constraints
   * @param target In instance property the target parameter will be the prototype of the class
   *        created, not the constructor. The metadata is not being attached to the constructor.
   *        To get the construction function given a prototype instance as it is store in a
   *        property called "constructor".
   * @param propertyKey
   */
  return function(target: any, propertyKey: string) {
    // Operate with decorated property
    Logger.endTrace('MyParameterizedDecorator');
  }
}

export function MyPropertyValidator(constraints: {minLength?:number, maxLength?:number}): Function {
  return function(target: any, key: string, descriptor?: PropertyDescriptor) {
    Logger.initTrace('MyPropertyValidator');
    console.log('key: ' + key);
    console.log('Constraint: ', constraints);
    let value;
    Object.defineProperty(
      target.constructor.prototype, 
      key, 
      { 
        configurable: true,
        enumerable: true,
        get: function() { return value }, 
        set: function(n) { 
          if(n && constraints && constraints.maxLength && n.length > constraints.maxLength)
            throw Error('MaxLength => error setting ' + n);
          else {
            value = n;
          }   
        }
      }
    )
    Logger.endTrace('MyPropertyValidator');
  }
}
