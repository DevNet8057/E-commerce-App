import { useState } from "react";
import ProductImages from "./ProductImage";

interface ViewImageProps {
  setActiveImage: () => void;
}

export const ViewImage = ({ setActiveImage }: ViewImageProps) => {
  const [close, setClose] = useState(true);

  return (
    <div>
      {close && (
        <div
          className="see-all fixed bg-black/80 backdrop-blur-md w-full z-10000 top-0 right-0 h-full flex items-center justify-center"
          onClick={(e) => {
            // Fermer si on clique sur le fond
            if (e.target === e.currentTarget) setClose(false);
          }}
        >
          <div className="flex  h-170 max-[1600px]:mt-[3%] justify-center items-center">
            <ProductImages
              setClose={() => setClose(false)}
              setActiveImage={setActiveImage}
              isFullScreen={true} // Mode plein écran activé
            />
          </div>
        </div>
      )}
    </div>
  );
};
