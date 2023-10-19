import ImageGallery from "@/components/ImageGallery";

export default function GalleryPage() {
  const images = ["/1.png", "/2.png", "/0.png", "/3.png", "/5.png", "/2.png"];
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}
