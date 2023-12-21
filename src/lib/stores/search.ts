import { writable } from 'svelte/store';

export const createSearchStore = (data) => {
	const { subscribe, set, update } = writable({
		data,
		filtered: data,
		searchStr: ''
	});
	return { subscribe, set, update };
};

export const searchHandler = (store) => {
	const searchStr = store.searchStr.toLowerCase() || '';
	store.filtered = store.data.filter((c) => {
		return c.name.toLowerCase().includes(searchStr);
	});
};
