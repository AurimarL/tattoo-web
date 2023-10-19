"use client";
import Image from "next/image";

export function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((imageData, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <Image
            key={imageData}
            src={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        </div>
      ))}
    </div>
  );
}
