import React from "react";
import document_services from "../../services/appp.config";
import { Link } from "react-router-dom";

const PostCard = ({$id,title ,featured_image}) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className="group relative h-[250px] w-[200px] bg-[#2e2e2e] rounded-xl overflow-hidden break-words shadow-2xl hover:scale-[110%] duration-200 ease-in-out">
                <div>
                    <img src={document_services.getpreview(featured_image)} className="scale-[300%] opacity-80 group-hover:opacity-100 duration-100 ease-in-out" alt={title}/>
                </div>
                <div className="absolute left-0 bottom-0 w-full h-[100px] bg-gradient-to-t from-[#2e2e2e] to-[transparent] font-semibold flex items-end">
                    <span className="text-base p-2 group-hover:underline">
                        {title}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default PostCard