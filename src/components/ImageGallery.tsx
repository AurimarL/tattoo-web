// components/ImageGallery.js
import Image from "next/image";
import Link from "next/link";

const ImageGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {images.map((image, index) => (
        <div key={index} className="bg-white p-2 h-fit rounded-lg shadow-md">
          <Link href={`/gallery/${image}`}>
            <div className="aspect-ratio-4/3">
              <Image
                src={`/${image}.png`}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
