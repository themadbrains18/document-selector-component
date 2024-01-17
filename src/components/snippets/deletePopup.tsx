import PrimaryBtn from "./primaryBtn";
import SecondaryBtn from "./secondaryBtn";

// Interface defining the props expected by the DeletePopup component
interface DeleteProps {
  setDeletePopup: Function;  // Function to set the state and control the visibility of the delete popup
  deletePopup: boolean;      // Boolean indicating whether the delete popup is currently visible or not
}

// DeletePopup component definition
const DeletePopup = (props: DeleteProps) => {
  return (
    // Popup container with styling
    <div className="rounded-lg border border-gray-200 bg-white shadow-md max-w-[600px] w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
      {/* Popup header with title and close button */}
      <div className="flex justify-between items-center gap-4 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold font-inter text-gray-900">Add Custom Compensation Type</h2>
        {/* Close button with icon, triggering the setDeletePopup function */}
        <div className="w-10 h-10 rounded-sm flex justify-center items-center cursor-pointer" onClick={() => { props?.setDeletePopup(false) }}>
          <img src="/icons/cross-button.svg" alt="close icon" className="w-4 h-4" />
        </div>
      </div>
      {/* Main content of the popup */}
      <div className="p-6 text-center">
        {/* Icon for delete confirmation */}
        <div className="text-center flex justify-center mb-4">
          <img src="/icons/deleteBig.svg" alt="Delete Icon" />
        </div>
        {/* Delete confirmation messages */}
        <p className="text-sm font-medium text-gray-900 font-inter text-center">Are you sure you would like to delete the draft custom compensation type Custom Compensation Name?</p>
        <p className="text-sm font-medium text-gray-900 font-inter text-center">This will not affect existing compensations assigned previously with using this type.</p>
      </div>
      {/* Popup footer with action buttons */}
      <div className="flex p-6 justify-end border-t border-gray-200">
        <div className="flex gap-3">
          {/* Cancel button */}
          <SecondaryBtn buttonText="Cancel" setPopup={props?.setDeletePopup} />
          {/* Save button */}
          <PrimaryBtn buttonText="Save" setPopup={props?.setDeletePopup} />
        </div>
      </div>
    </div>
  );
};

// Exporting the DeletePopup component
export default DeletePopup;
