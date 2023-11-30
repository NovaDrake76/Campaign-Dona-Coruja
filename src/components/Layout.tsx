import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Navbar />
        <div className='flex flex-col '>
            {children}
        </div>
    </>
);

export default Layout;
