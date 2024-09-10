export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));
