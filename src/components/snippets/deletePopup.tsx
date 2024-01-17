import PrimaryBtn from "./primaryBtn"
import SecondaryBtn from "./secondaryBtn"

interface DeleteProps {
  setDeletePopup: Function;
  deletePopup: boolean;
}
const DeletePopup = (props: DeleteProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md max-w-[600px] w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
      <div className="flex justify-between items-center gap-4 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold font-inter text-gray-900">Add Custom Compensation Type</h2>
        <div className="w-10 h-10 rounded-sm flex justify-center items-center cursor-pointer" onClick={()=>{props?.setDeletePopup(false)}}>
          <img src="/icons/cross-button.svg" alt="close icon" className="w-4 h-4" />
        </div>
      </div>
      <div className="p-6 text-center">
        <div className="text-center flex justify-center mb-4">
          <img src="/icons/deleteBig.svg" alt="Delete Icon" />
        </div>
        <p className="text-sm font-medium text-gray-900 font-inter text-center">Are you sure you would like to delete the draft custom compensation type Custom Compensation Name?</p>
        <p className="text-sm font-medium text-gray-900 font-inter text-center">This will not effect existing compensations assigned previously with using this type.</p>
      </div>
      <div className="flex p-6 justify-end border-t border-gray-200">
        <div className="flex gap-3">
          <SecondaryBtn buttonText="Cancel" setPopup={props?.setDeletePopup} />
          <PrimaryBtn buttonText="Save" setPopup={props?.setDeletePopup} />
        </div>
      </div>
    </div>
  )
}

export default DeletePopup
