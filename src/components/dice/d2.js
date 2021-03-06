import style from './style';

const D2Icon = () => (
	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fill-rule="evenodd">
			<path
				className={[style.dieEdge, style.dieFaceNeutral2].join(' ')}
				d="M233.9 374.8c111.2 23.5 211.5-5.2 224-64 1-4 1-8.3 1-12.3V274L54.8 213c-.5 13.8-.7 22-.7 24.8 0 55.6 76.4 115 179.9 137z"
			/>
			<path
				className={[style.dieEdge, style.dieFaceAccent].join(' ')}
				d="M234.3 350.8c110.9 23.5 210.9-5.2 223.4-64.1 12.5-59-67.2-125.9-178-149.5-110.9-23.5-210.9 5.2-223.4 64.1-12.5 59 67.2 125.9 178 149.5z"
			/>
			<path
				className={style.dieValue}
				d="M286.9 233.8a18 18 0 0 1-6.3 10A51.3 51.3 0 0 1 265 251l-6.3 2c-5.3 1.8-9.4 3.2-12.3 4.4-3 1.1-5.7 2.6-8.1 4.3a20.6 20.6 0 0 0-5.9 6.5l32.4 9.3 5.1-17.3 10.2 3-7.4 26.7-55.8-16c2-6 5-10.8 8.7-14.6a43 43 0 0 1 11.7-8.7c4-2 8.7-3.8 14-5.5l9.8-3.2c4.4-1.4 7.7-3 9.7-4.6a12 12 0 0 0 4.2-6.5c1-3.7.6-7-1.2-9.8a14.5 14.5 0 0 0-8.7-5.9c-5.3-1.5-9.3-1.1-12.3 1.2-2.9 2.2-5.3 6.4-7.1 12.4l-.8 2.5-10.9-3 1-3a30 30 0 0 1 11.5-16.8c3-2 6.3-3 9.8-3.4 3.4-.3 7.3.2 11.6 1.4 5.4 1.5 9.5 3.7 12.6 6.7a20.9 20.9 0 0 1 6.3 20.7z"
			/>
		</g>
	</svg>
);

export default D2Icon;
