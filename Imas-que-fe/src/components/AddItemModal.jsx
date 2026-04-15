export default function AddItemModal({ isModalOpen, onClose, formData, setFormData, addCardItem, saveEdit, isEdit}) {
    
    //Kalau gak open, jangan render apa-apa
    if (!isModalOpen) return null;

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev, //timpa data lama
            [name]: value //cth: name:price value: 3000 --> price: 3000
        }))
    }

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            image: e.target.files[0]
        }))
    }

    const resetForm = () => {
        setFormData({
            id: "",
            productName: "",
            price: "",
            stock: "",
            sold: "",
            image: null
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(formData)
    // }
// console.log(addCardItem)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            
            {/* Card modal */}
            <div className="bg-white p-6 lg:p-12 rounded-lg w-70 md:w-80 lg:w-120 lg:h-100 relative">
                <h2 className="text-lg font-semibold mb-4">Add Item</h2>

                <div className="">
                        <input type="text"
                        name="productName" 
                        placeholder="Product Name" 
                        className="border border-slate-600 rounded-lg w-full py-1 px-2 mb-2" 
                        value={formData.productName}
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
                        value={formData.sold}
                        onChange={handleChange}/>

                        <input type="file" 
                        // placeholder="image"
                        className="border border-slate-600 rounded-lg w-full py-1 px-2 mb-2" 
                        onChange={handleFileChange}/>
                </div>

                <div className="flex justify-between">
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded"
                >
                    Close
                </button>
                <button
                    onClick={() => {
                        if(isEdit) {
                            saveEdit()
                        } else {
                            addCardItem()
                        }
                        resetForm()
                    }}
                    className="mt-4 bg-green-600 hover:bg-green-700 cursor-pointer text-white px-4 py-2 rounded">
                    {isEdit ? "Save" : "Add"}
                    
                </button>

                </div>
            </div>

        </div>
    );
}
