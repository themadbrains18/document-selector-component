import { useDocContext } from "../../../context";

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
                <img src="/icons/search-icon.svg" alt="Search Icon" />
                <input type="text" placeholder='Search' className='outline-none w-full bg-transparent' />
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
                                        <img src='/icons/checkmark-icon.svg' alt='checkmark icon' />
                                        {docs}
                                    </div>
                                    {/* Remove document button */}
                                    <div className="w-[26px] h-[26px] p-1 flex justify-center items-center border border-gray-200 rounded cursor-pointer" onClick={() => { removeDocument(docs) }}>
                                        <img src='/icons/cross-button.svg' alt='checkmark icon' />

                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>) : (
                // Message when no documents are selected
                <div className='flex flex-col gap-6 items-center p-10 bg-gray-100 rounded-lg border border-gray-200 h-[calc(100%-89px)]'>
                    <img src="/icons/big-arrow.svg" alt='left Arrow Sign' />
                    <p className='text-xs font-semibold text-gray-500 leading-[150%] font-inter text-center'>Select documents from the left panel to have employees review them and provide a signature acknowledging review</p>
                </div>
            )

            }
        </div>
    )
}

export default SelectedDocuments
