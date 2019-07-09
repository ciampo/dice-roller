import { isLocalStorageSupported, CACHE_PREFIX } from './localstorage';

const STAT_ITEM_PREFIX = `${CACHE_PREFIX}_SETTINGS`;

const resetSettings = () => {
	if (!isLocalStorageSupported || typeof window === 'undefined') {
		return;
	}

	localStorage.removeItem(STAT_ITEM_PREFIX);
};

// const storeDieRoll = (dieMaxValue, rolledValue) => {
// 	if (!isLocalStorageSupported || typeof window === 'undefined') {
// 		return;
// 	}

// 	const itemKey = getDiceRollKey(dieMaxValue);

// 	const storedItem = localStorage.getItem(itemKey);

// 	let newItem;
// 	try {
// 		newItem = storedItem ? JSON.parse(storedItem) : [];
// 	}
// 	catch (e) {
// 		newItem = [];
// 	}

// 	newItem.push(rolledValue);

// 	localStorage.setItem(itemKey, JSON.stringify(newItem));
// };

const getSettings = (dieMaxValue) => {
	if (!isLocalStorageSupported || typeof window === 'undefined') {
		return [];
	}

	const storedSettings = localStorage.getItem(STAT_ITEM_PREFIX);

	let toReturn;
	try {
		toReturn = storedSettings ? JSON.parse(storedSettings) : {};
	}
	catch (e) {
		toReturn = {};
	}

	return toReturn;
};

export {
	resetSettings,
	getSettings
};
