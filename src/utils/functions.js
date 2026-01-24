export const compareAndReturn = (val, array) => {
	for (const item of array) {
		if (val === item[0]) {
			return item[1];
		}
	}
}