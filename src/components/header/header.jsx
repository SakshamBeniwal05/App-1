import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../containers/container'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const c_status = useSelector((state) => state.slice1.status)
    const navigate = useNavigate();
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !c_status,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !c_status,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: c_status,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: c_status,
        },
    ]
    return (
        <>
            <Container>
                <div className="text-white font-semibold">

                    <div className="flex h-[100px] bg-[#2e2e2e] justify-around items-center w-full">
                        <div className="w-1/3">
                            <Link to='/'>
                                <div className="w-[50px] h-[50px] bg-blue-500"></div>
                            </Link>
                        </div>
                        <div className="w-1/3">
                            <ul className="w-full flex flex-row-reverse justify-between items-center h-[50px]">
                                {navItems.map((item) =>
                                    item.active ? (
                                        <li key={item.name} onClick={()=>navigate(item.slug)}  className="cursor-pointer px-4 py-2 border rounded-full hover:text-black hover:bg-white">{item.name}</li>
                                    ) : null
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Header