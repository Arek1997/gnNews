import { render, screen } from '@testing-library/react';
import Response from '../Response';

describe('Response component', () => {
	it('should render paragraph with provided text', () => {
		const text = 'text';

		render(<Response text={text} />);
		const responseParagraph = screen.getByTestId('response');

		expect(responseParagraph).toBeInTheDocument();
		expect(responseParagraph).not.toBeEmptyDOMElement();
		expect(responseParagraph.textContent).toMatch(text);
	});

	it('should render paragraph with provided text and provided class', () => {
		const text = 'text';
		const providedClass = 'class';

		render(<Response text={text} classes={providedClass} />);
		const responseParagraph = screen.getByTestId('response');

		expect(responseParagraph.className).toMatch(providedClass);
	});
});
