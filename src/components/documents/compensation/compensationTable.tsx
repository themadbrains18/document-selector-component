import SelectDropdown from "../../snippets/selectDropdown"


const CompensationTable = () => {
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
        <>
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
        </>
    )
}

export default CompensationTable