import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

// Define the interface for the children prop
interface Child {
    children: any | JSX.Element;
}

// Dashboard component
const Dashboard = (props: Child) => {
    return (
        <>
            {/* Header component */}
            <Header />

            {/* Main content container with padding and margin */}
            <main className='py-6 mt-[141px] mb-[66px] bg-gray-50'>
                {/* Render the children components */}
                {props?.children}
            </main>

            {/* Footer component */}
            <Footer />
        </>
    );
}

export default Dashboard;
