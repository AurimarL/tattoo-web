import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function ServicesSectionComp({
  image,
  imageRight = false,
  title,
  text,
  href,
  headerTtle,
  placeholder,
}: {
  image: string;
  imageRight?: boolean;
  title: string;
  headerTtle: string;
  text: string;
  href?: string;
  placeholder: string;
}) {
  return (
    <div>
      <h1 className="text-center text-xl p-2">{headerTtle}</h1>
      <br />
      <div
        className={`flex items-center ${
          imageRight ? "md:flex-row-reverse" : "md:flex-row"
        }   flex-col justify-around gap-4 `}
      >
        <div className="relative h-96 w-96 md:w-[500px] md:h-[500px]">
          <Image src={image} alt={headerTtle} fill />
        </div>
        <div className={`w-96 mt-8 text-start`}>
          <div>
            <h1 className="text-xl">{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <br />
      {href ? (
        <div className="flex justify-center">
          <Link href={href}>
            <Button>{placeholder}</Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
