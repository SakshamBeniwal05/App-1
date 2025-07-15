import React, { useState, useEffect } from 'react'
import Post_Form from '../components/containers/Post_Form'
import document_services from '../services/appp.config';
import { useNavigate, useParams } from 'react-router-dom';

const Edit_Post_page = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [posts, setposts] = useState([]);

    useEffect(() => {
        if (slug) {
            document_services.get(slug).then((post) => {
                if (post) {
                    setposts(post)
                }
            })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='flex h-screen justify-center items-center'>
            <Post_Form post={posts} />
        </div>
    ) : null;
}

export default Edit_Post_page