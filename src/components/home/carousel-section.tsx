import type { HeroPhoto } from '@/app/_data/hero-photos';

export interface CarouselSectionProps {
  heroPhotos: HeroPhoto[];
}

export function CarouselSection({ heroPhotos }: CarouselSectionProps) {
  return (
    <section className="xs:mb-20 w-full overflow-y-hidden overflow-x-scroll lg:mb-32">
      <ul className="-mx-20 flex justify-between xs:gap-2 lg:gap-8">
        {heroPhotos.map((photo, index) => (
          <li key={photo.slug} className={`h-auto py-3 ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'}`}>
            <img src={photo.url} alt={photo.text} width={400} height={270} className="rounded-3xl bg-slate-700" />
          </li>
        ))}
      </ul>
    </section>
  );
}
