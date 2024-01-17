import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface DropdownItem {
    item: string;
}
interface CustomCompensationPopupProps {
    dropdownItems: DropdownItem[];
    title: String;
}

const SelectDropdown = (props: CustomCompensationPopupProps) => {
    const [selected, setSelected] = useState<String>();
    return (
        <Menu as="div" className="relative">
            <Menu.Button className="px-[10px] py-2 border border-gray-300 rounded-lg flex items-center justify-between gap-3 cursor-pointer w-full">
                <span className='text-sm text-gray-900 font-inter'>{selected ? selected : props?.title}</span>
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
                <Menu.Items className="p-4 rounded-lg border border-gray-200 bg-white shadow-md absolute top-[104%] min-w-[468px] w-full z-10">
                    <div className="">
                        <ul>
                            {
                                props?.dropdownItems?.map((value) => {
                                    return (
                                        <Menu.Item key={value?.item}>
                                            {({ active }) => (
                                                <li className={`${active ? 'bg-orange-50 ' : 'text-gray-900'} group text-sm rounded-md mb-1 last:mb-0 font-medium text-gray-900 font-inter py-2 px-1.5 cursor-pointer hover:bg-orange-50`} onClick={() => { setSelected(value?.item) }}>
                                                    {value?.item}
                                                </li>
                                            )}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default SelectDropdown
