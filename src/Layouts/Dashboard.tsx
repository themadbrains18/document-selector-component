
import { Outlet } from 'react-router-dom';
import { DocContextProvider } from '../context';


// Dashboard component
const Dashboard = () => {
    return (
        <>
            <DocContextProvider>
                <div className='bg-gray-200'>
                    <Outlet />
                </div>
            </DocContextProvider>
        </>
    );
}

export default Dashboard;
