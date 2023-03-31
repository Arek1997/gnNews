interface Props {
	text: string;
	classes?: string;
}

const Response = ({ text, classes = '' }: Props) => {
	return (
		<p data-testid='response' className={`text-center ${classes}`}>
			{text}
		</p>
	);
};

export default Response;
