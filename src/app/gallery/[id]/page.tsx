import Image from "next/image";

export async function generateStaticParams() {
  const ids = ["1", "2", "3", "4", "5", "0"];

  return ids.map((id) => ({
    id: id,
  }));
}

export default function page({ params }: { params: { id: string } }) {
  return (
    <main>
      <div className="flex justify-around">
        <div className="relative h-96 w-96">
          <Image fill src={`/${params.id}.png`} alt={params.id} />
        </div>
        <div></div>
      </div>
    </main>
  );
}
