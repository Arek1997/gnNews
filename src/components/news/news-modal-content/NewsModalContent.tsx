import { useTranslation } from 'react-i18next';

interface Props {
	sourceName: string;
	title: string;
	author: string;
	description: string;
	url: string;
}

const NewsModalContent = ({
	sourceName,
	title,
	author,
	description,
	url,
}: Props) => {
	const { t } = useTranslation();

	return (
		<>
			<p className='text-xs'>{sourceName}</p>
			<h2 className='py-2 text-xl font-bold'>{title}</h2>
			<p className='text-xs'>{author}</p>
			<p className='py-4'>{description}</p>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='link-secondary link'
			>
				{t('general.Read more')}
			</a>
		</>
	);
};

export default NewsModalContent;
