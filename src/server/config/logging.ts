const timeStamp = new Date().toISOString();

const info = (namespace: string, message: string, object?: any) => {
    console.log(`[${timeStamp}] [INFO] [${namespace}] ${message}`, object ? object : '');
};

const warn = (namespace: string, message: string, object?: any) => {
    console.warn(`[${timeStamp}] [WARN] [${namespace}] ${message}`, object ? object : '');
};

const error = (namespace: string, message: string, object?: any) => {
    console.error(`[${timeStamp}] [ERROR] [${namespace}] ${message}`, object ? object : '');
};

const debug = (namespace: string, message: string, object?: any) => {
    console.debug(`[${timeStamp}] [DEBUG] [${namespace}] ${message}`, object ? object : '');
};

export default { info, warn, error, debug };
