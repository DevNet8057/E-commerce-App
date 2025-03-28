
import { InfromationButton } from "./InfromationsButtons";

interface ProductInformationProps {
  onAddArticle : () => void
  onDecrease : () => void 
  onIncrease : () => void
  quantity : number
}

function ProductInformation({onAddArticle , onDecrease, onIncrease, quantity}:ProductInformationProps) {
  
  return (
    <div className=" information px-15 h-110 flex flex-col  justify-center">
      <div className="text-gray-500 font-extrabold text-xs pb-4">
        SNEAKER COMPANY
      </div>
      <div className="gap-8 flex flex-col">
        <div className="text-5xl font-extrabold">
          Fall Limited Edition Sneakers
        </div>
        <div className="gap-2 flex flex-col">
          <p className="text-gray-500  text-lg pb-5">
            These low-profile sneakers are your perfect casual wear companion
            featuring a durable rubber outer sole, they'Il withstand everything
            the weather can offer.
          </p>
          <div className="gap-3 flex flex-col font-bold">
            <span className="text-3xl gap-3 flex items-end">
              {" "}
              $125.00{" "}
              <span className="text-[12px] bg-black text-white rounded px-2  justify-end items-center flex h-5">
                50%
              </span>
            </span>
            <span className="line-through text-gray-500  text-base">
              $250.00
            </span>
          </div>
        </div>
          <InfromationButton
            onDecrease={ onDecrease }
            onIncrease={onIncrease }
            quantity={quantity}
            onAddArticle={ onAddArticle}
          />
      </div>
    </div>
  );
}

export default ProductInformation;
