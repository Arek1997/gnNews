import { useLocation } from 'react-router-dom';
import { getSelectedCountry } from '../../../../helpers/functions';
import { useGetCountryNewsQuery } from '../../../../store/api-slice';
import Response from '../../../response/Response';

const NewsInfo = () => {
	const location = useLocation();
	const country = location.pathname.split('/').pop();
	const selectedCountry = getSelectedCountry(
		country?.replace('-', ' ') as string
	);

	const { data, isLoading, error } = useGetCountryNewsQuery(
		selectedCountry ? selectedCountry.short : selectedCountry + ''
	);

	if (!selectedCountry) return <Response text='' />;

	if (error) return <Response text='Failed to fetch posts list' />;

	if (isLoading) return <Response text='News amount: ... ' />;

	return (
		<Response
			text={`News amount from ${selectedCountry.name}: ${data?.articles.length}`}
		/>
	);
};

export default NewsInfo;
