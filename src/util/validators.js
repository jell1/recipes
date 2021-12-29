export const isValidFloat = (val) => {
	// allows all numbers to 2 decimal places
	const numPattern = /^[0-9]*(\.[0-9]{0,2})?$/;

	const valid = numPattern.test(val);
	return valid;
};
