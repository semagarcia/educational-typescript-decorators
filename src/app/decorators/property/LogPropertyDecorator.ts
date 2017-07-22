export function logProperty(target: Object, key: string | symbol) {
    // Property value
    let value = target[key];

    // Property getter
    let getter = () => {
        console.log(`Get: ${target} => ${value}`);
        return value;
    }

    // Property setter
    let setter = (newValue) => {
        console.log(`Set: ${target} => ${newValue}`);
        value = newValue;
    }

    // Delete property
    if(delete target[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }

    // Another way to define the same property
    /*Reflect.deleteProperty[key];
    Reflect.defineProperty(target, key, {
        get: getter,
        set: setter
    });*/
}