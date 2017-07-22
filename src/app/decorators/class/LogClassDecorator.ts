export function logClass(target: any) {
    // Save a reference to the original constructor
    let original = target;

    // Function factory (to generate instances of a class)
    function construct(constructor, args) {
        let c: any = function() {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // The behaviour for our new constructor
    let f: any = function(...args) {
        console.log(`New: ${original.name}`);
        return construct(original, args);
    }

    // Copy prototype so instanceof operator will still work
    f.prototype = original.prototype;

    // Return the new constructor (will override the original one)
    return f;
}