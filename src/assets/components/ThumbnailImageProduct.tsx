interface ThumbnailImageProductProps {
  image : string,
  isSelected : boolean,
  onClick : () => void,
}

export const ThumbnailImageProduct = ({image, isSelected , onClick}: ThumbnailImageProductProps) => {

  return (

    <button onClick={onClick} className={`rounded-[15px] cursor-pointer w-25 max-[1600px]:w-20 border-1 ${isSelected ? "border-2 contrast-150 h-25 max-[1600px]:h-20 border-amber-600 scale-130 max-[1600px]:scale-116  ": "border-transparent"} transition-all duration-300`} >
      <img src={image} alt=" Thumbnail product" className={`rounded-[12px] ${isSelected ? "  opacity-25   ": "border-transparent hover:opacity-55 "} transition-all duration-300`}/>
    </button>

  )

}