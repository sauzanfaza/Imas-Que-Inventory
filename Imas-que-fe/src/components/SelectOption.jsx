import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

export default function SelectOption({deleteCardItem, id, startEdit}) {
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const handleSelectOpen = () => setIsSelectOpen(!isSelectOpen)

    return(
        <>
        <div className="relative inline-block">
            <button
                onClick={handleSelectOpen}
            >
            <SlOptionsVertical />
            </button>

            {/* dropdown optionnya */}
            {isSelectOpen && (
            <div className="absolute right-0 mt-2 w-15 text-xl bg-white border rounded-lg shadow-md">
                <button className="flex justify-center items-center w-full px-4 py-2 hover:text-green-600"
                >
                    <TiEdit onClick={() => startEdit(id)}/>
                </button>
                <button className="flex justify-center items-center w-full px-4 py-2 hover:text-red-700"
                    onClick={() => deleteCardItem(id)}>
                    <MdDelete />
                </button>
            </div>
            )}
        </div>
        </>
    )
}