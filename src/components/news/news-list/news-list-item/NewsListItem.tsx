import { transformDate } from '../../../../helpers/functions';

interface Props {
	title: string;
	source: string;
	data: Date;
	onClickMethod: () => void;
}
const NewsListItem = ({ title, source, data, onClickMethod }: Props) => {
	const transformedDate = transformDate(data);

	return (
		<li
			className='flex cursor-pointer flex-col gap-y-2 rounded-lg bg-primary/30 p-4 text-slate-300/80 transition-colors hover:bg-primary/50'
			onClick={onClickMethod}
		>
			<p className='text-xs'>{source}</p>
			<h3 className='mb-4 text-lg font-bold'>{title}</h3>
			<p className='text-sm'>{transformedDate}</p>
		</li>
	);
};

export default NewsListItem;
