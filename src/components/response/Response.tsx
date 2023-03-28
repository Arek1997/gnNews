interface Props {
	text: string;
	classes?: string;
}

const Response = ({ text, classes }: Props) => {
	return <p className={`text-center ${classes}`}>{text}</p>;
};

export default Response;
