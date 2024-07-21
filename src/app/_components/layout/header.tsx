import Link from 'next/link';

export function Header() {
  return (
    <header className="flex h-[86px] items-center">
      <div className="container mx-auto flex flex-row items-center gap-4">
        <div className="flex-grow">
          <h1 className="font-bold text-[32px] text-white leading-[40px]">
            <Link href="/">reactjs.id</Link>
          </h1>
        </div>
        <nav>
          <ul className="flex flex-row items-center gap-4">
            <li>
              <Link className="hover:text-white" href="/tentang-kami">
                tentang kami
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/blog">
                blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/acara">
                acara
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/materi">
                materi
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/merchandise">
                merchandise
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
