import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Landing from '../pages/Landing/Landing';
import Schools from '../pages/Schools/Schools';
import Donation from '../pages/Donation/Donation';

const Root = () => {
    return (
        <Layout>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="schools" element={<Schools />} />
                <Route path="donation" element={<Donation />} />
                {/* Other routes go here */}
            </Routes>
        </Layout>
    );
};

export default Root;
