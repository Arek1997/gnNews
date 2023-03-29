import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getSelectedCountry } from '../../../../helpers/functions';
import { useGetCountryNewsQuery } from '../../../../store/api-slice';
import Response from '../../../response/Response';

const NewsInfo = () => {
	const { t } = useTranslation();
	const location = useLocation();
	const country = location.pathname.split('/').pop();
	const selectedCountry = getSelectedCountry(
		country?.replace('-', ' ') as string
	);

	const { data, isLoading, error } = useGetCountryNewsQuery(
		selectedCountry ? selectedCountry.short : selectedCountry + ''
	);

	if (!selectedCountry) return <Response text='' />;

	if (error)
		return <Response text={`${t('footer.Failed to fetch news amount')}.`} />;

	if (isLoading) return <Response text={`${t('footer.News amount')}: ... `} />;

	return (
		<Response
			text={`${t('footer.News amount')} ${t('general.from')} ${
				selectedCountry.name
			}: ${data?.articles.length}`}
		/>
	);
};

export default NewsInfo;
