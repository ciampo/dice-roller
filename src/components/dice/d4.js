import style from './style';

const D4Icon = () => (
	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fill-rule="evenodd">
			<path
				className={[style.dieEdge, style.dieFaceAccent].join(' ')}
				d="M15.5 286.1l241.2-274 .3 482z"
			/>
			<path
				className={style.dieValue}
				d="M184.2 285.7l-2.8 10.5-10.8-8.3-4.2 12.5 6.6 5-3.1 10.4-25-18.2 4.3-10 7.6 5.6 4.8-12.3-22.8-17.5c1-4.2 1-8.3.4-12.3l46.7-31.2 5.5 5-17.4 52.7 10.2 8zm-17.8-16L179 237l-29.7 19.3 17.2 13.4z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M498.5 286L257.2 12l-.2 482z"
			/>
		</g>
	</svg>
);

export default D4Icon;
