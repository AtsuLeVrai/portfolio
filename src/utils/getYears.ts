/**
 * Calculates the birth years based on the given number of birth years.
 *
 * @param {number} birthYears - The number of birth years to calculate.
 * @return {number} - The calculated birth years.
 */
export function getBirthYears(birthYears: number) {
	const date = new Date();
	return date.getFullYear() - birthYears;
}
