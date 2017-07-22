export function logParameter(target: any, key: string, index: number) {
    let metadataKey = `__log_${key}_parameters`;
    if(Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    } else {
        target[metadataKey] = [index];
    }
}