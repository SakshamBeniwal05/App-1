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
            <style>
                {`
        .loader {
          width: 65px;
          aspect-ratio: 1;
          position: relative;
        }
        .loader:before,
        .loader:after {
          content: "";
          position: absolute;
          border-radius: 50px;
          box-shadow: 0 0 0 3px inset #fff;
          animation: l5 2.5s infinite;
        }
        .loader:after {
          animation-delay: -1.25s;
          border-radius: 0;
        }
        @keyframes l5 {
          0% { inset: 0 35px 35px 0; }
          12.5% { inset: 0 35px 0 0; }
          25% { inset: 35px 35px 0 0; }
          37.5% { inset: 35px 0 0 0; }
          50% { inset: 35px 0 0 35px; }
          62.5% { inset: 0 0 0 35px; }
          75% { inset: 0 0 35px 35px; }
          87.5% { inset: 0 0 35px 0; }
          100% { inset: 0 35px 35px 0; }
        }
      `}
            </style>
            <div className="loader"></div>
        </div>
    ) : (
        <>{children}</>
    );
}

export default Protection;