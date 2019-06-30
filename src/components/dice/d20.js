import style from './style';

const D20Icon = () => (
	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fill-rule="evenodd">
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M46 379l67-22 146 145z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M46 379l67-22-67-224z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral1].join(' ')}
				d="M113 357l146-227-213 3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M259 11v119l-213 3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral4].join(' ')}
				d="M472 379l-67-22-146 145z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral4].join(' ')}
				d="M472 379l-67-22 67-224z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M405 357L259 130l213 3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M259 11v119l213 3z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceAccent].join(' ')}
				d="M259 130L113 357h291z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral3].join(' ')}
				d="M113 357h291L259 502z"
			/>
			<path
				className={style.dieValue}
				d="M251.4 257.2c0 4.1-1 7.8-3.1 10.9-2.1 3-5.9 6.6-11.2 10.5l-4.7 3.5-9 7.1a31 31 0 0 0-5.3 6.1 20.3 20.3 0 0 0-3.1 7.4h27.7l.4-17h8.9l-.6 26.3h-47.1a38.5 38.5 0 0 1 10.3-26.5c2.7-2.9 6-5.8 10-8.7l7.2-5.5c3.3-2.5 5.7-4.7 7-6.7 1.4-2 2-4.4 2-7 0-3.7-1-6.5-3.2-8.6-2.1-2-5-3.1-8.8-3.1-4.8 0-8.2 1.4-10 4.2a24.2 24.2 0 0 0-2.9 13.2v2.5h-9.7V263a29 29 0 0 1 5.2-18.4 19 19 0 0 1 7.4-5.6c2.9-1.2 6.3-1.8 10.3-1.8 5 0 9 1 12.4 2.8 3.3 1.9 5.8 4.3 7.5 7.4 1.6 3 2.4 6.3 2.4 9.8zm62 18c0 8-1 15-3 20.6-2 5.7-5 10-8.8 13-3.8 3-8.3 4.4-13.5 4.4-8.3 0-14.6-3.4-19-10.2-4.4-6.9-6.6-16.1-6.6-27.7 0-8 1-15 3.1-20.6 2-5.8 5-10.1 8.9-13 3.8-3 8.4-4.5 13.6-4.5 8.1 0 14.4 3.4 18.8 10.2a51 51 0 0 1 6.6 27.9zm-25.3 29.4c4.8 0 8.5-2.3 11-6.9a50.8 50.8 0 0 0 3.7-22.8c0-10.6-1.3-18-3.9-22.5a12 12 0 0 0-11-6.6c-5 0-8.7 2.5-11 7.4-2.4 5-3.6 12.3-3.6 22a50 50 0 0 0 3.7 22.4c2.5 4.7 6.2 7 11 7z"
			/>
		</g>
	</svg>
);

export default D20Icon;
