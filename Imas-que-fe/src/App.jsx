import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import ProductCard from "./components/ProductCard"

export default function App() {
    return(
    <>
    <div className="bg-slate-200 min-h-screen p-2">
    <Navbar />
    <Filter />
    <ProductCard />
    </div>
    </>
    )
}