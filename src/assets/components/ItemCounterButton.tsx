
interface ItemCounterButtonProps{
  quantity : number,
  onDecrease : () => void ;
  onIncrease : () => void ;
}

export const ItemCounterButton = ({quantity , onDecrease , onIncrease}: ItemCounterButtonProps) => {
  
  return (
    
    <div className="w-38 max-[1600px]:w-28 h-10 bg-gray-100 text-amber-600 text-2xl rounded justify-between items-center flex px-5 font-extrabold">
      <button className="cursor-pointer hover:text-amber-500 hover:scale-[1.2] transition" onClick={onDecrease}>
        -
      </button> 
      <span className={`text-black text-base items-end transition-transform duration-200 $(isZoomed ? "sclale-210" : "sclale-100"}`} >
        {quantity}
      </span>
      <button className="cursor-pointer hover:text-amber-500 hover:scale-[1.2] transition" onClick={onIncrease}>
        +
      </button>
    </div>
          
  )

}