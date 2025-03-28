import { useState } from "react";
import { ThumbnailImageProduct } from "./ThumbnailImageProduct";

function ProductImages() {
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
      <div className="shadow-lg rounded-2xl flex items-center gap-10 shadow-amber-100/50 relative">

        <button className="cursor-pointer bg-white px-4 py-2 absolute right-115 rounded-[50%]" onClick={handlePrev}>
          ◀
        </button>


        <img
          className="w-120 max-[1600px]:w-100 rounded-2xl"
          src={selectedImagefull}
          alt="product main image"
        />


        <button className="cursor-pointer  bg-white px-4 py-2 absolute left-115 rounded-[50%]" onClick={handleNext}>
          ▶
        </button>


        <button className="absolute top-[-25px] right-[-20px] text-2xl cursor-pointer text-white ">✖</button>
      </div>

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
