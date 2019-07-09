import { getSettings } from '../storage/settings';


const getDefaultSettings = () => {
	// const styles = getComputedStyle(document.documentElement);

	return {
		colors: {}
	};
};

const getSavedSettings = () => {
	const storedSettings = getSettings();

	return Object.entries(storedSettings).length === 0 ?
		getDefaultSettings() : storedSettings;
};

export {
	getSavedSettings
};
