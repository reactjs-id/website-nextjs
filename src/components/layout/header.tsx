import { headerUrls } from "@/lib/constants";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-[86px] items-center justify-center">
      <div className="container mx-7 flex w-full flex-row items-center justify-between gap-4">
        <div className="flex-grow">
          <h1 className="text-[32px] font-bold leading-[40px] text-white">
            <Link href="/">reactjs.id</Link>
          </h1>
        </div>

        <nav className="flex w-full justify-end">
          <ul className="flex flex-row items-center gap-24">
            {headerUrls.map(({ label, url }) => (
              <li key={url}>
                <Link className="font-medium hover:text-white" href={url}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
