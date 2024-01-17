// Interface defining the props expected by the PrimaryBtn component
interface ButtonProps {
    buttonText: string;      
    setPopup: Function;     
  }
  
  // PrimaryBtn component definition
  const PrimaryBtn = (props: ButtonProps) => {
    return (
      // Button element with styling and click event handler
      <button
        type="button"
        onClick={() => { props?.setPopup(false) }}  // Click event triggers the setPopup function
        className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white font-inter focus:outline-none"
      >
        {props?.buttonText}  {/* Displaying the buttonText prop as the text content of the button */}
      </button>
    );
  }
  
  export default PrimaryBtn;
  