import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useState } from "react";
import { ThumbnailImageProduct } from "./ThumbnailImageProduct";

interface ProductImagesProps {
  setActiveImage: () => void;
  setClose: () => void;
  isFullScreen: boolean; // Nouvelle prop pour indiquer si on est en mode plein écran
}

function ProductImages({
  setActiveImage,
  setClose,
  isFullScreen,
}: ProductImagesProps) {
  const images = [
    "/src/assets/images/image-product-1-thumbnail.jpg",
    "/src/assets/images/image-product-2-thumbnail.jpg",
    "/src/assets/images/image-product-3-thumbnail.jpg",
    "/src/assets/images/image-product-4-thumbnail.jpg",
  ];
  const imagesfull = [
    "/src/assets/images/image-product-1.jpg",
    "/src/assets/images/image-product-2.jpg",
    "/src/assets/images/image-product-3.jpg",
    "/src/assets/images/image-product-4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedImagefull, setSelectedImagefull] = useState(imagesfull[0]);

  const handlePrev = () => {
    const currentIndex = imagesfull.indexOf(selectedImagefull);
    const prevIndex =
      (currentIndex - 1 + imagesfull.length) % imagesfull.length;
    setSelectedImage(images[prevIndex]);
    setSelectedImagefull(imagesfull[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = imagesfull.indexOf(selectedImagefull);
    const nextIndex = (currentIndex + 1) % imagesfull.length;
    setSelectedImage(images[nextIndex]);
    setSelectedImagefull(imagesfull[nextIndex]);
  };

  return (
    <div className="flex justify-center gap-8 max-[1600px]:gap-3 items-center flex-col h-150">
      <div className="relative rounded-2xl flex items-center gap-10 shadow-amber-100/50">
        {/* Bouton Previous */}
        <button
          className={`cursor-pointer bg-white absolute left-[-20px] top-1/2 transform -translate-y-1/2 rounded-full ${
            isFullScreen ? "visible" : "hidden"
          }`}
          onClick={handlePrev}
        >
          <CircleArrowLeft size={35} />
        </button>

        {/* Image principale */}
        <button
          onClick={setActiveImage}
          className="cursor-pointer transition-transform"
        >
          <img
            className={`w-120 max-[1600px]:w-100 rounded-2xl ${
              isFullScreen ? "opacity-100" : "hover:opacity-75"
            }`}
            src={selectedImagefull}
            alt="product main image"
          />
        </button>

        {/* Bouton Next */}
        <button
          className={`cursor-pointer bg-white absolute right-[-20px] top-1/2 transform -translate-y-1/2 rounded-full ${
            isFullScreen ? "visible" : "hidden"
          }`}
          onClick={handleNext}
        >
          <CircleArrowRight size={35} />
        </button>

        {/* Bouton Close */}
        <button
          className={`absolute top-[-25px] right-[-20px] text-2xl cursor-pointer text-white ${
            isFullScreen ? "visible" : "hidden"
          }`}
          onClick={setClose}
        >
          ✖
        </button>
      </div>

      {/* Miniatures */}
      <div className="flex h-22 max-[1600px]:h-20 justify-between w-120 max-[1600px]:w-100">
        {images.map((image, index) => (
          <ThumbnailImageProduct
            key={index}
            image={image}
            isSelected={selectedImage === image}
            onClick={() => {
              setSelectedImage(image);
              setSelectedImagefull(imagesfull[index]);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
