interface Props {
	skeletonsNumber?: number;
	withImage?: boolean;
}

const Skeleton = ({ skeletonsNumber, withImage }: Props) => {
	const arr = [...new Array(skeletonsNumber)];

	return (
		<>
			{arr.map((_, i) => {
				return (
					<div
						data-testid='skeleton'
						key={`skeleton-${i}`}
						className='my-5 w-full rounded-md border p-4 md:mx-auto md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl'
					>
						<div className='flex animate-pulse space-x-4'>
							{withImage && (
								<div className='h-10 w-10 rounded-full bg-slate-700'></div>
							)}
							<div className='flex-1 space-y-6 py-1'>
								<div className='h-2 rounded bg-slate-700'></div>
								<div className='space-y-3'>
									<div className='grid grid-cols-3 gap-4'>
										<div className='col-span-2 h-2 rounded bg-slate-700'></div>
										<div className='col-span-1 h-2 rounded bg-slate-700'></div>
									</div>
									<div className='h-2 rounded bg-slate-700'></div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Skeleton;
