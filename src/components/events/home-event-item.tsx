import { CalendarFold } from 'lucide-react';
import type { EventItem } from '@/app/_data/faker-events';

export interface HomeEventItemProps {
  event: EventItem;
}

export function HomeEventItem({ event }: HomeEventItemProps) {
  const { imgUrl, title, date, description } = event;

  return (
    <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-10">
      <img
        src={imgUrl}
        className="aspect-video w-full rounded-2xl object-cover drop-shadow-[0_4px_20px_0_rgba(17,29,44,0.48)] lg:w-80"
        alt=""
      />
      <div className="flex w-full flex-grow flex-col justify-center gap-2 lg:gap-4">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h3 className="line-clamp-2 truncate text-wrap font-medium text-lg text-white lg:line-clamp-1 lg:text-4xl">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-[#8E96A5] text-xs lg:text-xl">
            <CalendarFold size={21} />
            <p>{date}</p>
          </div>
        </div>
        <p className="line-clamp-2 text-[#C7CBD1] text-sm lg:text-xl">{description}</p>
      </div>
    </div>
  );
}
