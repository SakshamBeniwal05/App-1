import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protection = ({ children, authentication = true }) => {

    const navigate = useNavigate();
    const auth_status = useSelector((state) => state.slice1.status);
    const [Loader, setLoader] = useState(true)


    useEffect(() => {

        if (authentication && auth_status != authentication) {
            navigate(`/login`)
        }
        else if (!authentication && auth_status != authentication) {
            navigate(`/`)
        }
        setLoader(false)

    }, [navigate, auth_status, authentication])



    return Loader ?
        (<div className="flex justify-center items-center h-screen">
            <div className="relative w-[65px] aspect-square">
                <div className="absolute rounded-full box-border shadow-inner border-[3px] border-white animate-l5"></div>
                <div className="absolute box-border shadow-inner border-[3px] border-white animate-l5 rounded-none -delay-[1.25s]"></div>
            </div>
        </div>) :
        (<>{children}</>);
}

export default Protection;