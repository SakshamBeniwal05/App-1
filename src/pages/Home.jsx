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
            <div className='flex flex-wrap text-white h-screen justify-center items-center'>
                <h1 className='text-2xl font-bold'>Login To Read Posts</h1>
            </div>
        )
    }

    return (
        <div className='flex flex-wrap space-5'>
            {posts.map((post) => {
                <PostCard key={post.id} post={post} />
            })}
        </div>
    )
}

export default Home