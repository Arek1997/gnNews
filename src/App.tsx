import Layout from './components/layout/Layout';

import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryNews from './pages/CountryNews';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/country/:countryName' element={<CountryNews />} />
				<Route path={'*'} element={<Navigate to={'/'} replace />} />
			</Routes>
		</Layout>
	);
};

export default App;
