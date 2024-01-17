
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CustomCompensationPopup from './customCompensationPopup'
import DeletePopup from '../../snippets/deletePopup';
import SelectDropdown from '../../snippets/selectDropdown';

// CompensationSec component definition
const CompensationSec = () => {
    // State variables for managing popups
    const [popup, setPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);

    // data for compensation types, frequency, and dropdown items
    const compensationItems = [
        {
            id: 1,
            list: "Signing Bonus",
        },
        {
            id: 2,
            list: "Relocation Bonus",
        },
        {
            id: 3,
            list: "Discretionary Year-End Bonus",
        },
        {
            id: 4,
            list: "Discretionary Performance Bonus",
        },
        {
            id: 5,
            list: "Vehicle Allowance",
        },
        {
            id: 6,
            list: "Healthcare Contribution",
        },
        {
            id: 7,
            list: "Phone Stipend",
        },
        {
            id: 8,
            list: "401(k)",
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
    return (
        <div className='py-6 border-b border-gray-200 '>
            <div className='flex items-start justify-between gap-4 mb-6'>
                <h3 className='font-inter text-gray-900 font-semibold'>Compensation</h3>
                {/* Add Compensation button with dropdown */}
                <Menu as="div" className='relative'>
                    <div>
                        <Menu.Button
                            className="inline-flex justify-center rounded-lg border px-3 py-2 text-sm font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-orange-500"
                        >
                            <div className='flex items-center justify-center w-4 h-4'>
                                <img src='/icons/plus-icon.svg' alt='Plus Icon' />
                            </div>
                            <span className='font-inter text-sm font-semibold text-orange-500'>Add Compensation</span>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute p-4 w-[341px] right-0 mt-1 origin-top-right divide-y z-10 divide-gray-200 rounded-lg bg-white shadow-md ring-1 ring-black/5 focus:outline-none">
                            <div>
                                {/* Mapping through compensationItems to create dropdown items */}
                                {
                                    compensationItems?.map((item) => {
                                        return <Fragment key={item?.list}>
                                            <Menu.Item>
                                                <div className='px-1.5 py-2 cursor-pointer hover:bg-orange-50 rounded-md mb-3 last:mb-0 '>
                                                    <span className='block leading-[14px] font-inter text-sm font-medium text-gray-900'> {item?.list}</span>
                                                </div>
                                            </Menu.Item>
                                        </Fragment>
                                    })
                                }
                                {/* Button for Edit the custom compensation */}
                                <button className='mb-3 px-1.5 py-2 cursor-pointer hover:bg-orange-50 rounded-md  flex justify-between gap-4 items-center w-full' onClick={() => { setEditPopup(true); setPopup(true) }}>
                                    <span className=' text-sm font-medium text-gray-900' >Custom Compensation Name</span>
                                    <div className='flex items-center justify-center w-6 h-6 border border-gray-200 rounded-[4px] p-1'>
                                        <img src='/icons/edit-icon.svg' alt='Edit Icon' className='w-4 h-4' />
                                    </div>
                                </button>
                                {/* Button for adding custom compensation */}
                                <button className='flex justify-center gap-4 items-center border rounded-lg py-2 px-3 w-full border-gray-200 bg-white hover:bg-gray-100' onClick={() => { setPopup(!popup); setEditPopup(false) }}>
                                    <div className='flex items-center justify-center w-4 h-4'>
                                        <img src='/icons/plus-black.svg' alt='Plus Icon' />
                                    </div>
                                    <span className='font-inter text-gray-900 font-semibold text-sm' >Add Custom Compensation</span>
                                </button>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            {/* Table section for displaying compensation details */}
            <div className='border border-gray-200 rounded-lg'>
                {/* Header row of the table */}
                <ul className='bg-gray-100 flex items-center rounded-t-lg'>
                    <li className='py-2 px-4 max-w-[165px] w-full text-xs text-gray-800 font-semibold font-inter uppercase'>Compensation Type</li>
                    <li className='py-2 px-4 max-w-[180px] w-full  text-xs text-gray-800 font-semibold font-inter uppercase'>Amount</li>
                    <li className='py-2 px-4 max-w-[160px] w-full  text-xs text-gray-800 font-semibold font-inter uppercase'>Frequency</li>
                    <li className='py-2 px-4 max-w-[455px] w-full  text-xs text-gray-800 font-semibold font-inter uppercase'>When</li>
                    <li className='max-w-[64px] w-full'></li>
                </ul>
                {/* Compensation row of the table */}
                <ul className='flex items-center bg-white rounded-b-lg'>
                    <li className='py-4 px-4 max-w-[165px] w-full text-xs text-gray-800  font-inter'>Salary / Wage</li>
                    <li className='py-4 px-4 max-w-[180px] w-full'>
                        <div className='border border-gray-300 rounded-lg px-4 py-2 flex gap-2.5 items-center justify-between'>
                            <span className='w-5 h-5 flex justify-center items-center'>
                                <img src='/icons/dollar.svg' alt='dollar sign' />
                            </span>
                            <input type='text' placeholder='Amount' className='w-[86px] outline-none bg-transparent' />
                        </div>
                    </li>
                    <li className='py-4 px-4 max-w-[160px] w-full'>
                        <SelectDropdown title="Monthly" dropdownItems={frequency} />
                        {/* <div className='border border-gray-300 rounded-lg px-2.5 py-2 flex justify-between gap-2.5 items-center'>
                            <span className='font-inter text-sm text-gray-900'>Monthly</span>
                            <img src="/icons/arrow-down.svg" alt='Arrow down icon' className='w-2.5 h-2.5' />
                        </div> */}
                    </li>
                    <li className='py-4 px-4 max-w-[455px] w-full'>
                        <div className='max-w-[312px] w-full'>
                            <SelectDropdown title="At the end of each period" dropdownItems={dropdownItems} />
                        </div>
                        {/* <div className='border border-gray-300 rounded-lg px-2.5 py-2 flex justify-between gap-2.5 items-center max-w-[312px] w-full'>
                            <span className='font-inter text-sm text-gray-900'>At the end of each period</span>
                            <img src="/icons/arrow-down.svg" alt='Arrow down icon' className='w-2.5 h-2.5' />
                        </div> */}
                    </li>
                    <li className='max-w-[64px] w-full'></li>
                </ul>
            </div>

            {/* Popup components */}
            {popup && <>
                <CustomCompensationPopup setPopup={setPopup} setEditPopup={setEditPopup} editPopup={editPopup} setDeletePopup={setDeletePopup} deletePopup={deletePopup} />
                <div className='bg-black fixed top-0 left-0 bottom-0 right-0 opacity-50 z-30'></div>
            </>}

            {
                deletePopup && <>
                    <DeletePopup setDeletePopup={setDeletePopup} deletePopup={deletePopup} />
                    <div className='bg-black fixed top-0 left-0 bottom-0 right-0 opacity-50 z-30'></div>
                </>
            }
        </div>

    )
}

export default CompensationSec
