import ButtonAdd from "./ButtonAdd";
import { IoFilter } from "react-icons/io5";

export default function Filter({isModalOpen, setIsModalOpen, formData, setFormData, addCardItem, saveEdit, isEdit}) {

    return(
        <>
        <div className="w-full flex p-4 md:p-6 bg-slate-50 my-2 rounded-xl justify-between">
            <div className="flex items-center font-semibold justify-between gap-2">
                    <p className="text-[12px] md:text-xl lg:text-2xl xl:text-4xl">Filter</p>
                    <button>
                        <IoFilter className="md:text-2xl lg:text-3xl xl:text-4xl"/>
                    </button>                  
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