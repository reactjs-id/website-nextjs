import type { PropsWithChildren } from 'react';

export function HeroSection({ children }: PropsWithChildren) {
  return <section className="px-4 pt-24 pb-24 lg:px-10">{children}</section>;
}
