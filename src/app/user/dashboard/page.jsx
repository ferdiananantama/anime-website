import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

export default async function Page() {
    const user = await authUserSession()

    return(
        <>
            <div className="text-primary px-4 pt-3 flex flex-col justify-center items-center">
                <h3>Dashboard</h3>
                <h5>Welcome, {user.name}</h5>
                <div className="w-52 mt-2">
                    <Image src={user.image} alt="..." width={250} height={250} /> 
                </div>
                <div className="text-dark flex gap-2 mt-2">
                    <Link href={'/user/dashboard/collection'} className="px-6 py-1 bg-accent">My Collection</Link>
                    <Link href={'/user/dashboard/comment'} className="px-6 py-1 rounded-sm bg-accent">My Comment</Link>
                </div>
            </div>
        </>
    )
}