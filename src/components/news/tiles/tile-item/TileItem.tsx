import { transformDate } from '../../../../helpers/functions';

interface Props {
	title: string;
	source: string;
	data: Date;
	image: string;
	description: string;
	onClickMethod: () => void;
}
const TileItem = ({
	title,
	source,
	data,
	image,
	description,
	onClickMethod,
}: Props) => {
	const transformedDate = transformDate(data);

	return (
		<article
			className='card cursor-pointer bg-primary/30 text-slate-300/80 shadow-xl transition-colors lg:card-side hover:bg-primary/50'
			onClick={onClickMethod}
		>
			<figure className='image lg:w-[50%]'>
				<img src={image} alt='' className='h-full' />
			</figure>

			<div className='card-body lg:w-[50%]'>
				<p className='text-xs'>{source}</p>
				<h2 className='card-title text-xl font-bold'>{title}</h2>
				<p className='my-4'>{description}</p>
				<p className='text-xs'>{transformedDate}</p>
			</div>
		</article>
	);
};

export default TileItem;
