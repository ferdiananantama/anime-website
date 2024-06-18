"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Commentinput({anime_mal_id, user_email, username, anime_title}) {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const route = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handleButton = async(event) => {
        event.preventDefault()
        
        const data = {anime_mal_id, user_email, comment, username, anime_title}

        const res = await fetch("/api/v1/comment", {
            method : "POST",
            body : JSON.stringify(data)
        })

        const updateComment = await res.json()
        if (updateComment.status == 200) {
            setIsCreated(true)
            setComment("")
            route.refresh()
        }
        return
    }

    return(
        <>  
            <div className="flex flex-col gap-2">
                {
                    isCreated ? <p className="text-sm text-accent italic">komen berhasil ditambahkan!</p> : null
                }
                <textarea onChange={handleInput} value={comment} className="w-full h-36 p-2"></textarea>
                <button onClick={handleButton} className="px-4 py-1 w-28 rounded-sm bg-accent">Simpan</button>
            </div>
        </>
    )
}