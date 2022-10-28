export const DogImages = ({ isLoading, imageUrls }) => {
  if (isLoading) return <p>Loading...</p>;
  if (!imageUrls.length) return null;

  return imageUrls.map((imageUrl, i) => (
    <img width={200} height={200} src={imageUrl} key={i} alt="Dog" />
  ))
}