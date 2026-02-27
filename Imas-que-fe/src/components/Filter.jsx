import ButtonAdd from "./ButtonAdd";
import { IoFilter } from "react-icons/io5";

export default function Filter({isModalOpen, setIsModalOpen, formData, setFormData, addCardItem}) {

    return(
        <>
        <div className="w-full flex p-4 md:p-6 bg-slate-50 my-2 rounded-xl justify-between">
            <div className="flex items-center font-semibold justify-between gap-2">
                    <p className="text-[12px]">Filter</p>
                    <button>
                        <IoFilter />
                    </button>                  
            </div>
            <ButtonAdd isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            formData={formData} setFormData={setFormData}
            addCardItem={addCardItem}/>
        </div>
        </>
    )
}