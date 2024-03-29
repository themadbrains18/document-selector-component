import React, { Fragment, useState } from 'react'
import Dropdown from '../../snippets/dropdown'
import Accordion from '../../snippets/accordion'
import { Switch } from '@headlessui/react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const AvailableDocuments = () => {
    // State for enabling/disabling notifications
    const [enabled, setEnabled] = useState(false)

    // State to keep track of selected filters
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

    // State to keep track of the currently open accordion index
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    // Function to toggle accordion visibility
    const toggleAccordion = (index: number) => {
        setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Filter options
    const filters = [
        {
            heading: "Job Templates",
            list: ["Heavy Equipment Operator", "Heavy Equipment Service Technician", "Equipment Operator", "Track Foreman", "Track Laborer", "Track Machine Operator", "Equipment Operator", "Asphalt Plant Foreman", "Concrete Paving Foreman", "Construction Quality Control Technician", "Grade Foreman", "Grinding Operator", "Heavy Equipment Mechanic", "Loader Operator", "Off Road Truck Driver"]
        },
        {
            heading: "Locations",
            list: ["New York, NY", "Los Angeles, CA", "San Francisco, CA", "San Francisco, CA", "Miami, FL", "Chicago, IL", "Boston, MA", "Houston, TX", "Austin, TX"]
        },
        {
            heading: "Subsidiary",
            list: ["New York, NY", "Los Angeles, CA", "San Francisco, CA", "San Francisco, CA"]
        },
        {
            heading: "Seniority",
            list: ["Entry-Level Position", "Individual Contributor", "Manager", "Office Staff, Leadership / Management"]
        },
    ];

    // Accordion data
    const accordions = [
        {
            heading: "Drug Policies",
            list: ["Alabama1 - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement", "Illinois - Employee Handbook", "Kansas - Employee Handbook", "New York - Employee Handbook", "Utah - Employee Handbook"]
        },
        {
            heading: "Employee Handbooks",
            list: ["Alabama2 - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement", "Illinois - Employee Handbook", "Kansas - Employee Handbook", "New York - Employee Handbook", "Utah - Employee Handbook"]
        },
        {
            heading: "Equipment Selection",
            list: ["Alabama3 - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement", "Illinois - Employee Handbook", "Kansas - Employee Handbook", "New York - Employee Handbook", "Utah - Employee Handbook"]
        },
        {
            heading: "Payroll Handbook",
            list: ["1 Alabama4 - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement", "Alabama - Non-Compete Agreement"]
        },
        {
            heading: "PTO Policy",
            list: ["Alabama - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement", "Alabama - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement"]
        },
        {
            heading: "Safety Manuals",
            list: ["Alabama - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement", "Alabama - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement"]
        },
        {
            heading: "Sexual Harassment",
            list: ["1 Alabama - Non-Compete Agreement", "California - Non-Compete Agreement", "Colorado - Non-Compete Agreement", "Florida - Non-Compete Agreement", "Alabama - Non-Compete Agreement"]
        },

    ]

    // Function to handle filter selection
    const handleFilterSelect = (heading: string, selectedItems: string[]) => {
        setSelectedFilters({
            ...selectedFilters,
            [heading]: selectedItems,
        });
    };

    // Function to remove a filter
    const removeFilter = (heading: string, item: string) => {
        const updatedFilters = { ...selectedFilters };
        updatedFilters[heading] = selectedFilters[heading].filter((filterItem) => filterItem !== item);
        setSelectedFilters(updatedFilters);
    };
    return (
        <div className='p-4 max-w-[500px] w-full rounded-lg bg-white border border-gray-300'>
            <h2 className='text-gray-900 font-medium font-inter'>Available Documents</h2>

            {/* Search input */}
            <div className='my-3 flex gap-3 items-center px-4 py-2 border border-gray-300 rounded-lg'>
                <img src="/icons/search-icon.svg" alt="Search Icon" />
                <input type="text" placeholder='Search' className='outline-none w-full bg-transparent' />
            </div>

            {/* Filter by heading */}
            <h3 className='text-sm font-medium text-gray-900 font-inter'>Filter by:</h3>

            {/* Grid for filter dropdowns */}
            <div className='grid grid-cols-2 gap-3 my-3'>
                {filters?.map((filterList, index) => (
                    <Fragment key={filterList?.heading}>
                        {/* Dropdown component for each filter category */}
                        <Dropdown
                            filterList={filterList}
                            selectedFilters={selectedFilters[filterList.heading]}
                            onSelect={(selectedItems) => handleFilterSelect(filterList.heading, selectedItems)}
                            // index={index}
                        />
                    </Fragment>
                ))}
            </div>

            {/* Selected filters display */}
            <div className={`flex flex-wrap gap-2 ${Object.values(selectedFilters).flat().length > 0 ? 'border  p-2  border-gray-200 rounded-lg' : ''}`}>
                {Object.entries(selectedFilters).map(([filterHeading, filterItems]) => (
                    filterItems.map((item) => (
                        <span key={item} className="inline-flex items-center px-3 py-[2px] text-sm font-medium text-blue-500 bg-blue-200 rounded-md dark:bg-blue-100 dark:text-blue-500 font-inter">
                            {item}
                            {/* Remove filter button */}
                            <button
                                type="button"
                                className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                                onClick={() => removeFilter(filterHeading, item)}
                            >
                                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Remove badge</span>
                            </button>
                        </span>
                    ))
                ))}
            </div>

            {/* Document count and select all toggle */}
            <div className='py-2 px-[6px] flex gap-3 justify-between items-center mb-3'>
                {/* Select all toggle switch */}
                <h3 className='text-sm font-medium text-gray-900 font-inter'>53 Available Documents</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                            enabled ? 'bg-orange-500' : 'bg-gray-200',
                            'relative inline-flex h-7 w-14 items-center rounded-full'
                        )}
                    >
                        <span className="sr-only">Select All</span>
                        <span
                            aria-hidden="true"
                            className={classNames(
                                enabled ? 'translate-x-8' : 'translate-x-1',
                                'pointer-events-none inline-block h-[21px] -translate-y-[0.7px] w-[21px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                        />
                    </Switch>
                    <span className="ms-2 text-gray-900 font-inter">
                        Select All
                    </span>
                </label>
            </div>

            {/* Accordion container */}
            <div className='border border-orange-500 rounded-lg shadow-sm overflow-hidden'>
                {
                    accordions?.map((accordionData, index) => {
                        return (
                            <Fragment key={accordionData?.heading}>
                                <Accordion accordionData={accordionData}
                                    isOpen={openAccordionIndex === index}
                                    onToggle={() => toggleAccordion(index)}
                                />
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AvailableDocuments
