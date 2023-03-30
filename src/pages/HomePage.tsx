import { useTranslation } from 'react-i18next';
import Response from '../components/response/Response';

const HomePage = () => {
	const { t } = useTranslation();
	return (
		<Response
			text={`${t('homePage.Choose the country')}!`}
			classes='md:text-lg'
		/>
	);
};

export default HomePage;
