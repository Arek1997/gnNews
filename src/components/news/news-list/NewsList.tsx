import { useState } from 'react';
import { newsPlaceholder } from '../../../data/newsPlaceholder';
import useModal from '../../../hooks/useModal';
import { Article } from '../../../interface';
import Modal from '../../modal/Modal';
import NewsModalContent from '../news-modal-content/NewsModalContent';
import NewsListItem from './news-list-item/NewsListItem';

interface Props {
	articles: Article[];
}

const NewsList = ({ articles }: Props) => {
	const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
	const { showModal, toggleModal } = useModal();

	return (
		<>
			<ul className='flex flex-col gap-y-4 md:px-6 md:pr-0'>
				{articles.map((article, i) => {
					return (
						<NewsListItem
							key={article.publishedAt + article.url}
							title={article.title}
							source={article.source.name}
							data={article.publishedAt}
							onClickMethod={() => {
								setSelectedArticle({
									...article,
									description:
										article.description ?? newsPlaceholder[i].description,
								});
								toggleModal();
							}}
						/>
					);
				})}
			</ul>

			<Modal open={showModal} onClose={toggleModal}>
				<NewsModalContent
					sourceName={selectedArticle?.source.name!}
					title={selectedArticle?.title!}
					author={selectedArticle?.author!}
					description={selectedArticle?.description!}
					url={selectedArticle?.url!}
				/>
			</Modal>
		</>
	);
};

export default NewsList;
