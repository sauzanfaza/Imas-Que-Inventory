import { FaPlus } from "react-icons/fa6";
import AddItemModal from "./AddItemModal";

export default function ButtonAdd({isModalOpen, setIsModalOpen, formData, setFormData, addCardItem, saveEdit, isEdit}) {
    const handleOpenModal = () => setIsModalOpen(!isModalOpen)

    return(
        <>
        <div className="flex items-center justify-between border border-slate-900 py-1 lg:py-2 px-4 rounded-xl text-[12px] md:text-lg lg:text-xl xl:text-xl gap-2 hover:bg-slate-400 cursor-pointer">
                <button onClick={handleOpenModal} className="lg:py-1 cursor-pointer">Add Item</button>
                <FaPlus className="cursor-pointer"/>
        </div>
        <AddItemModal 
            formData={formData}
            setFormData={setFormData}
            isModalOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            addCardItem={addCardItem}
            saveEdit={saveEdit}
            isEdit={isEdit}
        />
        </>
    )
}