import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="header__name">
          {site.name}
        </Link>
        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/connect" className="btn">
            Let&rsquo;s connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
