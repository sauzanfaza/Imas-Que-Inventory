import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import AddItemModal from "./AddItemModal";

export default function ButtonAdd({isModalOpen, setIsModalOpen, formData, setFormData, addCardItem}) {
    const handleOpenModal = () => setIsModalOpen(!isModalOpen)

    return(
        <>
        <div className="flex items-center justify-between border border-slate-900 py-1 px-4 rounded-xl text-[12px] gap-2 hover:bg-slate-400">
                <button onClick={handleOpenModal}>Add Item</button>
                <FaPlus />
        </div>
        <AddItemModal 
            formData={formData}
            setFormData={setFormData}
            isModalOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            addCardItem={addCardItem}
        />
        </>
    )
}