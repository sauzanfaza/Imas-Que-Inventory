import { FaPlus } from "react-icons/fa6";

export default function ButtonAdd() {
    return(
        <>
        <div className="flex items-center justify-between border border-slate-900 py-1 px-4 rounded-xl text-[12px] gap-2 hover:bg-slate-400">
                <button className="">Add Item</button>
                <FaPlus />
        </div>
        </>
    )
}