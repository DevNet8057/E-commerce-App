import image from "../images/image-product-1-thumbnail.jpg";
import iconImage from "../images/icon-delete.svg";
import { useEffect, useRef, useState, useCallback } from "react";

interface ButtonCartEcommerceProps {
  cartArticle :number,
  onAddArticle : () => void,
  articleNumber: number
  removeArticle : () => void
}

export const ButtonCartEcommerce = ({ cartArticle, articleNumber , removeArticle }: ButtonCartEcommerceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Fonction pour fermer le menu si on clique à l'extérieur
  const handleClickOutside = useCallback((event: MouseEvent) => {

    
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div className="cursor-pointer relative items-center text-gray-500">
      {/* Bouton de notification */}
      <button
        ref={buttonRef}
        className="hover:text-amber-500 hover:scale-[1.2]  transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
        <span
          className={`  ${
            cartArticle > 0
              ? "bg-amber-600 absolute top-[-8px] left-3 px-2 text-[8px] text-white rounded-xl py-[1px]"
              : "hidden"
          }`}
        >
          {cartArticle}
        </span>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div ref={menuRef} className="z-[1000] absolute w-85 top-[60px] left-[-140px] bg-white shadow-lg rounded-[10px]">
          <div className="p-3 py-3">
            <span className="font-bold text-black">Cart</span>
          </div>
          <hr className="opacity-10" />
          <div className="px-4 pb-6">
            <div className="my-5 flex justify-between items-center">
              {cartArticle > 0 ? (
                <div className="flex flex-col w-full gap-5">
                  <div className="flex justify-between items-center">
                    <img className="h-11 rounded" src={image} alt="image du produit" />
                    <span className="flex flex-col">
                      Fall Limited Edition Sneakers{" "}
                      <span>
                        $125.00 x <span>{articleNumber}</span>{" "}
                        <span className="text-black font-bold">${(125.00*articleNumber).toFixed(2)}</span>
                      </span>
                    </span>
                    <button onClick={removeArticle}>
                      <img className="h-5" src={iconImage} alt="delete icon" />
                    </button>
                  </div>
                  <button className="bg-amber-600 rounded-2xl h-12 w-full text-black font-bold">
                    Checkout
                  </button>
                </div>
              ) : (
                <span className="flex justify-center w-full">Your cart is empty.</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
