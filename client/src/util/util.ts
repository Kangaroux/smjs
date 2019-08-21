export function clamp(val: number, min: number, max: number) {
    return (val < min) ? min : (val > max) ? max : val;
}

export function toHex(val: number): string {
    const c = val.toString(16);
    return c.length === 1 ? "0" + c : c;
}

export function rgbToHex(r: number, g: number, b: number): string {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}
