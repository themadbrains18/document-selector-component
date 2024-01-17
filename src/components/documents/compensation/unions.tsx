import { RadioGroup } from '@headlessui/react'
import { useState, } from 'react'


// data for unions
const unions = [
    { id: 1, unionName: '(!) My union isn’t listed' },
    { id: 2, unionName: 'Teamsters 105' },
    { id: 3, unionName: 'Steel Workers 103' },
    { id: 4, unionName: 'Paving Contractors Union 54' },
]


// Unions component definition
const Unions = () => {
    // State variables
    let [plan, setPlan] = useState<String | undefined>()
    const [selected, setSelected] = useState<String>();
    const [toggle, setToggle] = useState(false);
    const [unionId, setUnionId] = useState<number>();

    console.log(plan, "=============plan=======")

    return (
        <div className='py-6  border-b border-gray-200 '>
            <p className='text-sm text-gray-900 font-inter font-medium mb-2'>Is Jason Smith a member (or required to be a member, for this role) of any union(s)?</p>
            {/* Radio buttons for Yes/No */}
            <RadioGroup value={plan} onChange={setPlan} className={`flex gap-4 items-center mb-4`}>
                <RadioGroup.Option value="yes">
                    {({ checked }) => (
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <span className={`inline-block w-4 h-4 rounded-full  bg-gray-50 border-[0.5px] border-gray-300 ${checked ? 'border-[3.5px] border-orange-500' : ''}`}></span>
                            <label className='text-sm text-gray-900 font-inter font-medium cursor-pointer'>Yes</label>
                        </div>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="no">
                    {({ checked }) => (
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <span className={`inline-block w-4 h-4 rounded-full  bg-gray-50 border-[0.5px] border-gray-300 ${checked ? 'border-[3.5px] border-orange-500' : ''}`}></span>
                            <label className='text-sm text-gray-900 font-inter font-medium cursor-pointer'>No</label>
                        </div>
                    )}
                </RadioGroup.Option>
            </RadioGroup>

            {/* Section for selecting a union */}
            {
                plan === "yes" &&
                <div className='max-w-[400px] w-full relative'>
                    <h3 className='text-sm font-inter font-medium text-gray-900 mb-2'>Select Union</h3>

                    {/* Dropdown for selecting a union */}
                    <div className='border border-gray-300 rounded-lg px-2.5 py-2 flex justify-between gap-2.5 items-center cursor-pointer' onClick={() => setToggle(!toggle)}>
                        <span className='font-inter text-sm text-gray-900'>{selected ? selected : "Select Union"}</span>
                        <img src="/icons/arrow-down.svg" alt='Arrow down icon' className='w-2.5 h-2.5' />
                    </div>
                    <ul className={`border border-gray-200 rounded-lg shadow-md p-1.5 mt-0.5 duration-300 absolute bg-white w-full ${toggle ? "opacity-100 visible" : "opacity-0 invisible "}`}>
                        {
                            unions?.map((item) => {
                                return (
                                    <li key={item?.unionName} className='first:border-b first:border-gray-200 first:mb-1' onClick={() => { setSelected(item?.unionName); setToggle(false); setUnionId(item?.id) }} >
                                        <div className='font-inter text-sm font-medium text-gray-900 px-1.5 py-2 mb-1 cursor-pointer hover:bg-orange-50 rounded-md '>
                                            {item?.unionName}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* Additional information based on the selected union */}
                    {
                        selected && unionId !== 1 && (
                            <>
                                <div className='border-b-[2px] border-gray-200 py-4'>
                                    <div className='p-4 rounded-md bg-blue-50 border border-blue-200'>
                                        <p className='text-sm text-primary-800 font-inter'>If the union list above doesn’t feature a particular union relevant to your firm, please contact Mason Support and we’ll partner with you to get the relevant union agreements and conditions imported into our system</p>
                                    </div>
                                </div>

                                {/* Button to add another union */}
                                <button
                                    type="button"
                                    className="inline-flex mt-4 justify-center rounded-md border px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
                                >
                                    <div className='flex items-center justify-center w-4 h-4'>
                                        <img src='/icons/plus-black.svg' alt='Plus Icon' />
                                    </div>
                                    <span className='text-xs font-inter font-semibold text-gray-900'>Add Another Union</span>
                                </button>
                            </>
                        )
                    }

                    {
                        selected && (unionId === 1) &&
                        <div className='mt-4'>
                            <p className='font-inter text-sm font-medium text-gray-900 mb-2'>Please Enter Union Name</p>
                            <div className='border border-gray-200 rounded-lg px-4 py-2 '>
                                <input type='text' placeholder='Union Name' className='outline-none w-full bg-transparent' />
                            </div>
                            <div className='border-b-[2px] border-gray-200 py-4'>
                                <div className='p-4 rounded-md bg-blue-50 border border-blue-200'>
                                    <p className='text-sm text-primary-800 font-inter'>We’re still working on setting up the back-end logic to accurately reflect this union’s agreements and conditions. If you selected a union in this list, we’re already working with your firm to get that resolved! </p>
                                    <p className='text-sm text-primary-800 font-inter'>If you have any questions please contact Mason Support. </p>
                                </div>
                            </div>

                            {/* Button to add another union */}
                            <button
                                onClick={() => { setPlan("yes") }}
                                type="button"
                                className="inline-flex mt-4 justify-center rounded-md border px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
                            >
                                <div className='flex items-center justify-center w-4 h-4'>
                                    <img src='/icons/plus-black.svg' alt='Plus Icon' />
                                </div>
                                <span className='text-xs font-inter font-semibold text-gray-900'>Add Another Union</span>
                            </button>
                        </div>
                    }
                </div>
            }


        </div >
    )
}

export default Unions
