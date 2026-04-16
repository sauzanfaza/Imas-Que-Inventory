import SelectOption from "./SelectOption"

export default function ProductCard({cardItem, deleteCardItem, id, startEdit, saveEdit}) {
    return(
        <>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 py-2">
        {cardItem.map((item) => (
        <div className="bg-slate-50 border border-slate-300 h-60 md:h-80 lg:h-90 xl:h-100 rounded-lg"
        key={item.id}>
            <div className="h-30 md:h-40 lg:h-50 xl:h-60 m-3 rounded-lg bg-center">
                {item.image && (
                    <img 
                    src={URL.createObjectURL(item.image)}
                    alt={item.productName}
                    className="w-full h-full object-cover"
                    />
                )}
            </div>
            <h1 className="px-4 font-medium text-[14px] md:text-xl xl:text-2xl">{item.productName}</h1>
            <p className="px-4  py-1 text-[12px] md:text-[16px] xl:text-xl">Rp {item.price}</p>
            
            {/* Bagian bawah */}
        <div className="flex justify-between items-center px-4 mt-2 md:mt-6 text-[10px] md:text-[14px] xl:text-lg"> 
            <div className="flex gap-4">
                <p>Stock: {item.stock}</p>
                <p>Sold: {item.sold}</p>
            </div>

            <div className="text-md cursor-pointer">
            <SelectOption 
            deleteCardItem={deleteCardItem}
            startEdit={startEdit}
            saveEdit={saveEdit}
            id={item.id}
            />
            </div>
        </div>
        </div>
        ))}
        </div>
        </>
    )
}