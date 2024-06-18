import Header from "@/components/AnimeList/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"


export default async function page() {
    const user = await authUserSession()
    const collection = await prisma.Collection.findMany({
        where : {user_email : user.email}
    })
    console.log(collection);
    return (
        <section className="mx-4">
            <Header title={"My Collection"}/>
            <div className="mt-4 grid gap-4 lg:grid-cols-5">
                {collection.map((koleksi, index) => {
                    return(
                        <Link key={index} href={`/anime/${koleksi.anime_mal_id}`} className="relative border-2 border-accent">
                            <Image src={koleksi.anime_image} alt={koleksi.anime_image} height={350} width={350} className="w-full" />
                            <div className="bg-accent absolute flex items-center justify-center bottom-0 w-full h-16">
                                <h5>{koleksi.anime_title}</h5>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}