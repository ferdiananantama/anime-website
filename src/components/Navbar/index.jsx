import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionbutton from "./UserActionButton";

export default function Navbar() {
    return(
        <header className="bg-accent">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href={'/'} className="items-center flex cursor-pointer font-semibold text-white">ANTDEV.ID</Link>
                <InputSearch />
                <UserActionbutton />
            </div>
        </header>
    )
}