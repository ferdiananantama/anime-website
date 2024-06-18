import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Commentinput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

export default async function Page({params : {id}}) {
    
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const koleksi = await prisma.Collection.findFirst({
        where :{user_email : user?.email, anime_mal_id:id, anime_image : anime.data.images.webp.image_url, anime_title : anime.data.title }
    })
    console.log(koleksi);

    return(
        <>
        <div className="md:px-4 px-3 pt-4">
            <h3 className="text-2xl text-primary">{anime.data.title} - {anime.data.year}</h3>
            {
                !koleksi && user && <CollectionButton anime_mal_id={id} anime_title={anime.data.title} anime_image={anime.data.images.webp.image_url} user_email={user?.email} />
            }
            
            <div className="flex gap-2 pt-4 text-primary overflow-x-auto">
                <div className="w-36 flex flex-col border justify-center items-center rounded p-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col border justify-center items-center rounded p-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col border justify-center items-center rounded p-2">
                    <h3>ANGGOTA</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col border justify-center items-center rounded p-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="flex mt-4 mb-4 flex-wrap sm:flex-nowrap gap-2">
                <Image
                    width={250}
                    height={250}
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                />
                <p className="text-lg text-primary text-justify">{anime.data.synopsis}</p>
            </div>
            <CommentBox anime_mal_id={id} />
            {
                user && <Commentinput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title}/>
            }
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </div>
        </>
    )
}