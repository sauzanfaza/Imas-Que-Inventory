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
    <ProductCard cardItem={cardItem}/>
    </div>
    </>
    )
}