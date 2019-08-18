/**
 * Returns the provided default if the value is undefined, otherwise returns
 * the value
 */
export function _default(val: any, def: any): any {
    return (val === undefined) ? def : val;
}