import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'

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

        <Menu as="div" className="relative">
            <Menu.Button className="px-[10px] py-2 border border-gray-300 rounded-lg flex items-center justify-between gap-3 cursor-pointer w-full">
                <span className='text-sm text-gray-900 font-inter'>{props?.filterList?.heading}</span>
                <img src='/icons/arrow-down.svg' alt='arrow icon' />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="p-4 rounded-lg border border-gray-200 bg-white shadow-md absolute top-[106%] min-w-[468px] w-full z-10">
                    <div className="">
                        {/* Search input */}
                        <div className='my-3 flex gap-3 items-center px-4 py-2 border border-gray-300 rounded-lg'>
                            <img src="/icons/search-icon.svg" alt="Search Icon" />
                            <input type="text" placeholder='Search' className='outline-none w-full bg-transparent' />
                        </div>
                        <ul>
                            {props.filterList.list.map((item, index) => (
                                <Menu.Item key={index} >
                                    {({ active }) => (
                                        <li className={`${active ? 'bg-orange-50 ' : 'text-gray-900'} group text-sm rounded-md mb-1 last:mb-0 font-medium text-gray-900 font-inter py-2 px-1.5 cursor-pointer hover:bg-orange-50`} onClick={() => { handleItemSelect(item) }} >
                                            {item}
                                        </li>
                                    )}
                                </Menu.Item>

                            ))}
                        </ul>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown
