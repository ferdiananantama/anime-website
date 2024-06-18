"use client"
import { useRouter } from "next/navigation";

export default function page(){
    const router = useRouter()
    return(
        <>
            <div className="flex flex-col h-screen justify-center items-center gap-4">
                <div className="text-3xl text-accent">Not Found Page</div>
                <button onClick={()=> router.back()} className="text-primary underline">Kembali</button>
            </div>
        </>
    )
}