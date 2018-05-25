
export class Logger {
    static initTrace(initTag: string) {
        console.log(`%c[INIT] ${initTag}`, 
            'background-color: #203e7e; color: white; display: block;');
    }

    static log(...args: any[]) {
        console.log(args);
    }

    static endTrace(endTag: string) {
        console.log(`%c[END] ${endTag}`, 
            'background-color: #0098B0; color: white; display: block;');
    }
}