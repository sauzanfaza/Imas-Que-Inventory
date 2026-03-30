import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import ProductCard from "./components/ProductCard"
import AddItemModal from "./components/AddItemModal"
import { useState } from "react"

export default function App() {
    const [cardItem, setCardItem] = useState([])
    const [formData, setFormData] = useState({
        id: "",
        productName: "",
        price: "",
        stock: "",
        sold: "",
        image: null
    })

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)

    // add card item
    const addCardItem = () => {
        const newId = cardItem.length > 0 ? Math.max(...cardItem.map(card => card.id)) + 1 : 1
        const newCard = {
            id:newId,
            productName: formData.productName,
            price: formData.price,
            stock: formData.stock,
            sold: formData.sold,
            image: formData.image
        }

        setCardItem([...cardItem, newCard])
        setIsModalOpen(false)
        setFormData({
            id: "",
        productName: "",
        price: "",
        stock: "",
        sold: "",
        image: null
        })
    }

    //delete card item
    const deleteCardItem = (id) => {
            const newCardAfterDelete = cardItem.filter((item) => item.id !== id)
            setCardItem(newCardAfterDelete)
        }
    
        //edit card item
        //start edit dengan open modal card dulu
        const startEdit = (id) => {
            const card = cardItem.find((item) => item.id === id)

            setIsEdit(true)
            setEditId(id)
            setFormData({
                productName: card.productName,
                price: card.price,
                stock: card.stock,
                sold: card.sold,
                image: card.image
            })
            setIsModalOpen(true)
        }

        //save edit
        const saveEdit = () => {
            const updated = cardItem.map((item) => item.id === editId ?
            { ...item,
                productName: formData.productName,
                price: formData.price,
                stock: formData.stock,
                sold: formData.sold,
                image: formData.image
            } : item
        )

        setCardItem(updated)
        setIsModalOpen(false)
        setEditId(null)
        setIsEdit(false)
        }

    return(
    <>
    <div className="bg-slate-200 min-h-screen p-2">
    <Navbar />

    <Filter isModalOpen={isModalOpen} 
    setIsModalOpen={setIsModalOpen}
    formData={formData} 
    setFormData={setFormData}
    addCardItem={addCardItem}/>
    
    <ProductCard cardItem={cardItem} 
    deleteCardItem={deleteCardItem}
    startEdit={startEdit}
    saveEdit={saveEdit}/>
    </div>
    </>
    )
}