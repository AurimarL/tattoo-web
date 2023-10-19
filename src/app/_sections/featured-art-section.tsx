import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedArtSection() {
  const featureImages: string[] = [
    "1",
    "4",
    "3",
    "5",
    "0",
    "2",
    "4",
    "1",
    "2",
    "0",
    "3",
    "1",
  ];
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-center text-xl p-2 bg-black text-white">
        Some artworks
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mx-auto">
        {featureImages.map((e, i) => {
          return (
            <Link
              key={i}
              href={"/gallery/" + e}
              className="md:hover:scale-150 md:hover:z-50 md:hover:transition-transform"
            >
              <div className=" relative h-28 w-28 md:h-40 md:w-40">
                <Image className="rounded" src={`/${e}.png`} alt="" fill />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href={"/gallery"}>
          <Button>See All</Button>
        </Link>
      </div>
    </section>
  );
}
