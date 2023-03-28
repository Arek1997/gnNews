import { useEffect, useState } from 'react';
import { scrollToTop } from '../../helpers/functions';

const DISTANCE_FROM_TOP = 200;

const ScrollToTop = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => setScrollPosition(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<button
			className={`btn-circle btn fixed bottom-12 right-5 ${
				scrollPosition < DISTANCE_FROM_TOP ? 'hidden' : ''
			}`}
			onClick={scrollToTop}
		>
			TOP
		</button>
	);
};

export default ScrollToTop;
