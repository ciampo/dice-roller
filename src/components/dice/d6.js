import style from './style';

const D6Icon = () => (
	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fill-rule="evenodd">
			<path
				className={[style.dieEdge, style.dieFaceNeutral1].join(' ')}
				d="M50.2 134l210.4 122v242L50.2 379.8z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral3].join(' ')}
				d="M471.5 134L261 256v242l210.5-118.2z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceAccent].join(' ')}
				d="M50.2 134L261 12.1 471.5 134 261 256z"
			/>
			<path
				className={style.dieValue}
				d="M287.9 144.8l-5-8.7c3.3-2.8 5.5-6.2 6.6-10.1 1.1-4 .7-7.6-1.3-11.2-2.4-4.5-6.5-6.6-12.1-6.4-5.7.2-12.4 2.7-20.3 7.6a24.7 24.7 0 0 1 16.5 35.5c-2.2 3.8-5.5 7-10 9.8a33.9 33.9 0 0 1-13.9 4.7 24 24 0 0 1-13.2-2.3c-4-2-7.3-5.2-9.6-9.7a24.4 24.4 0 0 1-2.7-15.1c.7-5.2 3.3-10.4 7.5-15.7a69.5 69.5 0 0 1 17.9-15 52.7 52.7 0 0 1 29-10c8.3.2 14.7 4.5 19.2 12.7a24.1 24.1 0 0 1 2.8 18.7 27 27 0 0 1-11.4 15.2zm-54 3.8c2.2 4 5.3 6.4 9.5 7 4.1.8 8.3-.1 12.5-2.6 3.8-2.3 6.4-5.3 7.6-9 1.3-3.5.9-7.3-1.2-11-2.8-5.3-8.5-8.6-17-10-11.7 9-15.6 17.6-11.3 25.6z"
			/>
		</g>
	</svg>
);

export default D6Icon;
