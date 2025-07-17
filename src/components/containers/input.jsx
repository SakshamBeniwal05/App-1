import React from "react";

const Input_Slab = React.forwardRef(({ children, label, type = "text", className = "", ...props }, ref) => {
    return (
        <div className="relative w-fit group">
            <input type={type} ref={ref} {...props} id={label} required
                className={`peer bg-transparent border-2 border-white h-[40px] text-lg px-[10px] rounded-md w-full placeholder-transparent ${className}`} />
            {label && (<label htmlFor={label} className="rounded-2xl absolute left-[2px] top-[5px] text-lg text-white px-2 bg-[#1e1e1e] transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-lg peer-focus:-translate-y-[20px] peer-focus:text-sm peer-valid:-translate-y-[20px] peer-valid:text-sm">{label}</label>)}
        </div>
    )
})

export default Input_Slab;