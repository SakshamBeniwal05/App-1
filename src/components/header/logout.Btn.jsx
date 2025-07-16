import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../storage/slices/status.js"
import authService from '../../services/auth'

const Logout_Btn = () => {
    const dispatch = useDispatch();
    function logoutHandler() {
        authService.logout()
            .then(() => dispatch(logout()))
            .catch((error) => console.log(`logout issue`))
    }
    return (
        <button className="cursor-pointer px-4 py-2 border duration-200 rounded-full hover:text-black hover:bg-white" onClick={logoutHandler}>
            Logout
        </button>
    )
}
export default Logout_Btn;