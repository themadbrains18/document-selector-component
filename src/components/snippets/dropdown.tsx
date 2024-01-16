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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    fill="none"
                    viewBox="0 0 10 11"
                >
                    <path
                        fill="#111928"
                        stroke="#111928"
                        d="M4.714 7.39h0a.44.44 0 00.297.11l-.297-.11zm0 0l-3.6-3.327h0m3.6 3.326l-3.6-3.326m0 0l-.006-.006m.006.006l-.006-.006m0 0a.334.334 0 01-.082-.108.278.278 0 01-.002-.23.33.33 0 01.079-.108.409.409 0 01.133-.081.465.465 0 01.335.002c.051.02.096.05.13.083h0m-.593.442l.594-.442m0 0l.006.006m-.006-.006l.006.006m0 0L4.672 6.36l.34.313M1.707 3.621l3.303 3.052m0 0l.34-.313m-.34.313l.34-.313m0 0l2.96-2.735a.442.442 0 01.293-.105c.117.001.221.045.293.111.07.065.102.145.103.219a.299.299 0 01-.096.216L5.308 7.39h0m.042-1.03l-.042 1.03m0 0a.44.44 0 01-.297.111l.297-.11z"
                    ></path>
                </svg>
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
