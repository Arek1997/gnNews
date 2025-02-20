import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { getSelectedCountry } from '../../helpers/functions';
import { useAppSelector } from '../../hooks/reduxHook';
import { useGetCountryNewsQuery } from '../../store/api-slice';
import Response from '../response/Response';
import Skeleton from '../skeleton/Skeleton';
import NewsList from './news-list/NewsList';
import Tiles from './tiles/Tiles';

const News = () => {
	const { t } = useTranslation();
	const { countryName } = useParams();
	const layout = useAppSelector((state) => state.newsLayout.layout);
	const selectedCountry = getSelectedCountry(
		countryName?.replace('-', ' ') as string
	);

	const { data, error, isLoading } = useGetCountryNewsQuery(
		selectedCountry ? selectedCountry?.short : selectedCountry + ''
	);

	if (!selectedCountry)
		return <Response text={`${t('countryNews.Country not found')}.`} />;

	if (error) {
		console.log(error);
		return <Response text={`${t('countryNews.Error occurred')}.`} />;
	}

	if (isLoading) {
		return (
			<Skeleton
				skeletonsNumber={5}
				withImage={layout === 'tiles' ? true : false}
			/>
		);
	}

	return (
		<>
			<div className='breadcrumbs mb-4 text-sm'>
				<ul className='justify-center'>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>{t('countryNews.Country')}</li>
					<li>{selectedCountry.name}</li>
				</ul>
			</div>
			{layout === 'list' ? (
				<NewsList articles={data?.articles!} />
			) : (
				<Tiles articles={data?.articles!} />
			)}
		</>
	);
};

export default News;
