import { useState } from "react";

export default function AddItemModal({ isModalOpen, onClose }) {
    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        stock: "",
        sold: "",
        image: null
    })
    
    //Kalau gak open, jangan render apa-apa
    if (!isModalOpen) return null;

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            image: e.target.files[0]
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            
            {/* Card modal */}
            <div className="bg-white p-6 rounded-lg w-80 relative">
                <h2 className="text-lg font-semibold mb-4">Add Item</h2>

                <div className="">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text"
                        name="name" 
                        placeholder="Product name" 
                        className="border border-slate-600 rounded-lg w-full py-1 px-2 mb-2" 
                        value={formData.name}
                        onChange={handleChange}/>
                        
                        <input type="number" 
                        name="price" 
                        placeholder="Price" 
                        className="border border-slate-600 rounded-lg w-full py-1 px-2 mb-2" 
                        value={formData.price}
                        onChange={handleChange}/>

                        <input type="number"
                        name="stock" 
                        placeholder="Stock" 
                        className="border border-slate-600 rounded-lg w-full py-1 px-2 mb-2" 
                        value={formData.stock}
                        onChange={handleChange}/>

                        <input type="text" 
                        name="sold" 
                        placeholder="Sold" 
                        className="border border-slate-600 rounded-lg w-full py-1 px-2 mb-2" 
                        value={formData.sold}/>

                        <input type="file" 
                        // placeholder="image"
                        className="border border-slate-600 rounded-lg w-full py-1 px-2 mb-2" 
                        onChange={handleFileChange}/>
                    </form>
                </div>

                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                    Close
                </button>
            </div>

        </div>
    );
}