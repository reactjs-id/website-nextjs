import type { EventItem } from '@/app/_data/faker-events';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ReactIDLogo } from '../icons/reactjs-id';
import { HomeEventItem } from '../events/home-event-item';
import Link from 'next/link';

export interface NetworkingSectionProps {
  events?: EventItem[];
}

export function NetworkingSection({ events }: NetworkingSectionProps) {
  return (
    <section className="flex flex-col gap-14 px-4 pt-24 pb-24 md:gap-16 lg:gap-20 lg:px-10">
      <div className="container mx-auto flex flex-row items-center gap-4">
        <div className="flex-grow space-y-4">
          <div className="flex flex-wrap items-end gap-2.5">
            <h2 className="font-bold font-white text-3xl text-white lg:text-4xl">Networking</h2>
            <p className="inline-flex flex-wrap items-end gap-2.5">
              <span>dengan</span> <ReactIDLogo className="mb-1 h-6" aria-label="React.js Indonesia" />
            </p>
          </div>
          <p className="text-xl lg:text-2xl">
            Di React.js Indonesia, Anda akan bertemu dengan para profesional dari berbagai latar belakang dan tingkat
            pengalaman.
          </p>
        </div>
        <Image className="flex-shrink-0" alt="" width={692} height={237} src="/networking-header.png" />
      </div>
      {events?.length && events.length > 0 ? (
        <div className="container mx-auto flex flex-col items-center gap-10 lg:gap-12">
          {events.map((item) => (
            <HomeEventItem key={item.title} event={item} />
          ))}
        </div>
      ) : null}
      <div className="container mx-auto flex">
        <Link
          href="/events"
          className="inline-flex flex-row items-center justify-start gap-2 rounded-lg border border-[#2E3137] bg-[#1B212A] px-4 py-2 text-center md:rounded-xl md:px-6 md:py-4 lg:rounded-2xl lg:px-9 lg:py-6"
        >
          <span className="md:text-xl lg:text-2xl">Lihat semua acara</span>
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
