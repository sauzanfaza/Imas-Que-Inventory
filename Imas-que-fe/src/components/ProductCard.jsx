export default function ProductCard() {
    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-slate-50 border border-slate-300 h-60 rounded-lg">
            <div className="h-30 m-3 rounded-lg bg-[url(./donat.jpg)] bg-center">
            </div>
            <h1 className="px-4 font-medium text-[14px]">Donat Kampung</h1>
            <p className="px-4  py-1 text-[12px]">Rp 2000</p>
            
            {/* Bagian bawah */}
        <div className="flex justify-between items-center px-4 mt-2 text-[10px]"> 
            <div className="flex gap-4">
                <p>Stock: 1000</p>
                <p>Sold: 500</p>
            </div>

            <div className="text-lg">
            :
            </div>
        </div>
        </div>
        </div>
        </>
    )
}