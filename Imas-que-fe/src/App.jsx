import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import ProductCard from "./components/ProductCard"
import { useState, useMemo, useEffect } from "react"

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
    const [selectedFilter, setSelectedFilter] = useState("all")

    useEffect(() => {
        fetch("http://localhost:5000/api/items")
        .then((res) => res.json())
        .then((data) => setCardItem(data))
    }, [])

    // add card item fe, just in case u need to see this for next project
    // const addCardItem = () => {
    //     const newId = cardItem.length > 0 ? Math.max(...cardItem.map(card => card.id)) + 1 : 1
    //     const newCard = {
    //         id:newId,
    //         productName: formData.productName,
    //         price: formData.price,
    //         stock: formData.stock,
    //         sold: formData.sold,
    //         image: formData.image
    //     }

    //     setCardItem([...cardItem, newCard])
    //     setIsModalOpen(false)
    //     setFormData({
    //     id: "",
    //     productName: "",
    //     price: "",
    //     stock: "",
    //     sold: "",
    //     image: null
    //     })
    // }

    //add card item ver with backend
    const addCardItem = async () => {
        const res = await fetch("http://localhost:5000/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                //tdk ada id karena mongodb sudah ada _id dari sananya
                productName: formData.productName,
                price: Number(formData.price),
                stock: Number(formData.stock),
                sold: Number(formData.sold),
                image: formData.image
            })
        })

        const newItem = await res.json()
        setCardItem((prev) => [...prev, newItem])
        setIsModalOpen(false)
        setFormData({
            productName: "",
            price: "",
            stock: "",
            sold: "",
            image: null
        })
    }

    //delete card item fe
    // const deleteCardItem = (id) => {
    //         const newCardAfterDelete = cardItem.filter((item) => item.id !== id)
    //         setCardItem(newCardAfterDelete)
    //     }

    //delete card item ver udh pake be
    const deleteCardItem = async (id) => {
        await fetch(`http://localhost:5000/api/items/${id}`, {
            method: "DELETE"
        })

        setCardItem((prev) => prev.filter((item) => item._id !== id)) //yang id nya gak di delete pertahankan
    }
    
        //edit card item fe just in case u need that
        //start edit dengan open modal card dulu
        const startEdit = (id) => {
            const card = cardItem.find((item) => item._id === id)

            setIsEdit(true)
            setEditId(id)
            setFormData({
                productName: card.productName,
                price: Number(card.price),
                stock: Number(card.stock),
                sold: Number(card.sold),
                image: card.image
            })
            setIsModalOpen(true)
        }

        //save edit
        const saveEdit = async () => {
            await fetch(`http://localhost:5000/api/items/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productName: formData.productName,
                    price: Number(formData.price),
                    stock: Number(formData.stock),
                    sold: Number(formData.sold),
                    image: formData.image
                })
            })

            setCardItem((prev) => 
                prev.map((item) => item._id === editId ? { ...item, ...formData} : item)
            )

            setIsModalOpen(false)
            setEditId(null)
            setIsEdit(false)
        }

        //save edit fe
        // const saveEdit = () => {
        //     const updated = cardItem.map((item) => item.id === editId ?
        //     { ...item,
        //         productName: formData.productName,
        //         price: formData.price,
        //         stock: formData.stock,
        //         sold: formData.sold,
        //         image: formData.image
        //     } : item
        // )

        // setCardItem(updated)
        // setIsModalOpen(false)
        // setEditId(null)
        // setIsEdit(false)
        // }

        const filteredItems = useMemo(() => {
            if(selectedFilter === "tersedia") {
                return cardItem.filter((item) => (item.stock - item.sold) > 50)
            }
            if(selectedFilter === "low") {
                return cardItem.filter((item) => {
                    const sisa = item.stock - item.sold
                    return sisa > 0 && sisa < 50
                })
            }
            if(selectedFilter === "habis") {
                return cardItem.filter((item) => (item.stock - item.sold) == 0)
            }

            return cardItem
        }, [selectedFilter, cardItem])

    return(
    <>
    <div className="bg-slate-200 min-h-screen p-2">
    <Navbar />

    <Filter isModalOpen={isModalOpen} 
    setIsModalOpen={setIsModalOpen}
    formData={formData} 
    setFormData={setFormData}
    addCardItem={addCardItem}
    saveEdit={saveEdit}
    isEdit={isEdit}
    selectedFilter={selectedFilter}
    setSelectedFilter={setSelectedFilter}/>
    
    
    <ProductCard cardItem={filteredItems} 
    deleteCardItem={deleteCardItem}
    startEdit={startEdit}
    saveEdit={saveEdit}/>
    </div>
    </>
    )
}