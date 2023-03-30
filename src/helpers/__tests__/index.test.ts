// @vitest-environment jsdom

import { expect, it, describe } from 'vitest';
import { getSelectedCountry, transformDate, getLanguage } from '../functions';

describe('Testing Helpers Functions', () => {
	describe('getSelectedCountry()', () => {
		it('should return undefined if identifier was provided and country was not found', () => {
			const identifier = 'xyz';

			const returnedCountry = getSelectedCountry(identifier);

			expect(returnedCountry).toBeUndefined();
		});

		it('should return Country object if identifier was provided ', () => {
			const identifier = 'poland';

			const returnedCountry = getSelectedCountry(identifier);

			expect(returnedCountry).toBeTypeOf('object');

			expect(returnedCountry).toHaveProperty('name');
			expect(returnedCountry).toHaveProperty('flagUrl');
			expect(returnedCountry).toHaveProperty('short');
		});
	});

	describe('transformDate()', () => {
		it('should return Date string if CORRECT date was provided', () => {
			const date = 'Thu Mar 30 2023 09:28:19 GMT+0100 (GMT+01:00)';

			const returnedDate = transformDate(date);

			expect(returnedDate).toBeTypeOf('string');
		});

		it('should return Error if INCORRECT date was provided', () => {
			const value1 = 'xyz';
			const value2 = '';

			const returnedValue1 = () => transformDate(value1);
			const returnedValue2 = () => transformDate(value2);

			expect(returnedValue1).toThrowError(/invalid time value/i);
			expect(returnedValue2).toThrowError(/invalid time value/i);
		});
	});

	describe('getLanguage()', () => {
		it('should return value stored in localStorage', () => {
			const resturedValue = getLanguage();

			expect(resturedValue).toBeDefined();
		});
	});
});
