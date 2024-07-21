import Link from 'next/link';
import { ReactIDLogo } from '../icons/reactjs-id';
import { siFacebook, siGithub, siTelegram, siX } from 'simple-icons';

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 px-4 py-16 lg:gap-16 lg:px-10">
      <div className="container flex flex-row items-end justify-between">
        <ReactIDLogo className="h-8" />
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
        <div className="flex items-center gap-8">
          {[siFacebook, siGithub, siTelegram, siX].map(({ title, path }) => (
            <svg
              key={title}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width={24}
              height={24}
            >
              <title>{title}</title>
              <path d={path} />
            </svg>
          ))}
        </div>
      </div>
      <div className="container flex flex-row items-end gap-4">
        <div className="w-full max-w-screen-md space-y-2">
          <h3 className="font-bold text-2xl text-white lg:text-3xl">React.js Indonesia</h3>
          <p>
            React.js Indonesia adalah komunitas developer React dan React Native terbesar di Indonesia, bertujuan untuk
            menghubungkan dan mendukung para developer.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-grow justify-end">
          <p>Hak cipta &copy; React.js Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
