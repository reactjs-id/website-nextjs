import Image from "next/image";

export function CollaborationSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 px-4 py-24 lg:px-10">
      <div className="flex items-end gap-2">
        <h2 className="text-center text-4xl font-bold text-white">
          Kolaborasi
        </h2>{" "}
        <div className="flex items-end gap-1">
          <span>dengan</span>
          <Image
            src="/logo.png"
            alt="ReactJS Indonesia"
            className="mb-1"
            width={40}
            height={40}
          />
        </div>
      </div>
      <p className="w-full text-center text-lg text-[#C7CBD1] sm:w-[1000px]">
        Kami di reactjs.id menyelenggarakan event untuk developer React JS
        indonesia berbagi wawasan dan pengetahuan mengenai ekosistem Reactjs.
      </p>
      <Image
        src="/collaboration-map.png"
        alt="Collaboration Section"
        width={1000}
        height={500}
      />
      <h3 className="text-[24px] font-medium text-[#B1C8E791]">
        Member Telegram
      </h3>
      <h2 className="text-[40px] font-medium text-[#C7CBD1]">50.000</h2>
    </section>
  );
}