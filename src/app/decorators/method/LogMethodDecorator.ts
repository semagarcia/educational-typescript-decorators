/**
 * 
 * @param target The original method being decorated
 * @param propertyKey The name of the method being decorated
 * @param descriptor A property descriptor of the given property if it exists on the objet, undefined
 *          otherwise. Descriptor contains "value" property which is actual method to be invoked. The
 *          property descriptor is obtained by invoking the Object.getOwnPropertyDescriptor() function
 */
export function logClass(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    console.log('target (decorated method):', target);
    console.log('propertyKey (name of decorated method):', propertyKey);
    console.log('descriptor: (property descriptor)', descriptor);

    if(descriptor === undefined)
        descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);

    // Save a reference to the original method
    let originalMethod = descriptor.value;

    // Editing the descriptor/value parameter 
    descriptor.value = function (...args: any[]) {
        // Pre-call phase
        console.log('New method..');
        console.log('The method args are: ' + JSON.stringify(args));

        // We have to call original method and proxy the results back; run and store the result
        let result = originalMethod.apply(this, args);

        // Post-call phase
        console.log(`Calling fn "${propertyKey}" with args: (${arguments}), result: ${result}`);

        // Return the result of the original method
        return result;
    };

    // Return edited descriptor as opposed to overwritting the descriptor by returning a new descriptor
    return descriptor;
}

/**
 * Another possibility to do this, instead of overriding descriptor value, we can return a new 
 * descriptor object.
 * @param target 
 * @param methodName 
 * @param descriptor 
 */
export function logClassV2(target: any, methodName: string, descriptor: any) {
    return {
        value: function(...args: any[]) {
            // Same as descriptor.value
        }
    }
}

export interface LoggerOptions {
    logTime?: boolean;
    logFunctionName?: boolean;
    logCustom?: Function;
}

export function logClassV3(options: LoggerOptions) {
    console.log('Executing decorator with these options: ', options);
    return function(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        // Same as descriptor.value
    }
}