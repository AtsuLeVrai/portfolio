export function findAgeByBirthYear(birthYears: number) {
	const date = new Date();
	const years = date.getFullYear();
	return years - birthYears;
}
