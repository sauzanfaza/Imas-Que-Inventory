export default function ProductCard({cardItem}) {
    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardItem.map((item) => (
        <div className="bg-slate-50 border border-slate-300 h-60 rounded-lg"
        key={item.id}>
            <div className="h-30 m-3 rounded-lg bg-center">
                {item.image && (
                    <img 
                    src={URL.createObjectURL(item.image)}
                    alt={item.productName}
                    />
                )}
            </div>
            <h1 className="px-4 font-medium text-[14px]">{item.productName}</h1>
            <p className="px-4  py-1 text-[12px]">Rp {item.price}</p>
            
            {/* Bagian bawah */}
        <div className="flex justify-between items-center px-4 mt-2 text-[10px]"> 
            <div className="flex gap-4">
                <p>Stock: {item.stock}</p>
                <p>Sold: {item.sold}</p>
            </div>

            <div className="text-lg">
            :
            </div>
        </div>
        </div>
        ))}
        </div>
        </>
    )
}