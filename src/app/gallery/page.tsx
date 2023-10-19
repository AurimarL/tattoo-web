import ImageGallery from "@/components/ImageGallery";

export default function GalleryPage() {
  const images = ["1", "2", "0", "3", "4", "5", "1", "2", "0", "3", "4", "5"];
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}
