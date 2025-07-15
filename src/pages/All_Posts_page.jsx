import React, { useState, useEffect } from 'react'
import document_services from '../services/appp.config'
import PostCard from '../components/containers/postcard'
const All_Posts_page = () => {

    const [posts, setposts] = useState([])
    useEffect(() => {
        document_services.gets([]).then((posts) => {
            if (posts) {
                setposts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='flex flex-wrap space-5'>
            {posts.map((post) => {
                <PostCard key={post.id} post={post} />
            })}
        </div>
    )
}

export default All_Posts_page