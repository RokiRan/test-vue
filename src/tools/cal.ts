type RoundingMode = 'up' | 'down';

export function roundToDecimal(num: number, dec: number, mode: RoundingMode): number {
    const factor = Math.pow(10, dec);
    if (mode === 'up') {
        return Math.ceil(num * factor) / factor;
    } else {
        return Math.floor(num * factor) / factor;
    }
}