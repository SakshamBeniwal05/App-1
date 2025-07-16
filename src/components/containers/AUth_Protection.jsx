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



    return Loader ? (
        <div className="bg-[#1e1e1e] flex justify-center items-center h-screen">
            <div className='loader text-2xl font-bold'>Loading...</div>
        </div>
    ) : (
        <>{children}</>
    );
}

export default Protection;