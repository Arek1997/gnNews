import CurrentTime from './current-time/CurrentTime';
import NewsInfo from './news-info/NewsInfo';

const Footer = () => {
	return (
		<footer className='min-h-16 flex items-center bg-primary md:h-24'>
			<div className='container flex items-center justify-between md:text-lg'>
				<CurrentTime />
				<NewsInfo />
			</div>
		</footer>
	);
};

export default Footer;
