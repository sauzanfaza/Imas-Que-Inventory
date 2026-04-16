import ButtonAdd from "./ButtonAdd";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

export default function Filter({isModalOpen, setIsModalOpen, formData, setFormData, addCardItem, saveEdit, isEdit, setSelectedFilter, }) {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className="w-full flex p-4 md:p-6 bg-slate-50 my-2 rounded-xl justify-between">
            <div className="relative flex items-center font-semibold justify-between gap-2">
                    <p className="text-[12px] md:text-xl lg:text-2xl">Filter</p>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <IoFilter className="md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer border-none"/>
                    </button>  

                    {isOpen && (
                        <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-2 w-40">
                            <p 
                            onClick={() => { setSelectedFilter("all"); setIsOpen(false); }}
                            className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                            >
                                Semua
                            </p>
                            <p 
                            onClick={() => { setSelectedFilter("tersedia"); setIsOpen(false); }}
                            className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                            >
                            Aman
                            </p>
                            <p 
                            onClick={() => { setSelectedFilter("low"); setIsOpen(false); }}
                            className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                            >
                            Hampir Habis
                            </p>
                            <p 
                            onClick={() => { setSelectedFilter("habis"); setIsOpen(false); }}
                            className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                            >
                            Habis
                            </p>
                        </div>
                    )}                
            </div>
            <ButtonAdd isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            formData={formData} setFormData={setFormData}
            addCardItem={addCardItem}
            isEdit={isEdit}
            saveEdit={saveEdit}/>
        </div>
        </>
    )
}