import React, { useState, useEffect } from 'react'
import document_services from '../services/appp.config'
import PostCard from '../components/containers/postcard'
const Home = () => {

    const [posts, setposts] = useState([])
    useEffect(() => {
        document_services.gets([]).then((posts) => {
            if (posts) {
                setposts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='flex flex-wrap space-5 bg-[#1e1e1e] text-5xl text-white justify-center items-center h-screen'>
                <h1 className='text-2xl font-bold'>No post Read Posts</h1>
            </div>
        )
    }

    return (
        <div className='flex flex-wrap space-5 bg-[#1e1e1e] text-5xl text-white justify-center items-center h-screen'>
            {/* {posts.map((post) => {
                <PostCard key={post.id} post={post} />
            })} */}
            Homepage
        </div>
    )
}

export default Home