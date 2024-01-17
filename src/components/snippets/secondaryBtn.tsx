interface buttonProps {
    buttonText: String;
    setPopup:Function;
}
const SecondaryBtn = (props: buttonProps) => {
    return (
        <button
            type="button"
            onClick={()=>{props?.setPopup(false)}}
            className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold border border-gray-200 leading-[20px] text-gray-900 bg-transparent font-inter focus:outline-none hover:bg-gray-200"
        >
            {props?.buttonText}
        </button>
    )
}

export default SecondaryBtn
