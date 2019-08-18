/**
 * Returns the provided default if the value is undefined, otherwise returns
 * the value
 */
export function _default(val: any, def: any): any {
    return (val === undefined) ? def : val;
}

export function clamp(val: number, min: number, max: number) {
    return (val < min) ? min : (val > max) ? max : val;
}

export function toHex(val: number): string {
    let c = val.toString(16);
    return c.length == 1 ? "0" + c : c;
}

export function rgbToHex(r: number, g: number, b: number): string {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}