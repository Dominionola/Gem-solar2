import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest text-cream pt-24 pb-12 px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-5xl lg:text-7xl mb-6 text-cream">
            Ready to make the switch?
          </h2>
          <p className="font-sans text-xl text-cream/70 mb-12 max-w-md">
            Request a free consultation and customized solar design for your
            property.
          </p>
          <div className="space-y-6 font-sans text-cream/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center">
                <CheckCircle weight="fill" className="w-5 h-5 text-terracotta" />
              </div>
              <span>Free site analysis & energy audit</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center">
                <CheckCircle weight="fill" className="w-5 h-5 text-terracotta" />
              </div>
              <span>25-year comprehensive warranty</span>
            </div>
          </div>
        </div>

        <div className="bg-cream/5 rounded-[40px] p-8 md:p-12 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          <h3 className="font-sans font-bold text-3xl mb-8">Get Your Free Quote</h3>
          <form className="flex flex-col gap-6 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-cream/70 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-cream text-forest px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta placeholder:text-forest/30"
                  placeholder="Elias"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-cream/70 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-cream text-forest px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta placeholder:text-forest/30"
                  placeholder="Vance"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-cream/70 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-cream text-forest px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta placeholder:text-forest/30"
                placeholder="elias.v@example.com"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-sm font-medium text-cream/70 mb-2"
              >
                Property Address / Zip Code
              </label>
              <input
                type="text"
                id="address"
                className="bg-cream text-forest px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta placeholder:text-forest/30"
                placeholder="Optional"
              />
            </div>
            <button
              type="button"
              className="mt-4 bg-terracotta hover:bg-[#8e4f38] text-white px-8 py-5 rounded-2xl text-lg font-medium transition-all shadow-lg flex items-center justify-center gap-2 group w-full"
            >
              Send Request{" "}
              <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* NAP + Service Area + Legal footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-cream/10 relative z-10">

        {/* NAP Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 font-sans text-sm text-cream/60">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-cream/30 mb-2 font-semibold">Address</p>
            <address className="not-italic leading-relaxed">
              Gem Solar Nigeria<br />
              Ibadan, Oyo State, Nigeria
            </address>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-cream/30 mb-2 font-semibold">Contact</p>
            <p>
              <a href="tel:+2348051307748" className="hover:text-cream transition-colors">+234 805 130 7748</a><br />
              <a href="mailto:gemsolar2020@gmail.com" className="hover:text-cream transition-colors">gemsolar2020@gmail.com</a>
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-cream/30 mb-2 font-semibold">Service Areas</p>
            <p className="leading-relaxed">Lagos · Ibadan · Abuja<br />Port Harcourt · Ogun · Osun</p>
          </div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-cream/10 text-sm text-cream/50">
          <div className="font-sans text-xl font-bold text-cream">
            Gem Solar
          </div>
          <p>
            &copy; {new Date().getFullYear()} Gem Solar Nigeria. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
