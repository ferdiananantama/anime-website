import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"


export default async function Page({params}) {
    
  const key = params.keyword
  const decodeKey = decodeURI(key)

  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKey}`)
  // const searchAnime = await res.json()
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKey}`)


  return (
    <>
    {/* Character Popular */}
      <section>
        <Header title={`Ini adalah hasil pencarian ${decodeKey}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}
