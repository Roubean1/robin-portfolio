import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-name">Robin Tokarsky</div>
          <div className="footer-sub">Full-stack Developer in Ostrava, CZ</div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/about">Profile</Link>
          <Link href="/contact">Contact</Link>
          <Link href="https://github.com/Roubean1" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </nav>

        <div className="footer-sub">Built with Next.js</div>
      </div>
    </footer>
  );
}
