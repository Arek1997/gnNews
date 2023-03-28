import { useState } from 'react';
import { newsPlaceholder } from '../../../data/newsPlaceholder';
import useModal from '../../../hooks/useModal';
import { Article } from '../../../interface';
import Modal from '../../modal/Modal';
import NewsModalContent from '../news-modal-content/NewsModalContent';
import TileItem from './tile-item/TileItem';

interface Props {
	articles: Article[];
}

const Tiles = ({ articles }: Props) => {
	const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
	const { showModal, toggleModal } = useModal();

	return (
		<>
			<div className='flex flex-col gap-y-4 md:px-6 md:pr-0'>
				{articles.map((article, i) => {
					return (
						<TileItem
							key={article.publishedAt + article.url}
							title={article.title}
							source={article.source.name}
							data={article.publishedAt}
							image={article.urlToImage ?? newsPlaceholder[i].urlToImage}
							description={
								article.description ?? newsPlaceholder[i].description
							}
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
			</div>

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

export default Tiles;
