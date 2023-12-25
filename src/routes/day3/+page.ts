export const load = async () => {
	const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json');
	const giftList = await res.json();

	const data = { giftList };
	return data;
};
