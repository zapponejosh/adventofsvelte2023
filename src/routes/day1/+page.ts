export const load = async () => {
	const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');
	const children = await res.json();

	// Sort the array alphabetically by the 'name' property
	children.sort(function (a, b) {
		const nameA = a.name.toUpperCase(); // Ignore case during sorting
		const nameB = b.name.toUpperCase();

		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}

		return 0; // Names are equal
	});
	const data = { children };
	return data;
};
