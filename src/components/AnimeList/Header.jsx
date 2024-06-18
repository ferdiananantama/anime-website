"use client"
import { useRouter } from "next/navigation"


export default function page({title}) {

    const router = useRouter()
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return(
        <>
            <div className="flex justify-between mt-2">
                <h3 className="text-primary">{title}</h3>
                <button onClick={handleBack} className="text-primary">Back</button>
            </div>
        </>
    )
}