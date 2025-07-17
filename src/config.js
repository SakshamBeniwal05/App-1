const config = {
    url : String(import.meta.env.VITE_APPWRITE_URL) ,
    id : String(import.meta.env.VITE_APPWRITE_ID),
    db_id : String(import.meta.env.VITE_APPWRITE__ID),
    c_id : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    s_id : String(import.meta.env.VITE_APPWRITE_STORAGE_ID)
}

export default config;