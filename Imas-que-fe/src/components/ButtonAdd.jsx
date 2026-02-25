import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import AddItemModal from "./AddItemModal";

export default function ButtonAdd() {
    const [isModalOpen, setIsModalOPen] = useState(false)

    const handleOpenModal = () => setIsModalOPen(!isModalOpen)

    return(
        <>
        <div className="flex items-center justify-between border border-slate-900 py-1 px-4 rounded-xl text-[12px] gap-2 hover:bg-slate-400">
                <button onClick={handleOpenModal}>Add Item</button>
                <FaPlus />
        </div>
        <AddItemModal 
            isModalOpen={isModalOpen} 
            onClose={() => setIsModalOPen(false)}
        />
        </>
    )
}