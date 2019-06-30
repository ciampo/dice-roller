import style from './style';

const D100Icon = () => (
	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fill-rule="evenodd">
			<path
				className={[style.dieEdge, style.dieFaceNeutral3].join(' ')}
				d="M472 134l-67 22L259 11z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral4].join(' ')}
				d="M472 134l-67 22 67 224z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral3].join(' ')}
				d="M405 156L259 383l213-3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral4].join(' ')}
				d="M259 502V383l213-3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral1].join(' ')}
				d="M46 134l67 22L259 11z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral1].join(' ')}
				d="M46 134l67 22-67 224z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M113 156l146 227-213-3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral3].join(' ')}
				d="M259 502V383l-213-3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceAccent].join(' ')}
				d="M259 383l146-227H114z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M405 156H114L259 11z"
			/>
			<path
				className={style.dieValue}
				d="M251 213.6c0 15.6-6.2 23.4-18.5 23.4s-18.5-7.8-18.5-23.4c0-15.7 6.2-23.6 18.6-23.6 6.1 0 10.7 2 13.8 6 3 4 4.6 10 4.6 17.6zM222 279l62.9-87H296l-63 87h-11zm10.4-52c3.7 0 5.6-4.7 5.6-14s-1.9-14-5.6-14c-1.6 0-2.9 1.1-3.9 3.4-1 2.2-1.5 5.7-1.5 10.5 0 9.4 1.8 14.1 5.4 14.1zm71.6 29.6c0 15.6-6.2 23.4-18.6 23.4-12.3 0-18.4-7.8-18.4-23.4 0-15.7 6.2-23.6 18.5-23.6 6.1 0 10.8 2 13.9 6 3 4.1 4.6 10 4.6 17.6zM284.3 271c3.8 0 5.7-4.7 5.7-14s-1.9-14-5.7-14c-1.6 0-2.9 1.1-3.8 3.3-1 2.2-1.5 5.7-1.5 10.5 0 9.5 1.8 14.2 5.3 14.2z"
			/>
		</g>
	</svg>
);

export default D100Icon;
