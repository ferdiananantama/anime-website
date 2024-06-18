import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

export default async function UserActionbutton() {
    const user = await authUserSession()
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin" 
    const actionLabel = user ? "Sign Out" : "Sign In"

    return(
        <div className="flex gap-4 items-center"> 
            <Link href={'user/dashboard/'}>Dashboard</Link>
            <Link href={actionURL} className="px-6 py-2 rounded-md bg-dark text-primary hover:bg-secondary transition-all">{actionLabel}</Link>
        </div>
    )
}