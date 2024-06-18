'use client'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function InputSearch(){

    const refInput = useRef()
    const router = useRouter()
    
    const handleInput = (event) => {
        const keyword = refInput.current.value

        if (!keyword || keyword.trim() == "") return

        if (event.key === 'Enter' || event.type === "click") {
            event.preventDefault();
            router.push(`/search/${keyword}`)
        }
    }


    return(
        <div className="relative">
            <input 
                className="py-2 px-3 rounded-sm w-full"
                placeholder="cari anime..."
                ref={refInput}
                onKeyDown={handleInput}
            />
            <button onClick={handleInput} className="absolute top-2.5 end-2">
                <MagnifyingGlass size={20} />
            </button>
        </div>
    )
}