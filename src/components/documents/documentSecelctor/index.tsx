
import AvailableDocuments from './availableDocuments'
import SelectedDocuments from './selectedDocuments'

// layouts
const DocumentSelector = () => {

    return (
        <>
            <div className='max-w-[1024px] w-full mx-auto  mt-[140px] mb-[71px] py-6'>
                <div className='p-6 rounded-lg border border-gray-200 bg-white mb-6'>
                    <h3 className='text-lg font-semibold text-gray-900 font-inter mb-4 leading-[27px]'>Which agreements, forms and notices should be sent to Jason Smith?</h3>
                    <p className='text-sm text-gray-900 font-inter font-medium'>Employees assigned to this job type will be required to review, where relevant fill-in, and sign the following agreements and notices:</p>
                </div>
                <p className='font-inter text-sm font-medium text-gray-900 mb-2'>Select the agreements, notices and documents you want Jason Smith to sign</p>
                <div className='flex gap-6 max-w-[1024px] w-full'>
                    <AvailableDocuments />
                    <SelectedDocuments />
                </div>
            </div>
        </>
    )
}



export default DocumentSelector
