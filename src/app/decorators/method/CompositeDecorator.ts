export function a() {
    console.log('a(): evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('a(): called');
    }
}

export function b() {
    console.log('b(): evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('b(): called');
    }
}

export function c() {
    console.log('c(): evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('c(): called');
    }
}