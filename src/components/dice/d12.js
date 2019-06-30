import style from './style';

const D12Icon = () => (
	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fill-rule="evenodd">
			<path
				className={[style.dieEdge, style.dieFaceNeutral3].join(' ')}
				d="M114 455l55-107h176l56 104-142 49z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M114 455l55-107-48-152-98-15v152z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral1].join(' ')}
				d="M112 58L23 181l98 15 134-94V11z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M255 11v91l138 92 96-15-89-122z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral4].join(' ')}
				d="M393 194l96-15 1 151-89 122-56-104z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceAccent].join(' ')}
				d="M121 196l134-94 138 92-48 154H169z"
			/>
			<path
				className={style.dieValue}
				d="M241 273.1v9.9h-33v-9.9h11.2v-61.4H208V202h22.4v71.1H241zm66.3-50.9c0 4.6-1.1 8.6-3.4 12a53.4 53.4 0 0 1-12.4 11.7l-5.3 4c-4.3 3.2-7.6 5.8-10 7.9-2.2 2-4.2 4.2-5.9 6.7a22.5 22.5 0 0 0-3.4 8.2h30.7l.5-18.9h9.9l-.7 29.2H255a42.7 42.7 0 0 1 11.4-29.4c3-3.2 6.8-6.4 11-9.7l8.1-6c3.8-2.8 6.4-5.3 7.9-7.5 1.4-2.3 2.2-4.9 2.2-7.8 0-4-1.2-7.2-3.6-9.5a13.5 13.5 0 0 0-9.8-3.5c-5.3 0-9 1.6-11.1 4.8-2.1 3.1-3.2 8-3.2 14.6v2.7h-10.8v-3c0-8.8 2-15.6 5.8-20.5 2.3-2.8 5-4.9 8.2-6.2 3.2-1.3 7-2 11.5-2 5.5 0 10 1 13.7 3.1 3.7 2 6.5 4.8 8.3 8.2 1.8 3.3 2.7 7 2.7 11z"
			/>
		</g>
	</svg>
);

export default D12Icon;
