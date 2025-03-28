import { useState } from "react";
import "./App.css";
import NavBarEcommerce from "./assets/components/NavBarEcommerce";
import ProductImages from "./assets/components/ProductImage";
import ProductInformation from "./assets/components/ProductInformation";


function App() {
  const [cartArticle, setCartArticle]= useState(0)
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="gap-20 max-[1600px]:gap-5 relative flex flex-col">
        <NavBarEcommerce removeArticle={() => setCartArticle(0)} cartArticle={cartArticle} articleNumber={quantity} onAddArticle = { () => setCartArticle ((art) => (art < 1 ? art + 1 : art )) } />
        <div className="flex items-center justify-between mx-65">
          <div className="w-[50%] flex justify-center items-center ">
            <ProductImages />
        
          </div>
          <div className="w-[50%]">
            <ProductInformation 
            onAddArticle = { () => setCartArticle ((art) => (art < 1 ? art + 1 : art )) } 
            onDecrease={ () => setQuantity ((prev) => (prev > 1 ? prev - 1 : prev )) }
            onIncrease={ () => setQuantity ((prev) => prev + 1) }
            quantity={quantity}
            />
          </div>
          {/* <div className=" see-all absolute z-10000 top-50 right-165 ">
            <ProductImages />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
