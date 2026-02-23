import { LuDonut } from "react-icons/lu";

export default function Navbar() {
    return(
        <div className="w-full flex gap-2 md:gap-4 p-4 md:p-6 bg-slate-50 rounded-2xl">
            <LuDonut className="text-lg md:text-3xl"/>
            <h1 className="text-sm md:text-2xl font-medium">Imas Que</h1>
        </div>
    )
}