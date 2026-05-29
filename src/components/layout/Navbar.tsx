import Link from "next/link";

export function Navbar() {
  return (
    <nav className="relative z-50 px-6 py-6 lg:px-12 flex justify-between items-center text-cream">
      <div className="font-sans text-2xl font-bold tracking-tight">
        Gem Solar
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium opacity-90">
        <Link href="#services" className="hover:text-white transition-colors">
          Solutions
        </Link>
        <Link href="#process" className="hover:text-white transition-colors">
          Our Process
        </Link>
        <Link href="#faq" className="hover:text-white transition-colors">
          FAQ
        </Link>
      </div>
      <button className="hidden md:block bg-transparent text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-cream hover:text-forest transition-all backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
        Contact
      </button>
    </nav>
  );
}
