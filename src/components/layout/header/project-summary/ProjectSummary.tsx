import { useTranslation, Trans } from 'react-i18next';

const ProjectSummary = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 className='mb-4 text-lg font-bold text-slate-300'>
				{t('header.projectSummary.Project summary')}
			</h2>

			<div className='flex flex-col gap-y-2'>
				<p>
					<span className='mr-2 text-slate-200'>
						<span className='text-secondary'>gn</span>News
					</span>
					{t('header.projectSummary.prolog')}
				</p>
				<p>{t('header.projectSummary.techList')}</p>
				<ul className='list-inside list-disc pl-4 font-semibold text-slate-300'>
					<li>
						<a
							href='https://daisyui.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='link-hover link'
						>
							daisyUI
						</a>
					</li>
					<li>
						<a
							href='https://www.i18next.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='link-hover link'
						>
							i18next
						</a>
					</li>
				</ul>

				<h3 className='my-3 font-bold text-slate-300'>
					{t('header.projectSummary.enjoyHeading')}
				</h3>

				<p>
					<Trans
						i18nKey='header.projectSummary.daisyUIandTailwind'
						components={{
							a: (
								<a
									href='https://daisyui.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='link-hover link mx-2 font-semibold text-slate-300'
								></a>
							),
						}}
					/>
				</p>
				<p>
					<Trans
						i18nKey='header.projectSummary.i18next'
						components={{
							a: (
								<a
									href='https://www.i18next.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='link-hover link mx-2 font-semibold text-slate-300'
								></a>
							),
						}}
					/>
				</p>
				<p>
					{t('header.projectSummary.remind')}
					<span className='ml-2 font-semibold text-slate-300'>
						react-redux, react-router-dom.
					</span>
				</p>
				<p>
					<Trans
						i18nKey='header.projectSummary.lastProject'
						components={{
							a: (
								<a
									href='https://nextjs.org/'
									target='_blank'
									rel='noopener noreferrer'
									className='link-hover link mx-2 font-semibold text-slate-300'
								></a>
							),
						}}
					/>
				</p>

				<h3 className='my-3 font-bold text-slate-300'>
					{t('header.projectSummary.hardHeading')}
				</h3>

				<p>
					<Trans
						i18nKey='header.projectSummary.designInvent'
						values={{ quote: `${t('header.projectSummary.quote')}` }}
						components={{
							text: (
								<span className='mx-2 font-semibold italic text-slate-300 underline'></span>
							),
						}}
					/>
					;D
				</p>

				<p>{t('header.projectSummary.documentation')}</p>
			</div>
		</>
	);
};

export default ProjectSummary;
