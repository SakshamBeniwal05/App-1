import React, { useState } from "react";

const Select_slab = ({ options, className, ...props }, ref) => {
    const [selected, setselected] = useState('Select')
    const [IsOpen, setIsOpen] = useState(false)
    function selection(clicked) {
        setselected(clicked)
        setIsOpen(false)
    }
    return (
        <div>
            <button ref={ref} className={`border-2 font-bold px-4 py-2 rounded-full hover:bg-white hover:text-black active:scale-90 transition ${className}`} onClick={() => setIsOpen(!IsOpen)}>{selected}</button>
            {IsOpen && (
                <ul>
                    {options?.map((option) => {
                        return (
                            <li className={`border-2 font-bold rounded-full active:scale-90 transition px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer ${className}`} key={option} value={option} onClick={selection(option)}>{option}</li>
                        )
                    })}
                </ul>
            )}

        </div>
    )
}

export default React.forwardRef(Select_slab)