import { useDocContext } from '../../context'

// SelectedDocuments component definition
const SelectedDocuments = () => {
    // Accessing context using the useDocContext hook
    const { selectedDocuments, setSelectedDocuments } = useDocContext();

    // Function to remove a document from the selected documents list
    const removeDocument = (docs: string) => {
        const updatedDocuments = selectedDocuments.filter((document) => document !== docs);
        // Update the context with the new array
        setSelectedDocuments(updatedDocuments);
    };
    return (
        <div className='p-4 max-w-[500px] w-full rounded-lg bg-white border border-gray-300 overflow-hidden'>
            <h2 className='text-gray-900 font-medium font-inter'>Selected Documents</h2>
            {/* Search bar */}
            <div className='my-3 flex gap-3 items-center px-4 py-2 border border-gray-300 rounded-lg mb-3'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="none"
                    viewBox="0 0 17 17"
                >
                    <path
                        fill="#4B5563"
                        d="M15.75 15.219c.313.312.313.781 0 1.062a.622.622 0 01-.5.219.753.753 0 01-.563-.219L10.5 12.094A6.389 6.389 0 016.469 13.5C2.906 13.5 0 10.594 0 7 0 3.437 2.875.5 6.469.5c3.562 0 6.5 2.938 6.5 6.5 0 1.531-.5 2.938-1.406 4.031l4.187 4.188zM1.5 7c0 2.781 2.219 5 5 5 2.75 0 5-2.219 5-5 0-2.75-2.25-5-5-5-2.781 0-5 2.25-5 5z"
                    ></path>
                </svg>
                <input type="text" placeholder='Search' className='outline-none w-full' />
            </div>

            {/* Display selected documents */}
            {selectedDocuments?.length > 0 ? (
                <ul className={`flex flex-col gap-3 ${selectedDocuments.length > 0 ? "p-2 rounded-lg border-green-500 border " : ""}`}>
                    {
                        selectedDocuments?.map((docs, index) => {
                            return (
                                <li key={index} className="flex items-center justify-between py-2 px-1.5" >
                                    <div className="flex items-center gap-2">
                                        {/* Checkmark icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="none"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill="#0E9F6E"
                                                d="M13.434 4.066c.33.305.33.838 0 1.143l-6.5 6.5a.783.783 0 01-1.143 0l-3.25-3.25a.783.783 0 010-1.143.783.783 0 011.143 0L6.35 9.982l5.941-5.916a.783.783 0 011.143 0z"
                                            ></path>
                                        </svg>
                                        {docs}
                                    </div>
                                    {/* Remove document button */}
                                    <div className="w-[26px] h-[26px] p-1 flex justify-center items-center border border-gray-200 rounded cursor-pointer" onClick={() => { removeDocument(docs) }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="9"
                                            fill="none"
                                            viewBox="0 0 10 9"
                                        >
                                            <path
                                                fill="#1F2A37"
                                                d="M8.809 7.566c.33.305.33.838 0 1.143a.788.788 0 01-.559.229.804.804 0 01-.584-.229L5 6.043 2.309 8.709a.788.788 0 01-.559.229.804.804 0 01-.584-.229.783.783 0 010-1.143l2.666-2.691-2.666-2.666a.783.783 0 010-1.143.783.783 0 011.143 0L5 3.732l2.666-2.666a.783.783 0 011.143 0c.33.305.33.838 0 1.143L6.143 4.9l2.666 2.666z"
                                            ></path>
                                        </svg>
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>) : (
                // Message when no documents are selected
                <div className='flex flex-col gap-6 items-center p-10 bg-gray-100 rounded-lg border border-gray-200 h-[calc(100%-89px)]'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="57"
                        height="49"
                        fill="none"
                        viewBox="0 0 57 49"
                    >
                        <path
                            fill="#D1D5DB"
                            d="M56.875 25c0 2.25-1.75 4-3.875 4H14.625L27.75 42.25c1.625 1.5 1.625 4.125 0 5.625A3.878 3.878 0 0125 49c-1.125 0-2.125-.375-2.875-1.125l-20-20C.5 26.375.5 23.75 2.125 22.25l20-20c1.5-1.625 4.125-1.625 5.625 0 1.625 1.5 1.625 4.125 0 5.625L14.625 21H53c2.125 0 3.875 1.875 3.875 4z"
                        ></path>
                    </svg>
                    <p className='text-xs font-semibold text-gray-500 leading-[150%] font-inter text-center'>Select documents from the left panel to have employees review them and provide a signature acknowledging review</p>
                </div>
            )

            }
        </div>
    )
}

export default SelectedDocuments
