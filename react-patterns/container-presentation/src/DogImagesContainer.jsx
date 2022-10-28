import { useEffect, useState } from "react"
import { DogImages } from "./DogImages";

export const DogImagesContainer = () => {
  const [isLoading, setIsLoading] =  useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then(res => res.json())
      .then(({ message: imageUrls }) => setImageUrls(imageUrls))
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  return <DogImages imageUrls={imageUrls} isLoading={isLoading} />
}