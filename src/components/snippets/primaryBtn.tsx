interface buttonProps {
    buttonText: String
    setPopup:Function;
}
const PrimaryBtn = (props: buttonProps) => {
    return (
        <button
            type="button"
            onClick={()=>{props?.setPopup(false)}}
            className="rounded-md bg-orange-500 px-3  py-2 text-sm font-semibold text-white font-inter focus:outline-none"
        >
            {props?.buttonText}
        </button>
    )
}

export default PrimaryBtn
