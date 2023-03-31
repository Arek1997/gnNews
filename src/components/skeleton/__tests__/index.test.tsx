import { render, screen } from '@testing-library/react';
import Skeleton from '../Skeleton';

describe('Skeleton component', () => {
	it('should render ONE skeleton if "skeletonsNumber" props WAS NOT provided', () => {
		render(<Skeleton />);

		const skeleton = screen.getByTestId('skeleton');
		const skeletonsArr = screen.getAllByTestId('skeleton');

		expect(skeleton).toBeInTheDocument();
		expect(skeletonsArr).toHaveLength(1);
	});

	it('should render 2 skeletons if "skeletonsNumber={2}" props WAS provided', () => {
		render(<Skeleton skeletonsNumber={2} />);

		const skeletonsArr = screen.getAllByTestId('skeleton');

		expect(skeletonsArr[0]).toBeInTheDocument();
		expect(skeletonsArr[1]).toBeInTheDocument();
		expect(skeletonsArr).toHaveLength(2);
	});
});
