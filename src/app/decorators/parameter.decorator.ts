import { Logger } from './../util/color-console-log.util';


/**
 * Param decorator with no annotations. Same version as following decorator but without "param1"
 * @param target The prototype of the class
 * @param methodKey The name of the method
 * @param parameterIndex The index of parameter in the list of the function's paramters
 */
export function MyParamDecorator(target: any, methodKey: string | symbol, parameterIndex: number) {
  Logger.initTrace('MyParamDecorator');
  console.log('MyParameterDecorator called on...');
  console.log('>> class prototype | object: ', target);
  console.log('>> method: ', methodKey);
  console.log('>> parameterIndex: ', parameterIndex);
  Logger.endTrace('MyParamDecorator');
}

export function MyParameterDecorator(param1) {
  Logger.initTrace('MyParameterDecorator');
  console.log('Parameterized decorator: ', param1);
  /**
   * @param target The prototype of the class
   * @param methodKey The name of the method
   * @param parameterIndex The index of parameter in the list of the function's paramters
   */
  return function(target: any, methodKey: string | symbol, parameterIndex: number) {
    console.log('MyParameterDecorator called on...');
    console.log('>> class prototype | object: ', target);
    console.log('>> method: ', methodKey);
    console.log('>> parameterIndex: ', parameterIndex);
    Logger.endTrace('MyParameterDecorator');
  };
}

/*
An example could be:

class ParameterDecoratorExample {
    method(@ParameterDecorator param1: string, @ParameterDecorator param2: number) {
    }
}

=> And the output will be:

ParameterDecorator called on:  { method: [Function] } method 1
ParameterDecorator called on:  { method: [Function] } method 0

*/