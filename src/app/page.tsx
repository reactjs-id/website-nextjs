import { HeroSection } from './_components/home/hero-section';
import { ReactIDLogo } from './_components/icons/reactjs-id';

export default function Home() {
  return (
    <HeroSection>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-8 md:gap-10 lg:gap-12">
        <ReactIDLogo className="h-8 md:h-12 lg:h-16" />
        <h1 className="text-center font-bold text-6xl text-white md:text-7xl lg:text-8xl">
          Komunitas Developer ReactJS Indonesia
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          Bergabunglah dengan Komunitas Developer React dan React Native Indonesia! Hadiri Meetup Bulanan dan dapatkan
          wawasan terbaru tentang React dan ekosistemnya
        </p>
      </div>
    </HeroSection>
  );
}
