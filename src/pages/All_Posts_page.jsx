import React, { useState, useEffect } from 'react'
import document_services from '../services/appp.config'
import PostCard from '../components/containers/postcard'

function All_Posts_page() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    document_services.gets([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8 bg-[#1e1e1e] h-screen p-10'>
            <div className='flex flex-wrap text-white'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
    </div>
    )
}

export default All_Posts_page