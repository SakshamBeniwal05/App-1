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
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>
            Logout
        </button>
    )
}
export default Logout_Btn;