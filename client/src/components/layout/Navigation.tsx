import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="text-lg font-medium">
            Biogram
          </a>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/upload">
            <a className="text-sm font-medium">
              Upload
            </a>
          </Link>
          <Link href="/gallery">
            <a className="text-sm font-medium">
              Gallery
            </a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium">
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Add default export
export default Navigation;