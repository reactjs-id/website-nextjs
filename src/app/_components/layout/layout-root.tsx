import type { PropsWithChildren } from 'react';

export function LayoutRoot({ children }: PropsWithChildren) {
  return <div className="flex h-full min-h-screen w-full flex-col">{children}</div>;
}
