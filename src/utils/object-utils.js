export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
