export function GetYearsBirthYears(birthYears: number) {
	const currentYear = new Date().getFullYear();
	return currentYear - birthYears;
}
