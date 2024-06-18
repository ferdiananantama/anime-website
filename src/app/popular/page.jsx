'use client'
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

export default function Page(){

    const [page, setPage] =useState(1)
    const [topAnime, setTopAnime] = useState([ ])

    const fetchData = async() => {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        // const data = await res.json()

        const data = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(data)
    }

    useEffect( () => {
        fetchData()
    }, [page])

    return(
        <>
            <HeaderMenu title={`Anime Terpopular #${page}`} />
            <AnimeList api={topAnime} />
            <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page}/>
        </>
    )
}