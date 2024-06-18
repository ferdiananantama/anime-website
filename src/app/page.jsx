import AnimeList from '../components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '@/libs/api-libs'

export default async function Page() {

  const topAnime = await getAnimeResponse("top/anime", "limit=24") 
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recomendedAnime = reproduce(recomendedAnime, 6)

  return (
    <>
    {/* Top Anime */}
      <section>
        <Header title="Rekomendasi Anime"/>
        <AnimeList api={recomendedAnime} />

        <Header title="Anime Terpopular" linkTitle="lihat semua" linkhref="/popular" />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}
