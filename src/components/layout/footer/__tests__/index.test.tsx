import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CurrentTime from '../current-time/CurrentTime';
import NewsInfo from '../news-info/NewsInfo';
import store from '../../../../store';
import Footer from '../Footer';

describe('Footer component', () => {
	it('should render Footer', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Footer />
				</MemoryRouter>
			</Provider>
		);

		const footer = screen.getByTestId('footer');

		expect(footer).toBeInTheDocument();
	});
});

describe('CurrentTime component', () => {
	it('should render current time', () => {
		render(<CurrentTime />);

		const responseParagraph = screen.getByTestId('response');

		expect(responseParagraph).toBeInTheDocument();
		expect(responseParagraph.textContent).toMatch(/current time/i);
	});
});

describe('NewsInfo component', () => {
	it('should render paragraph with no content inside at "/" route ', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<NewsInfo />
				</MemoryRouter>
			</Provider>
		);

		const responseParagraph = screen.getByTestId('response');

		expect(responseParagraph).toBeInTheDocument();
		expect(responseParagraph).toBeEmptyDOMElement();
	});

	it('should render paragraph with text at "/country/poland" route ', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/country/poland']}>
					<NewsInfo />
				</MemoryRouter>
			</Provider>
		);

		const responseParagraph = screen.getByTestId('response');

		expect(responseParagraph).toBeInTheDocument();
		expect(responseParagraph).not.toBeEmptyDOMElement();

		expect(responseParagraph.textContent).toMatch(/news amount/i);
	});
});
