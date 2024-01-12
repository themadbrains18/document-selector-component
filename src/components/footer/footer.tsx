import React from 'react';

// Footer component
const Footer = () => {
    return (
        <footer className='py-4 px-6 flex justify-between items-center bg-white border-t border-gray-200 fixed bottom-0 w-full'>
            {/* Back button */}
            <button
                type="button"
                className="inline-flex justify-center rounded-md border px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
            >
                <div className='flex items-center justify-center w-4 h-4'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        fill="none"
                        viewBox="0 0 8 12"
                    >
                        <path
                            fill="#1F2A37"
                            d="M6.625 11.563a.804.804 0 01-.584-.229L1.166 6.459a.783.783 0 010-1.143L6.041.441a.783.783 0 011.143 0c.33.305.33.838 0 1.143L2.893 5.875l4.29 4.316c.33.305.33.838 0 1.143a.788.788 0 01-.558.229z"
                        ></path>
                    </svg>
                </div>
                <span>Back</span>
            </button>
            
            {/* Next button */}
            <button
                type="button"
                className="inline-flex justify-center rounded-md border px-3 py-2 text-sm font-semibold text-white bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
            >
                <span>Next</span>
                <div className='flex items-center justify-center w-4 h-4 rotate-180'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        fill="none"
                        viewBox="0 0 8 12"
                    >
                        <path
                            fill="#fff"
                            d="M6.625 11.563a.804.804 0 01-.584-.229L1.166 6.459a.783.783 0 010-1.143L6.041.441a.783.783 0 011.143 0c.33.305.33.838 0 1.143L2.893 5.875l4.29 4.316c.33.305.33.838 0 1.143a.788.788 0 01-.558.229z"
                        ></path>
                    </svg>
                </div>
            </button>
        </footer>
    );
}

export default Footer;
