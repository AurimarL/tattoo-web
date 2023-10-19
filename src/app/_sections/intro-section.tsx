import Image from "next/image";

export default function IntroSection() {
  return (
    <section className=" w-full">
      <div className="h-96 w-full md:h-[500px] bg-black relative">
        <Image priority alt="" src="/bg.png" fill />
        <div className="flex justify-center relative items-center h-full">
          <h1 className="text-white text-3xl ">Big image with Text here</h1>
        </div>
      </div>
    </section>
  );
}
