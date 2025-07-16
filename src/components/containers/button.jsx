import React from "react";

const Button = ({ children="Log In", type = "button", className = "", ...props }) => {
    return (
        <button type={type} {...props} className={`border-2 font-bold px-4 py-2 rounded-full hover:bg-white hover:text-black active:scale-90 transition ${className}`}>{children}</button>
    )
}

export default Button;