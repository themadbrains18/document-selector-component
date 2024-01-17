// Interface defining the props expected by the SecondaryBtn component
interface ButtonProps {
    buttonText: string;     
    setPopup: Function;    
  }
  
  // SecondaryBtn component definition
  const SecondaryBtn = (props: ButtonProps) => {
    return (
      // Button element with styling and click event handler
      <button
        type="button"
        onClick={() => { props?.setPopup(false) }}  // Click event triggers the setPopup function
        className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold border border-gray-200 leading-[20px] text-gray-900 bg-transparent font-inter focus:outline-none hover:bg-gray-200"
      >
        {props?.buttonText}  {/* Displaying the buttonText prop as the text content of the button */}
      </button>
    );
  }
  
  export default SecondaryBtn;
  