import { useRef } from "react";


export const Test = () => {
    const InputRef = useRef(null);

    const handleFocus = () => {
        InputRef.current.focus();
    }
    return(
        <>
        <div className="min-h-96">
            <input className="" ref={InputRef} type="text" placeholder="focus here" />
            <button onClick={handleFocus}>Click here to focus</button>
        </div>
            
        </>
    )
}