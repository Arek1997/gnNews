import { useEffect, useState } from 'react';
import Response from '../../../response/Response';

const CurrentTime = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	const setCurrentTime = () => setTime(new Date().toLocaleTimeString());

	useEffect(() => {
		const timeout = setTimeout(setCurrentTime, 1000);
		return () => clearTimeout(timeout);
	}, [time]);

	return <Response text={`Current time: ${time}`} />;
};

export default CurrentTime;
