import { roundToDecimal } from './src/tools/cal'

import { expect, describe, it } from 'vitest'


describe('roundToDecimal', () => {
    it('should round 22.222 to 22.23 when dec is 2 and mode is up', () => {
        expect(roundToDecimal(22.222, 2, 'up')).toBe(22.23);
    });

    it('should round 22.222 to 23 when dec is 0 and mode is up', () => {
        expect(roundToDecimal(22.222, 0, 'up')).toBe(23);
    });

    it('should round 22 to 22.0 when dec is 1 and mode is up', () => {
        expect(roundToDecimal(22, 1, 'up')).toBe(22.0);
    });

    it('should round 22.222 to 22.2 when dec is 1 and mode is down', () => {
        expect(roundToDecimal(22.222, 1, 'down')).toBe(22.2);
    });

    it('should round 22.222 to 22.2 when dec is 1 and mode is down 2', () => {
        expect(roundToDecimal(22.222, 0, 'down')).toBe(22);
    });
});