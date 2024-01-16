import React, { useState } from 'react'
import { RadioGroup, Menu } from '@headlessui/react'

const EligibleForBenefits = () => {
    let [plan, setPlan] = useState();
    let [period, setPeriod] = useState();

    const [selected, setSelected] = useState<String>("Days");
    const [toggle, setToggle] = useState(false);
    // const [unionId, setUnionId] = useState<number>();
    const afterTimes = [
        { time: 'Days' },
        { time: 'Month(s)' },
        { time: 'Year(s)' },
    ]
    return (
        <div className='py-6  border-b border-gray-200 '>
            <p className='text-sm text-gray-900 font-inter font-medium mb-2'>Should Jason Smith automatically become eligible for benefits?</p>
            <RadioGroup value={plan} onChange={setPlan} className={`flex gap-4 items-center`}>
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

            {
                plan === "yes" &&
                <div className='py-4'>
                    <h3 className='text-sm text-gray-900 font-inter font-medium'>Great, when?</h3>
                    <RadioGroup value={period} onChange={setPeriod} className={`flex gap-4 items-center my-2`}>
                        <RadioGroup.Option value="Immediately">
                            {({ checked }) => (
                                <div className='flex gap-2 items-center cursor-pointer'>
                                    <span className={`inline-block w-4 h-4 rounded-full  bg-gray-50 border-[0.5px] border-gray-300 ${checked ? 'border-[3.5px] border-orange-500' : ''}`}></span>
                                    <label className='text-sm text-gray-900 font-inter font-medium cursor-pointer'>Immediately</label>
                                </div>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="After their probation period">
                            {({ checked }) => (
                                <div className='flex gap-2 items-center cursor-pointer'>
                                    <span className={`inline-block w-4 h-4 rounded-full  bg-gray-50 border-[0.5px] border-gray-300 ${checked ? 'border-[3.5px] border-orange-500' : ''}`}></span>
                                    <label className='text-sm text-gray-900 font-inter font-medium cursor-pointer'>After their probation period</label>
                                </div>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="After">
                            {({ checked }) => (
                                <div className='flex items-center gap-4'>
                                    <div className='flex gap-2 items-center cursor-pointer'>
                                        <span className={`inline-block w-4 h-4 rounded-full  bg-gray-50 border-[0.5px] border-gray-300 ${checked ? 'border-[3.5px] border-orange-500' : ''}`}></span>
                                        <label className='text-sm text-gray-900 font-inter font-medium cursor-pointer'>After</label>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <div className='px-4 py-2 rounded-lg border border-gray-300 bg-white'>
                                            <input type='number' className='bg-transparent w-[42px] h-5 block outline-none' placeholder='90' disabled={period !== 'After'} />
                                        </div>
                                        <Menu as="div" className='min-w-40 w-full relative bg-white'>
                                            <Menu.Button className={`border border-gray-300 rounded-lg px-2.5 py-2 flex justify-between gap-2.5 items-center cursor-pointer min-w-40 w-full`} onClick={() => setToggle(!toggle)} disabled={period !== "After"}>
                                                <span className={`font-inter text-sm  ${period !== "After" ? "text-gray-400" : "text-gray-900"}`}>{selected ? selected : ""}</span>
                                                <img src="/icons/arrow-down.svg" alt='Arrow down icon' className={`w-2.5 h-2.5 ${period !== 'After' && "opacity-50"}`} />
                                            </Menu.Button>
                                            <ul className={`border border-gray-200 rounded-lg shadow-md p-1.5 mt-0.5 duration-300 absolute bg-white w-full ${toggle ? "opacity-100 visible" : "opacity-0 invisible "}`}>
                                                {
                                                    afterTimes?.map((item) => (
                                                        <li key={item?.time} onClick={() => { setSelected(item?.time); setToggle(false) }}>
                                                            <div className='font-inter text-sm font-medium text-gray-900 px-1.5 py-2 mb-1 cursor-pointer hover:bg-orange-50 rounded-md '>
                                                                {item?.time}
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </Menu>
                                    </div>
                                </div>
                            )}

                        </RadioGroup.Option>
                    </RadioGroup>
                </div>
            }
        </div >
    )
}

export default EligibleForBenefits
