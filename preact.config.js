const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');
const glob = require('glob');

const commonFiles = [
	...glob.sync(`src/components/button/*`),
	...glob.sync(`src/components/dice/*`),
	...glob.sync(`src/components/header/*`),
	...glob.sync(`src/components/app.js`),
	...glob.sync(`src/logic/*`),
	...glob.sync(`src/services/*`),
	...glob.sync(`src/style/*`),
	...glob.sync(`src/index.js`)
];


export default function (config) {
	const precacheConfig = {
		navigateFallback: '/',
		dynamicUrlToDependencies: {
			'/': [
				...commonFiles,
				...glob.sync(`src/routes/home/*`)
			],
			'/stats': [
				...commonFiles,
				...glob.sync(`src/routes/stats/*`)
			]
		},
		// Added .html (as instead of the html files, we're caching the dynamic Urls)
		staticFileGlobsIgnorePatterns: [
			/\.html$/,
			/polyfills(\..*)?\.js$/,
			/\.map$/,
			/push-manifest\.json$/,
			/.DS_Store/,
			/\.git/,
			/\.xml/,
			/\.txt/
		]
	};

	return preactCliSwPrecachePlugin(config, precacheConfig);
}
