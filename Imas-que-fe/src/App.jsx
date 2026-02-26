import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import ProductCard from "./components/ProductCard"
import AddItemModal from "./components/AddItemModal"
import { useState } from "react"

export default function App() {
    const [cardItem, setCardItem] = useState([])
    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        stock: "",
        sold: "",
        image: null
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
    <>
    <div className="bg-slate-200 min-h-screen p-2">
    <Navbar />
    <Filter isModalOpen={isModalOpen} 
    setIsModalOpen={setIsModalOpen}
    formData={formData} 
    setFormData={setFormData}/>
    <ProductCard />
    </div>
    </>
    )
}