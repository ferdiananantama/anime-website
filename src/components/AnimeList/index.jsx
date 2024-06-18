import Image from "next/image";
import Link from "next/link";

export default function AnimeList({api}){
    return(
        <>
            <div className='md:px-4 px-3 grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 md:gap-6'>
                {api.data?.map( (anime, index) =>{
                    return(
                        <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer" key={index}>
                            <Image src={anime.images.webp.image_url} alt="...." width={300} height={600}></Image>
                            <h2 className="font-semibold md:text-xl text-primary text-base text-center py-2 md:py-4">{anime.title}</h2>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}