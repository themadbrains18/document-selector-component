import React, { useState } from 'react'

// Interface for props passed to Dropdown component
interface DropdownProps {
    filterList: {
        heading: string;
        list: string[];
    };
    selectedFilters: string[] | undefined;
    onSelect: (selectedItems: string[]) => void;
}

// Dropdown component definition
const Dropdown = (props: DropdownProps) => {
    // State to manage the visibility of the dropdown
    const [toggle, setToggle] = useState(false);

    // Function to toggle the visibility of the dropdown
    const togglingAccordion = () => {
        setToggle(!toggle);
    };

    // Function to handle item selection in the dropdown
    const handleItemSelect = (item: string) => {
        const selectedItems = [...(props.selectedFilters || [])];
        if (selectedItems.includes(item)) {
            selectedItems.splice(selectedItems.indexOf(item), 1);
        } else {
            selectedItems.push(item);
        }
        // Call the onSelect callback with the updated selected items
        props.onSelect(selectedItems);
    };
    return (
        <div className='relative'>
            {/* Dropdown header */}
            <div className='px-[10px] py-2 border border-gray-300 rounded-lg flex items-center justify-between gap-3 cursor-pointer' onClick={togglingAccordion} role="button"
                aria-haspopup="true"
                aria-expanded={toggle}>
                <span className='text-sm text-gray-900 font-inter'>{props?.filterList?.heading}</span>
                <img src='/icons/arrow-down.svg' alt='arrow icon' />
            </div>

            {/* Dropdown content */}
            {toggle && (
                <div className='p-4 rounded-lg border border-gray-200 bg-white shadow-md absolute top-[106%] min-w-[468px] w-full z-10'>
                    {/* Search input */}
                    <div className='my-3 flex gap-3 items-center px-4 py-2 border border-gray-300 rounded-lg'>
                        <img src="/icons/search-icon.svg" alt="Search Icon" />
                        <input type="text" placeholder='Search' className='outline-none w-full bg-transparent' />
                    </div>

                    {/* Dropdown list */}
                    <ul>
                        {props.filterList.list.map((item, index) => (
                            <li key={index} className={`text-sm font-medium text-gray-900 font-inter py-2 px-[6px] cursor-pointer hover:bg-orange-50 ${props.selectedFilters && props.selectedFilters.includes(item) ? 'text-blue-500' : ''}`} onClick={() => { handleItemSelect(item); setToggle(false) }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    )
}

export default Dropdown
