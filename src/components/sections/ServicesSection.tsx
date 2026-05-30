import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream text-forest" style={{ backgroundImage: "linear-gradient(to bottom, #E5D9BD 80%, rgba(134,70,42,0.06) 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl lg:text-6xl max-w-xl text-forest">
            Solutions tailored for your scale.
          </h2>
          <p className="text-lg text-forest/70 font-sans max-w-sm">
            From bespoke residential aesthetic integrations to large-scale
            commercial arrays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="#" className="group relative h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden cursor-pointer border border-forest/10 shadow-sm block">
            <Image
              src="/images/resident.webp"
              alt="Residential Solar"
              width={800}
              height={1200}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
              <h3 className="text-3xl text-cream mb-3">Residential</h3>
              <p className="font-sans text-cream/80 mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Elegant, low-profile solar roof integrations designed to blend
                seamlessly with your home&apos;s architecture.
              </p>
              <div className="inline-flex items-center font-sans tracking-wide text-white/90 font-medium">
                Explore Residential{" "}
                <ArrowRight weight="bold" className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link href="#" className="group relative h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden cursor-pointer border border-forest/10 shadow-sm block">
            <Image
              src="/images/commercial.webp"
              alt="Commercial Solar"
              width={800}
              height={1200}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
              <h3 className="text-3xl text-cream mb-3">Commercial</h3>
              <p className="font-sans text-cream/80 mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Robust, scalable infrastructure that significantly lowers OPEX
                and helps achieve corporate sustainability goals.
              </p>
              <div className="inline-flex items-center font-sans tracking-wide text-white/90 font-medium">
                Explore Commercial{" "}
                <ArrowRight weight="bold" className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
