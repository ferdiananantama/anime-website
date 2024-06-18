"use client"

import { useState } from "react"

export default function CollectionButton({anime_mal_id, user_email, anime_image, anime_title}){

    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async(event) => {
        event.preventDefault()

        const data = {anime_mal_id, user_email, anime_image, anime_title}

        const response = await fetch("/api/v1/collection", {
            method : "POST",
            body : JSON.stringify(data)
        })
        const collection = await response.json()
        if(collection.status == 200){
            setIsCreated(true)
        }
    }

    return(
        <>
            {
                isCreated ? <p className="text-sm text-accent italic mt-2">Berhasil ditambahkan ke koleksi!</p> : <button onClick={handleCollection} className="px-4 rounded-sm py-1  bg-accent mt-2 hover:bg-opacity-80">Add to Collection</button>
            }
        </>
    )
}