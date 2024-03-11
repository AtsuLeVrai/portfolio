export function GetAgeWithBirthYears(birthYears: number) {
	const years = new Date().getFullYear();
	return years - birthYears;
}
