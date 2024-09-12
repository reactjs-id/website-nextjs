import type { PropsWithChildren } from "react";

export function HeroSection({ children }: PropsWithChildren) {
  return (
    <section className="px-4 pb-24 pt-24 lg:px-10">
      <div className="absolute -top-[130px] right-[180px] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#1f1f24] to-[#2a2d35] opacity-40 blur-3xl"></div>
      {children}
    </section>
  );
}
