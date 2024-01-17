import PrimaryBtn from "../../snippets/primaryBtn";
import SecondaryBtn from "../../snippets/secondaryBtn";
import SelectDropdown from "../../snippets/selectDropdown"

interface PopupProps {
    setPopup: Function;
    setEditPopup: Function;
    editPopup: boolean;
    setDeletePopup:Function;
    deletePopup:boolean;
}
const CustomCompensationPopup = (props: PopupProps) => {
    
    const dropdownItems = [
        {
            item: "At the end of each period",
        },
        {
            item: "Number of days after they start work",
        },
        {
            item: "As a part of their first pay run",
        },
    ]
    const frequency = [
        {
            item: "Monthly",
        },
        {
            item: "Once",
        },
        {
            item: "Yearly",
        },
    ]

    return (
        <>
            <div className="rounded-lg border border-gray-200 bg-white shadow-md max-w-[600px] w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                <div className="flex justify-between items-center gap-4 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold font-inter text-gray-900">Add Custom Compensation Type</h2>
                    <div className="w-10 h-10 rounded-sm flex justify-center items-center cursor-pointer" onClick={() => { props?.setPopup(false) }}>
                        <img src="/icons/cross-button.svg" alt="close icon" className="w-4 h-4" />
                    </div>
                </div>
                <div className="p-6 border-b border-gray-200">
                    <p className=" text-sm font-medium text-gray-900 font-inter mb-2">Compensation Type Name</p>
                    {/* Search input */}
                    <div className="pb-4 border-b border-gray-200">
                        <div className='flex gap-3 items-center px-4 py-2 border border-gray-300 rounded-lg'>
                            <img src="/icons/search-icon.svg" alt="Search Icon" />
                            <input type="text" placeholder='Compensation Type Name' className='outline-none w-full bg-transparent' />
                        </div>
                    </div>
                    <p className="py-4 font-medium text-gray-900 font-inter">Default Settings (Optional)</p>
                    <div className="mb-4">
                        <p className=" text-sm font-medium text-gray-900 font-inter mb-2">Amount</p>
                        <div className='flex gap-3 items-center px-4 py-2 border border-gray-300 rounded-lg'>
                            <img src="/icons/search-icon.svg" alt="Search Icon" />
                            <input type="text" placeholder='Compensation Type Name' className='outline-none w-full bg-transparent' />
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className=" text-sm font-medium text-gray-900 font-inter mb-2">Frequency</p>
                        <SelectDropdown title="Please select" dropdownItems={frequency} />
                    </div>
                    <div className="">
                        <p className=" text-sm font-medium text-gray-900 font-inter mb-2">When</p>
                        <SelectDropdown title="Please select" dropdownItems={dropdownItems} />
                    </div>
                    {
                        props?.editPopup &&
                        <div className="pt-4 mt-4 border-t border-gray-200">
                            <button
                                onClick={() => { props?.setDeletePopup(!props?.deletePopup); props?.setPopup(false) }}
                                type="button"
                                className="inline-flex justify-center rounded-lg border px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
                            >
                                <img src='/icons/trash.svg' alt='Delete Icon' className="w-4 h-4" />
                                <span>Delete Compensation Type</span>
                            </button>
                        </div>
                    }
                </div>
                <div className="flex p-6 justify-end">
                    <div className="flex gap-3">
                        <SecondaryBtn buttonText="Cancel" setPopup={props?.setPopup} />
                        <PrimaryBtn buttonText="Save" setPopup={props?.setPopup} />
                    </div>
                </div>
            </div>
            {/* {
                deletePopup &&
                <>
                    <DeletePopup deletePopup={deletePopup} setDeletePopup={setDeletePopup} />
                    <div className='bg-black fixed top-0 left-0 bottom-0 right-0 opacity-50 z-30'></div>
                </>
            } */}
        </>
    )
}

export default CustomCompensationPopup
