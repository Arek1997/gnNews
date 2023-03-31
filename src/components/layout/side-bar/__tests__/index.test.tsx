import { fireEvent, render, screen } from '@testing-library/react';
import SideBar from '../SideBar';
import { MemoryRouter } from 'react-router-dom';
import CountriesList from '../country-list/CountriesList';

describe('SideBar component', () => {
	it('should render sidebar', () => {
		render(
			<MemoryRouter>
				<SideBar />
			</MemoryRouter>
		);

		const sideBar = screen.getByTestId('sidebar');

		expect(sideBar).toBeInTheDocument();
	});
});

describe('CountriesList component', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<CountriesList />
			</MemoryRouter>
		);
	});

	it('should render CountriesList', () => {
		const countriesList = screen.getByRole('list');

		expect(countriesList).toBeInTheDocument();
	});

	it('CountriesList should NOT BE empty', () => {
		const countriesList = screen.getByRole('list');

		expect(countriesList).not.toBeEmptyDOMElement();
	});
});
