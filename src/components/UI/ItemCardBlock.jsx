function ItemCard({ name, sku, price, type }) {
  return (
    <div className="p-20 h-[35vh] text-black border-4 border-slate-900 border-solid rounded-lg shadow-md shadow-gray-600 flex flex-col justify-center items-center gap-2.5">
      <h3 className="w-40 text-center">SKU:&nbsp;{sku}</h3>
      <h3 className="w-40 text-center">Name:&nbsp;{name}</h3>
      <h3 className="w-40 text-center">Price:&nbsp;{price}</h3>
      <h3 className="w-40 text-center">Type:&nbsp;{type}</h3>
    </div>
  );
}

export default ItemCard;
