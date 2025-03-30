import { useState } from "react";
import "./App.css";
import NavBarEcommerce from "./assets/components/NavBarEcommerce";
import ProductImages from "./assets/components/ProductImage";
import ProductInformation from "./assets/components/ProductInformation";
import { ViewImage } from "./assets/components/ViewImage";

function App() {
  const [cartArticle, setCartArticle] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, SetActiveImage] = useState(false);
  return (
    <>
      <div className="gap-20 max-[1600px]:gap-5 relative flex flex-col">
        <NavBarEcommerce
          removeArticle={() => setCartArticle(0)}
          cartArticle={cartArticle}
          articleNumber={quantity}
          onAddArticle={() =>
            setCartArticle((art) => (art < 1 ? art + 1 : art))
          }
        />
        <div className="flex items-center justify-between mx-65">
          <div className="w-[50%] flex justify-center items-center ">
            <ProductImages setClose={()=> SetActiveImage(true)} setActiveImage={() => SetActiveImage(!activeImage)} />
          </div>
          <div className="w-[50%]">
            <ProductInformation
              onAddArticle={() =>
                setCartArticle((art) => (art < 1 ? art + 1 : art))
              }
              onDecrease={() =>
                setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
              }
              onIncrease={() => setQuantity((prev) => prev + 1)}
              quantity={quantity}
            />
          </div>
          {(activeImage) && (
            <div>
              <ViewImage   setActiveImage={() => SetActiveImage(true)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
