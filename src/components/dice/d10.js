import style from './style';

const D10Icon = () => (
	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fill-rule="evenodd">
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M14 292l122-44 120 71-1 181z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral4].join(' ')}
				d="M255 500l243-207-121-45-121 71z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M497 220l1 73-122-45L255 11z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceAccent].join(' ')}
				d="M255 11L134 249l122 70 121-71z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral1].join(' ')}
				d="M255 11L133 248 14 292v-73z"
			/>
			<path
				className={style.dieValue}
				d="M241 226.1v9.9h-33l.2-9.9h11.2l1-61.4h-11l.3-9.7h21.7l-.9 71.1H241zm64-31c.2 8.8-.8 16.4-3 22.7a30 30 0 0 1-9.3 14.3A23 23 0 0 1 278 237c-9 0-16-3.8-20.8-11.3A56.5 56.5 0 0 1 250 195c0-8.9 1.1-16.5 3.3-22.8a30.8 30.8 0 0 1 9.5-14.4c4-3.3 8.9-4.9 14.4-4.9 8.6 0 15.3 3.8 20.1 11.3A58.9 58.9 0 0 1 305 195zM277.4 228c5.3 0 9.2-2.5 11.9-7.6 2.6-5 3.9-13.4 3.7-25.2-.2-11.7-1.7-20-4.6-24.9-2.8-4.9-6.7-7.3-11.8-7.3-5.4 0-9.4 2.7-11.9 8.2a60.4 60.4 0 0 0-3.7 24.4c0 11.4 1.4 19.6 4.2 24.7 2.7 5.1 6.8 7.7 12.2 7.7z"
			/>
		</g>
	</svg>
);

export default D10Icon;
