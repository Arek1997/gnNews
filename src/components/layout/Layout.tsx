import ScrollToTop from '../scroll-to-top/ScrollToTop';
import Footer from './footer/Footer';
import Header from './header/Header';
import SideBar from './side-bar/SideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<section className='container my-4 flex flex-col-reverse gap-y-6 md:my-14 md:flex-row md:items-start md:justify-between'>
				<SideBar />
				<main className='md:w-full'>{children}</main>
				<ScrollToTop />
			</section>
			<Footer />
		</>
	);
};

export default Layout;
