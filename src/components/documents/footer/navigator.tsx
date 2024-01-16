
interface Breadcrumb {
    name: string;
    href: string;
    current: boolean;
}

interface NavigatorProps {
    setCurrentIndex: Function;
    breadcrumbs: Breadcrumb[];
}

const Navigator = (props: NavigatorProps) => {

    const handleBack = () => {
        // Update currentIndex for going back
        props?.setCurrentIndex((prevIndex: number) => Math.max(prevIndex - 1, 0));

    };

    const handleNext = () => {
        // Update currentIndex for going forward
        props?.setCurrentIndex((prevIndex: number) => Math.min(prevIndex + 1, props?.breadcrumbs.length - 1));

    };

    return (
        <div className='py-4 px-6 flex justify-between items-center bg-white border-t border-gray-200 fixed bottom-0 w-full'>
            {/* Back button */}
            <button
                onClick={handleBack}
                type="button"
                className="inline-flex justify-center rounded-md border px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
            >
                <div className='flex items-center justify-center w-4 h-4'>
                    <img src='/icons/arrow-icon.svg' alt='Back Button icon' />
                </div>
                <span>Back</span>
            </button>

            {/* Next button */}
            <button
                onClick={handleNext}
                type="button"
                className="inline-flex justify-center rounded-md border px-3 py-2 text-sm font-semibold text-white bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
            >
                <span>Next</span>
                <div className='flex items-center justify-center w-4 h-4'>
                    <img src='/icons/next-arrow.svg' alt='Next Button icon' />
                </div>
            </button>
        </div>
    );
}

export default Navigator;
